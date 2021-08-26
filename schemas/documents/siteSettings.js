import React from "react";
import Tabs from "sanity-plugin-tabs";
import { FaCheck, FaBan } from "react-icons/fa";

export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: ["update", "create", /* 'delete', */ "publish"],
  fields: [
    {
      name: "content",
      type: "object",
      title: "Content",
      inputComponent: Tabs,
      fieldsets: [
        { name: "alert", title: "Alert" },
        { name: "seo", title: "SEO" },
      ],
      fields: [
        // {
        //   fieldset: "alert",
        //   title: "Activate Alert",
        //   name: "alertIsActive",
        //   type: "boolean",
        //   description:
        //     "This controls whether the alert will be shown or not. If toggled enabled, a highlighted message will be displayed at the top of the website, on all pages.",
        // },
        // {
        //   fieldset: "alert",
        //   name: "alertMessage",
        //   title: "Alert Message:",
        //   type: "barePortableText",
        //   description:
        //     "This is the text of the allert. It will only be shown if the allert is activated.",
        // },
        {
          fieldset: "alert",
          name: "alertItems",
          title: "Alert Items",
          description:
            "Can be toggled on/off and the alert bar will appear if there is at least one alert item active.",
          type: "array",
          of: [
            {
              title: "Alert Item",
              type: "object",
              fields: [
                {
                  title: "Active",
                  name: "alertIsActive",
                  type: "boolean",
                },
                {
                  title: "Title",
                  name: "title",
                  type: "string",
                  description:
                    "for internal use only (does not appear in front-end)",
                  validation: (Rule) =>
                    Rule.error("missing alert title.").required(),
                },
                {
                  title: "Text",
                  name: "text",
                  type: "barePortableText",
                  description: "PLEASE KEEP THIS AS SHORT AS POSSIBLE",
                  validation: (Rule) =>
                    Rule.error("missing alert text.").required(),
                },
              ],
              preview: {
                select: { title: "title", active: "alertIsActive" },
                prepare({ title, active }) {
                  return {
                    title: title,
                    media: active ? FaCheck : FaBan,
                  };
                },
              },
            },
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
  preview: {
    select: {},
    prepare() {
      return {
        title: "Site Settings",
      };
    },
  },
};
