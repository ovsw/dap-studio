import { FaPizzaSlice } from "react-icons/fa";

export default {
  name: "menuItem",
  type: "object",
  title: "MenuItem",
  icon: FaPizzaSlice,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Item name",
      validation: (Rule) => Rule.error("Empty Menu Item name.").required(),
    },
    {
      name: "description",
      type: "simplePortableText",
      title: "Item Description",
      description:
        "optional field, for when you have more to say about a menu item (eg: hoagie variations)",
    },
    // {
    //   name: 'allergens',
    //   type: 'text',
    //   title: 'Allergens',
    //   description: 'required field',
    //   validation: Rule => Rule.error('Empty allergens list Item name.').required()
    // },
    {
      name: "lineItems",
      title: "Menu Items:",
      validation: (Rule) =>
        Rule.error("Must have at least one menu line item.").required(),
      type: "array",
      of: [{ type: "menuLineItem" }],
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
