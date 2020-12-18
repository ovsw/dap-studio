import React from 'react'
import {FaRegQuestionCircle} from 'react-icons/fa'

export default {
  name: 'faqs',
  type: 'object',
  title: 'FAQs',
  icon: FaRegQuestionCircle,
  fields: [
    {
      name: 'faqs',
      type: 'array',
      title: 'FAQ Items',
      of:[{type: 'faqItem'}]
    }
  ],
  preview: {
    select:{},
    prepare() {
      return {
        title: 'FAQs'
      }
    }
  }
}
