import { Flame } from "lucide-react";
import { defineField, defineType } from "sanity";

export const BlogSchemtype = defineType({
  name: "blogs",
  title: "Blogs",
  type: "document",
  icon: Flame,
  fields: [
    defineField({
      name: "blogname",
      title: "Blog Title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "blogname",
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "blogcover",
      title: "Blog Cover",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "bloggallery",
      title: "Blog Gallery",
      type: "array",
      of: [{ type: "image" }],
      options: { layout: "grid" },
      //   validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authorname",
      title: "Author name",
      type: "string",
      validation: (R) => R.required(),
    }),

    defineField({
      name: "authorimage",
      title: "Author Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "blogcategory",
      title: "Blog Category",
      type: "string",
      options: {
        list: [
          {
            title: "home interior",
            value: "home-interior",
          },
          {
            title: "styling",
            value: "styling",
          },
          {
            title: "tips&tricks",
            value: "tips",
          },
          {
            title: "office interior",
            value: "office",
          },
          {
            title: "design trends",
            value: "design-trends",
          },
        ],
      },
      validation: (r) => r.required(),
    }),
    {
      name: "publishedDate",
      title: "Published Date",
      type: "date",
      options: {
        dateFormat: "MMMM D, YYYY",
        calendarTodayLabel: "Today",
      },
      validation: (r) => r.required(),
    },
  ],
  preview: {
    select: {
      title: "blogname",
      subtitle: "authorname",
      media: "blogcover",
    },
    prepare(selection) {
      const { media, title, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle,
        media: media,
      };
    },
  },
});
