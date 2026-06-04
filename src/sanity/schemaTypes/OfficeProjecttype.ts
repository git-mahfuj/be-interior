import { defineField, defineType } from "sanity";
import { DesktopIcon } from "@sanity/icons";

export const OfficeProjectType = defineType({
  name: "office-projects",
  title: "Office-Projects",
  type: "document",
  icon: DesktopIcon,
  fields: [
    defineField({
      name: "name",
      title: "Project Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverimage",
      title: "Project Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [{ type: 'image' }], 
      options: { layout: 'grid' } ,
      validation: (Rule) => Rule.required(),
    }),
  ],
});
