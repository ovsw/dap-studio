export default {
  name: 'button',
  type: 'object',
  title: 'Button',
  fields: [
    {
      name: 'text',
      title: 'Button Text (required)',
      type: 'string',
      description: 'the text on the button',
      validation: Rule => Rule.error('missing button text').required(),
    },
    {
      name: 'url',
      title: 'Button Destination URL (optional)',
      type: 'string',
      description: 'where should this button lead to?',
      validation: Rule => Rule.error('missing button destination URL').required(),
    }
  ],
  preview: {
    select: {
      title: 'text'
    }
  }
}
