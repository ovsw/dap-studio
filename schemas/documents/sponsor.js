import { IoMdBusiness } from "react-icons/io";

export default {
  name: "sponsor",
  title: "Sponsor",
  type: "document",
  icon: IoMdBusiness,
  liveEdit: false,
  __experimental_actions: [
    "create",
    "update",
    "publish",
    "delete",
  ] /* 'create', 'delete' */,
  fields: [
    {
      name: "name",
      title: "Sponsor Name",
      type: "string",
      validation: (Rule) => Rule.error("Missing Sponsor Name.").required(),
    },
    {
      name: "image",
      title: "Sponsor Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.error("Missing Sponsor Logo.").required(),
    },
    {
      name: "url",
      title: "Link to sponsor's website",
      type: "url",
      validation: (Rule) => [
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
        Rule.error("Missing Sponsor Link").required(),
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
      title: "name",
      media: "image",
    },
  },
};
