import { defineField, defineType } from "sanity";
import {WrenchIcon} from '@sanity/icons'

export const WebsiteSettingsType = defineType({
  name: "website-settings",
  title: "Website Settings",
  type: "document",
  icon : WrenchIcon,
  fields: [
    defineField({
      name: "WebSiteSettings",
      title: "WebSite Settings",
      type: "string",
    }),
    defineField({
      name: "WhatsAppNumber",
      title: "Contact WhatsApp",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "footercontactnumber1",
      title: "Footer Contact Number 1",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "footercontactnumber2",
      title: "Footer Contact Number 2",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "footercontactemail",
      title: "Footer Contact email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "footerlocation",
      title: "Footer location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
