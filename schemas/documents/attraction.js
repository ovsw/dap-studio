import Tabs from "sanity-plugin-tabs";
import { FaRegStar } from "react-icons/fa";

export default {
  name: "attraction",
  title: "Attraction / Ride",
  type: "document",
  icon: FaRegStar,
  liveEdit: false,
  __experimental_actions: [
    "create",
    "update",
    "publish",
    "delete",
  ] /* 'create', 'delete' */,
  fields: [
    {
      name: "content",
      type: "object",
      title: "Content",
      inputComponent: Tabs,
      fieldsets: [
        { name: "main", title: "Main" },
        { name: "status", title: "Status" },
        { name: "settings", title: "Settings" },
        { name: "seo", title: "SEO" },
      ],
      fields: [
        {
          fieldset: "main",
          name: "name",
          title: "Attraction / Ride Name",
          type: "string",
          validation: (Rule) => Rule.required().error("missing name"),
        },
        {
          fieldset: "main",
          name: "description",
          title: "Short Description",
          description:
            "Appears on the card of this attraction on the listing page.",
          type: "text",
          validation: (Rule) => Rule.required().error("missing text"),
        },
        {
          fieldset: "status",
          name: "status",
          type: "pageStatus",
          title: "Page Status",
          description:
            "this is used during development to keep track of the status of this page.",
          validation: (Rule) =>
            Rule.error(
              "You have to fill out the status of the page."
            ).required(),
        },
        {
          fieldset: "main",
          title: "Category",
          name: "category",
          type: "string",
          description:
            "used to differentiate between different attraction categories",
          options: {
            list: [
              {
                title: "Amusement Park - Kiddie Ride",
                value: "Amusement Park|Kiddie Ride",
              },
              {
                title: "Amusement Park - Family Ride",
                value: "Amusement Park|Family Ride",
              },
              {
                title: "Amusement Park - Thrill Ride",
                value: "Amusement Park|Thrill Ride",
              },
              { title: "Water Park", value: "Water Park" },
            ],
            layout: "radio", // <-- defaults to 'dropdown'
          },
          validation: (Rule) => Rule.required().error("missing location"),
        },
        {
          fieldset: "settings",
          name: "slug",
          type: "slug",
          title: "Slug",
          validation: (Rule) =>
            Rule.error("You have to fill out the slug of the page.").required(),
          description: "Slug is required to be able to show the page.",
          options: {
            source: "content.name",
            maxLength: 96,
          },
        },
        {
          fieldset: "settings",
          name: "mainImage",
          type: "bgImage",
          title: "Cover Image",
          description:
            "shown in the listing, and as a header background for the ride",
          validation: (Rule) => Rule.required().error("missing image"),
        },
        {
          fieldset: "main",
          name: "sections",
          title: "Content Sections",
          type: "array",
          of: [
            { type: "magSection" },
            { type: "ctaSection" },
            { type: "bigHeading" },
            { type: "tableSection" },
            { type: "faqSection" },
            { type: "cardSection" },
            { type: "menuSection" },
            { type: "reusedSection" },
          ],
        },
        {
          fieldset: "seo",
          name: "seo",
          title: "SEO Title",
          type: "seo",
        },
      ],
    },
  ],
  orderings: [
    {
      name: "createdAt",
      title: "Created older->newer",
      by: [
        {
          field: "_createdAt",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "content.name",
      slug: "content.slug",
      image: "content.mainImage",
      category: "content.category",
    },
    prepare({ title = "No title", slug = {}, image, category }) {
      const path = `/${slug.current}/`;
      const attractionCategories = category.split("|");

      return {
        title,
        subtitle: `${attractionCategories[0]}${
          attractionCategories[1] ? " - " + attractionCategories[1] : ""
        }`,
        media: image,
      };
    },
  },
};
