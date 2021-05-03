import { FaParagraph } from "react-icons/fa";

export default {
  name: "rteSection",
  type: "object",
  liveEdit: false,
  title: "Rich Text Section",
  icon: FaParagraph,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Section Title",
      validation: (Rule) => Rule.error("Missing Text Section title").required(),
    },
    {
      name: "body",
      type: "bodyPortableText",
      title: "Body",
      validation: (Rule) => Rule.error("missing Text Section Body").required(),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      let subtitle = "Text Section";

      return {
        title: title,
        subtitle: subtitle,
      };
    },
  },
};
