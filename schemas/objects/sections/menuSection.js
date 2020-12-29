import { FaPizzaSlice } from "react-icons/fa"
import {FaHeading} from 'react-icons/fa'

export default {
  name: 'menuSection',
  type: 'object',
  liveEdit: false,
  title: 'Food Menu Section',
  icon: FaPizzaSlice,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section Title',
      validation: Rule => Rule.error('Missing Menu Section title').required(),
    },
    {
      name: 'menuItems',
      title: 'Menu Items',
      description: 'Note: you can also create headings and drag-and drop them where needed to break up a big menu list',
      validation: Rule => Rule.error('Must have at least one menu item.').required(),
      type: 'array',
          of: [
            {type: 'menuItem'},
            {
              title: 'Menu Category Heading',
              icon: FaHeading,
              type: 'object',
              fields: [
                {
                  title: 'Category Title',
                  name: 'value',
                  type: 'string',
                  validation: Rule => Rule.error('Missing Menu Category title').required(),
                } 
              ]
            }
          ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {

      let subtitle = 'Menu Section'

      return {
        title: title,
        subtitle: subtitle
      }
    }
  }
}
