import axios from "axios"
import { footerContactItems, homeInteriorPageClientReview, homePageClientReview, homeProjectQuery, officeProjectQuery, whatsAppNumber } from "./query"

const api  = axios.create({})

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string


export const homeProjectApi = () => {
    return api.get(`https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${homeProjectQuery}`)
}

export const officeProjectApi = () => {
    return api.get(`https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${officeProjectQuery}`)
}

export const HomePageClientReviewApi = () => {
    return api.get(`https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${homePageClientReview}`)
}

export const whatsAppApi = () => {
  return api.get(`https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${whatsAppNumber}`)
}

export const footerContactApi = () => {
    return api.get(`https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${footerContactItems}`)
}

export const homeInteriorPageClientReviewApi = () =>{
  return api.get(`https://${projectId}.api.sanity.io/v2026-06-03/data/query/production?query=${homeInteriorPageClientReview}`)
}