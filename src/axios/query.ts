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

export const homePageClientReview = encodeURI(`*[_type == "clients"]{
  _id,
  name,
  designation,
  review,
  "clientimage" : clientimage.asset->url
}`);

export const whatsAppNumber = encodeURI(`*[_type == "website-settings"]{
  _id,
  WhatsAppNumber,
}`);

export const footerContactItems = encodeURI(`
  *[_type == "website-settings"]{
  footercontactnumber1,
  footercontactnumber2,
  footercontactemail,
  footerlocation
}`);
