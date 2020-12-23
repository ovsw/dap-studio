
import {AiOutlineCreditCard} from 'react-icons/ai'

export default {
  name: 'card',
  type: 'object',
  title: 'Card',
  icon: AiOutlineCreditCard,
  fields: [
    {
      name: 'theme',
      title: 'Color Theme',
      type: 'string',
      options: {
        list: [
          {title: 'Green', value: 'greenTheme'},
          {title: 'Blue', value: 'blueTheme'},
          {title: 'Red', value: 'redTheme'}
        ]
      },
      validation: Rule => Rule.error('Select a color theme.').required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'the card\'s title',
      validation: Rule => Rule.error('missing card title').required(),
    },
    {
      name: 'text',
      title: 'Button',
      type: 'simplePortableText',
      description: 'card contents',
      validation: Rule => Rule.error('missing card content').required(),
    },
    {
      name: 'button',
      title: 'Card Button',
      type: 'button',
      description: 'optional card button'
    },
  ],
  preview: {
    select: {
      title: 'title',
      theme: 'theme'
    },
    prepare ({ title, theme }) {

      let subtitle = 'no theme selected'
      if (theme) {
        const themeArray = theme.split("-") 

        const themeColor = themeArray[0].replace("Theme", "");
        const capitalizedThemeColor = themeColor.charAt(0).toUpperCase() + themeColor.slice(1)

        subtitle = `Card: ${capitalizedThemeColor}`
      }
      return {
        title: `${title}`,
        subtitle: subtitle
      }
    }
  }
}
