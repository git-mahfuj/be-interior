"use client";
import React, { useEffect, useState } from "react";
import { useClient } from "sanity";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Leads {
  _id: string;
  name: string;
  email: string;
  phone: string;
  projectInfo: string;
}

export function CustomStatsWidget() {
  const client = useClient({ apiVersion: "2026-06-12" });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [stats, setStats] = useState({
    totalProjects: 0,
    totalHomeProjects: 0,
    totalOfficeProjects: 0,
    totalLeads: 0,
  });
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tableLoading, setTableLoading] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        const totalProjects = await client.fetch(
          `count(*[_type in ["home-projects", "office-projects"]])`,
        );
        const totalHomeProjects = await client.fetch(
          `count(*[_type == "home-projects"])`,
        );
        const totalOfficeProjects = await client.fetch(
          `count(*[_type == "office-projects"])`,
        );
        const totalLeads = await client.fetch(`count(*[_type == "leads"])`);

        setStats({
          totalProjects,
          totalHomeProjects,
          totalOfficeProjects,
          totalLeads,
        });
      } catch (err) {
        if (process.env.NODE_ENV === "development") {
          console.error(err);
        }
      }
    }
    fetchStats();
  }, [client]);

  useEffect(() => {
    async function fetchLeadsPage() {
      setTableLoading(true);
      try {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        const fetchedLeads = await client.fetch(
          `*[_type == "leads"] | order(_createdAt desc)[${start}...${end}]`,
        );
        setLeads(fetchedLeads);
      } catch (err) {
        if (process.env.NODE_ENV === "development") {
          console.error(err);
        }
      } finally {
        setTableLoading(false);
        setLoading(false);
      }
    }
    fetchLeadsPage();
  }, [client, currentPage]);

  const totalPages = Math.ceil(stats.totalLeads / itemsPerPage);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-50 w-full gap-3 p-5 text-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#1a2621] border-t-[#82b39e] border-r-amber-400" />
        <p className="font-serif text-13 font-medium tracking-wide text-white/50 animate-pulse">
          Fetching Be Interior Stats...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full rounded-8 bg-[#101714] p-5 text-white">
      <h2 className="mb-4 font-serif text-2xl font-bold">
        Be Interior Overview
      </h2>

      <div className="mb-5 flex gap-4">
        <div className="flex-1 lg:flex items-center justify-around gap-4 rounded-6 border border-white/10 bg-[#1a2621] p-4 shadow-sm">
          <div className="text-center">
            <div className="text-12 text-[#888]">Total Projects</div>
            <div className="mt-1 text-2xl font-bold text-[#82b39e]">
              {stats.totalProjects}
            </div>
          </div>
          <div className="text-center">
            <div className="text-12 text-[#888]">Total Home</div>
            <div className="mt-1 text-2xl font-bold text-[#82b39e]">
              {stats.totalHomeProjects}
            </div>
          </div>
          <div className="text-center">
            <div className="text-12 text-[#888]">Total Office</div>
            <div className="mt-1 text-2xl font-bold text-[#82b39e]">
              {stats.totalOfficeProjects}
            </div>
          </div>
        </div>

        <div className="flex-1 rounded-6 border border-white/10 bg-[#1a2621] p-4 shadow-sm text-center">
          <div className="text-12 text-[#888]">Total Leads</div>
          <div className="mt-1 text-2xl font-bold text-amber-400">
            {stats.totalLeads}
          </div>
        </div>
      </div>

      <h3 className="mb-3 font-serif text-lg font-medium text-white/90">
        Recent Enquiries
      </h3>

      <div className="w-full overflow-x-auto rounded-xl border border-white/5 bg-[#16221d] shadow-lg relative">
        {tableLoading && (
          <div className="absolute inset-0 bg-[#16221d]/60 backdrop-blur-[1px] flex items-center justify-center z-10">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-transparent border-t-[#82b39e]" />
          </div>
        )}

        <div className="grid grid-cols-4 gap-4 border-b border-white/10 bg-black/20 px-6 py-3 text-13 font-semibold text-white/50">
          <div>Client Name</div>
          <div>Email Address</div>
          <div>Phone</div>
          <div>Project Info</div>
        </div>

        <div className="divide-y divide-white/5">
          {leads.length > 0 ? (
            leads.map((lead: Leads) => (
              <div
                key={lead._id}
                className="grid grid-cols-4 gap-4 items-center px-6 py-3.5 text-12 text-white/90 hover:bg-white/5 transition-colors duration-200"
              >
                <div
                  className="font-medium text-[#82b39e] truncate"
                  title={lead.name}
                >
                  {lead.name}
                </div>
                <div className="text-white/70 truncate" title={lead.email}>
                  {lead.email}
                </div>
                <div className="text-white/60 tracking-wider">
                  {lead.phone || "N/A"}
                </div>
                <div
                  className="text-white/80 max-w-xs truncate"
                  title={lead.projectInfo}
                >
                  {lead.projectInfo}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-white/40 text-13">
              No active leads available.
            </div>
          )}
        </div>
        {stats.totalLeads > itemsPerPage && (
          <div className="flex items-center justify-between border-t border-white/10 bg-black/10 px-6 py-3 text-12 text-white/50">
            <div>
              Showing{" "}
              <span className="text-white font-medium">
                {(currentPage - 1) * itemsPerPage + 1}
              </span>{" "}
              to{" "}
              <span className="text-white font-medium">
                {Math.min(currentPage * itemsPerPage, stats.totalLeads)}
              </span>{" "}
              of{" "}
              <span className="text-white font-medium">{stats.totalLeads}</span>{" "}
              leads
            </div>

            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center justify-center p-1.5 rounded-md border border-white/10 bg-white/5 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Page Number */}
              <span className="text-12 font-medium bg-white/10 px-2.5 py-1 rounded-md text-white">
                {currentPage} / {totalPages || 1}
              </span>

              {/* Next Button */}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="flex items-center justify-center p-1.5 rounded-md border border-white/10 bg-white/5 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const customStatsWidgetPlugin = () => ({
  name: "custom-stats-widget",
  component: function component() {
    return <CustomStatsWidget />;
  },
});
