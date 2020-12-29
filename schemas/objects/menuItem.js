import { FaPizzaSlice } from "react-icons/fa"

export default {
  name: 'menuItem',
  type: 'object',
  title: 'MenuItem',
  icon: FaPizzaSlice,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Item name',
      validation: Rule => Rule.error('Empty Menu Item name.').required()
    },
    {
      name: 'description',
      type: 'simplePortableText',
      title: 'Item Description',
      description: 'optional field, for when you have more to say about a menu item (eg: hoagie variations)'
    },
    {
      name: 'lineItems',
      title: 'Menu Items:',
      description: 'Note: you can also create headings and drag-and drop them where needed to break up a big list of FAQs.',
      validation: Rule => Rule.error('Must have at least one menu line item.').required(),
      type: 'array',
          of: [
            {type: 'menuLineItem'}
          ]
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
