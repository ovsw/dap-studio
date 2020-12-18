export default {
  name: 'faqItem',
  type: 'object',
  title: 'Question and Answer',
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
