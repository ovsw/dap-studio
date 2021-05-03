import {ImEmbed2} from 'react-icons/im'

export default {
  name: 'embedSection',
  type: 'object',
  liveEdit: false,
  title: 'Embed Section',
  icon: ImEmbed2,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Section heading',
      validation: Rule => Rule.error('missing section title').required()
    },
    {
      name: 'code',
      type: 'text',
      title: 'Embed Code',
      description: 'paste in the embed code you want to show on the page (eg: from a form, map, widget, etc)',
      validation: Rule => Rule.error('missing embed code').required()
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({title}) {
      return {
        title,
        subtitle: 'Embed Section'
      }
    }
  },
  
}
