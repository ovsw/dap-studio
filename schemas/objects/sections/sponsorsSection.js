import { IoMdBusiness } from "react-icons/io";

export default {
  name: "sponsorsSection",
  type: "object",
  liveEdit: false,
  title: "Sponsors Section",
  icon: IoMdBusiness,
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "sponsorsList",
      type: "array",
      title: "Select Sponsors to show",
      description:
        'select sponsors to appear here. Reminder: you can edit sponsors in the left main menu, under "Sponsors"',
      validation: (Rule) => Rule.error("Must select sponsors.").required(),
      options: {
        layout: "grid",
      },
      of: [
        {
          type: "reference",
          to: [{ type: "sponsor" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title = "Sponsors Section" }) {
      const subtitle = title == "Sponsors Section" ? "" : "Sponsors Section";
      return {
        title,
        subtitle,
      };
    },
  },
};
