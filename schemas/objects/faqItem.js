
import {FaQuestionCircle} from 'react-icons/fa'

export default {
  name: 'faqItem',
  type: 'object',
  title: 'Question and Answer',
  icon: FaQuestionCircle,
  fields: [
    {
      name: 'question',
      type: 'string',
      title: 'Question'
    },
    {
      name: 'answer',
      type: 'simplePortableText',
      title: 'Answer'
    },
  ],
  preview: {
    select: {
      title: 'question'
    }
  }
}
