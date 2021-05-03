import React from "react";
import { RiLayoutColumnLine } from "react-icons/ri";

export default {
  name: "magSection",
  type: "object",
  liveEdit: true,
  title: "Image/Video Section",
  icon: RiLayoutColumnLine,
  fields: [
    {
      name: "theme",
      title: "Color Theme",
      type: "string",
      options: {
        list: [
          {
            title: "Green Frame / Green Btn",
            value: "greenTheme-frame-greenBtn",
          },
          { title: "Green Frame / Red Btn", value: "greenTheme-frame-redBtn" },
          {
            title: "Green Frame / Blue Btn",
            value: "greenTheme-frame-blueBtn",
          },

          { title: "Blue Frame / Blue Btn", value: "blueTheme-frame-blueBtn" },
          {
            title: "Blue Frame / Green Btn",
            value: "blueTheme-frame-greenBtn",
          },
          { title: "Blue Frame / Red Btn", value: "blueTheme-frame-redBtn" },

          { title: "Red Frame / Red Btn", value: "redTheme-frame-redBtn" },
          { title: "Red Frame / Green Btn", value: "redTheme-frame-greenBtn" },
          { title: "Red Frame / Blue Btn", value: "redTheme-frame-blueBtn" },

          {
            title: "Yellow Frame / Green Btn",
            value: "yellowTheme-frame-greenBtn",
          },
          {
            title: "Yellow Frame / Blue Btn",
            value: "yellowTheme-frame-blueBtn",
          },
          {
            title: "Yellow Frame / Red Btn",
            value: "yellowTheme-frame-redBtn",
          },

          { title: "Green Bg / White Btn", value: "greenTheme-fill-whiteBtn" },
          {
            title: "Green Bg / Yellow Btn",
            value: "greenTheme-fill-yellowBtn",
          },

          { title: "Blue Bg / White Btn", value: "blueTheme-fill-whiteBtn" },
          { title: "Blue Bg / Yellow Btn", value: "blueTheme-fill-yellowBtn" },

          { title: "Red Bg / White Btn", value: "redTheme-fill-whiteBtn" },
          { title: "Red Bg / Yellow Btn", value: "redTheme-fill-yellowBtn" },

          {
            title: "Yellow Bg / Green Btn",
            value: "yellowTheme-fill-greenBtn",
          },
          { title: "Yellow Bg / Blue Btn", value: "yellowTheme-fill-blueBtn" },
          { title: "Yellow Bg / Red Btn", value: "yellowTheme-fill-redBtn" },
        ],
      },
      validation: (Rule) => Rule.error("Select a color theme.").required(),
    },
    {
      name: "eyebrow",
      type: "string",
      title: "Eyebrow",
      description:
        "optional short colored text appearing just above the Section Title",
    },
    {
      name: "title",
      type: "string",
      title: "Section Title (required)",
      description: "the main big text in the section",
      validation: (Rule) =>
        Rule.error("Enter the title of the CTA section.").required(),
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle (optional)",
      description: "secondary title under the main one",
    },
    {
      name: "text",
      type: "simplePortableText",
      title: "Content (required)",
      description:
        "text content for this section. If you don't have anything to say here, use a CTA section instead",
    },
    // {
    //   name: "button1",
    //   type: "button",
    //   title: "Primary Button",
    //   description: "optional button at the end of the section's content",
    // },
    {
      name: "buttons",
      title: "Buttons",
      description: "optional buttons at the end of the section's content",
      type: "array",
      of: [{ type: "button" }],
    },
    {
      name: "image",
      type: "bgImage",
      title: "Image",
      description: "appears to the side of the text",
      validation: (Rule) =>
        Rule.error("Add an image to the Image section.").required(),
    },
    {
      name: "video",
      type: "string",
      title: "Video",
      description:
        "(optional) if you'd like to show a video when clicking on this section's image, add a link to the video's page (YouTube or Vimeo)",
    },
  ],
  preview: {
    select: {
      title: "title",
      image: "image",
      theme: "theme",
    },
    prepare({ title, image, theme }) {
      let subtitle = "no theme selected";
      if (theme) {
        const themeArray = theme.split("-");

        const themeColor = themeArray[0].replace("Theme", "");
        const capitalizedThemeColor =
          themeColor.charAt(0).toUpperCase() + themeColor.slice(1);

        const butnColor = themeArray[2].replace("Btn", "");
        const capitalizedBtnColor =
          butnColor.charAt(0).toUpperCase() + butnColor.slice(1);

        subtitle = `Img Section: ${capitalizedThemeColor} ${themeArray[1]} + ${capitalizedBtnColor} Btn`;
      }
      return {
        title: `${title}`,
        subtitle: subtitle,
        media: image,
      };
    },
  },
};
