import axios from "axios";
import {
  allBlogQuery,
  allinteriorItem,
  allModalinteriorItem,
  contactItems,
  contactLocation,
  footerContactItems,
  homeInteriorPageClientReview,
  homePageClientReview,
  homeProjectQuery,
  interiorTeam,
  officeInteriorPageClientReview,
  officeProjectQuery,
  topFiveOfficeProjects,
  whatsAppNumber,
} from "./query";

const api = axios.create({});

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;

export const homeProjectApi = () => {
  return api.get(
    `https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${homeProjectQuery}`,
  );
};

export const officeProjectApi = () => {
  return api.get(
    `https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${officeProjectQuery}`,
  );
};

export const HomePageClientReviewApi = () => {
  return api.get(
    `https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${homePageClientReview}`,
  );
};

export const whatsAppApi = () => {
  return api.get(
    `https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${whatsAppNumber}`,
  );
};

export const footerContactApi = () => {
  return api.get(
    `https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${footerContactItems}`,
  );
};

export const homeInteriorPageClientReviewApi = () => {
  return api.get(
    `https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${homeInteriorPageClientReview}`,
  );
};

export const officeInteriorPageClientReviewApi = () => {
  return api.get(
    `https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${officeInteriorPageClientReview}`,
  );
};

export const interiorTeamApi = () => {
  return api.get(
    `https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${interiorTeam}`,
  );
};

export const contactItemApi = () => {
  return api.get(
    `https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${contactItems}`,
  );
};

export const contactLocationApi = () => {
  return api.get(
    `https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${contactLocation}`,
  );
};

export const allInteriorApi = () => {
  return api.get(
    `https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${allinteriorItem}`,
  );
};
export const allModalInteriorApi = () => {
  return api.get(
    `https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${allModalinteriorItem}`,
  );
};

interface FormDataType {
  name: string;
  email: string;
  phone: string;
  projectInfo: string;
}

export const createLeadApi = (formData: FormDataType ) => {
  return api.post("/api/lead", formData);
};

export const fetchtopFiveOfficeProjects = () => {
  return api.get(`https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${topFiveOfficeProjects}`,)
}

export const allBlogApi = () => {
  return api.get(`https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${allBlogQuery}`)
}
