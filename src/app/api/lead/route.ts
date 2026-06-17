import { NextRequest, NextResponse } from "next/server";
import { createClient } from "next-sanity";

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  apiVersion: "2026-06-12",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN as string,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, phone, projectInfo } = body;

    const newLead = await writeClient.create({
      _type: "leads",
      name,
      email,
      phone,
      projectInfo,
    });

    return NextResponse.json(
      {
        success: true,
        data: newLead,
      },
      {
        status: 200,
      },
    );
  } catch (error: any) {
    console.log("lead api error", error.message);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
