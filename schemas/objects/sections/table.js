import React from 'react'
import {FaTable} from 'react-icons/fa'

export default {
  name: 'tableSection',
  type: 'object',
  liveEdit: true,
  title: 'Table Section',
  icon: FaTable,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.error('Missing Section Title').required(),
    },
    {
      name: 'sectionTable',
      type: 'table',
      title: 'Table',
      description: 'tabular data',
      validation: Rule => Rule.error('table is missing content').required(),
    },
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {

      let subtitle = 'table'

      return {
        title: title,
        subtitle: subtitle,
      }
    }
  }
}
