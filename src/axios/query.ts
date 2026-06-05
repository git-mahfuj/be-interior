export const homeProjectQuery = encodeURIComponent(`*[_type == "home-projects"]{
  _id,
  name,
  "slug": slug.current,
  "coverImage": coverimage.asset->url
}`);

export const officeProjectQuery =
  encodeURIComponent(`*[_type == "office-projects"]{
  _id,
  name,
  "slug": slug.current,
  "coverImage": coverimage.asset->url
}`);

export const homePageClientReview = encodeURIComponent(`*[_type == "clients"]{
  _id,
  name,
  designation,
  review,
  "clientimage" : clientimage.asset->url
}`);

export const whatsAppNumber = encodeURIComponent(`*[_type == "website-settings"]{
  _id,
  WhatsAppNumber,
}`);

export const footerContactItems = encodeURIComponent(`
  *[_type == "website-settings"]{
  footercontactnumber1,
  footercontactnumber2,
  footercontactemail,
  footerlocation
}`);

export const homeInteriorPageClientReview = encodeURIComponent(`
  *[_type == "clients" && reviewCategory == "home"]{
  _id,
  name,
  review,
  "clientimage" : clientimage.asset->url
}`)
