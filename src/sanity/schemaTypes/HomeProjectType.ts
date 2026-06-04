import { defineField, defineType } from "sanity";
import {  HomeIcon } from "@sanity/icons";

export const HomeProjectType = defineType({
  name: "home-projects",
  title: "Home-Projects",
  type: "document",
  icon: HomeIcon,
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
