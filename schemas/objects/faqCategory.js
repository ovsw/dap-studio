
import {FaFolderOpen} from 'react-icons/fa'

export default {
  name: 'faqCategory',
  type: 'document',
  title: 'Question and Answer',
  icon: FaFolderOpen,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category Name',
      validation: Rule => Rule.error('Empty FAQ question.').required()
    },
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
