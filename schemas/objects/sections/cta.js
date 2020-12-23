import {BsExclamationOctagon} from 'react-icons/bs'

export default {
  name: 'ctaSection',
  type: 'object',
  liveEdit: true,
  title: 'CTA Section',
  icon: BsExclamationOctagon,
  fields: [
    {
      name: 'theme',
      title: 'Color Theme',
      type: 'string',
      options: {
        list: [
          {title: 'Yellow Theme / Green Btn', value: 'yellowTheme-greenBtn'},
          {title: 'Yellow Theme / Blue Btn', value: 'yellowTheme-blueBtn'},
          {title: 'Yellow Theme / Red Btn', value: 'yellowTheme-redBtn'},
          
          {title: 'Green Theme / Yellow Btn', value: 'greenTheme-yellowBtn'},
          {title: 'Green Theme / Light Btn', value: 'greenTheme-lightBtn'},

          {title: 'Blue Theme / Yellow Btn', value: 'blueTheme-yellowBtn'},
          {title: 'Blue Theme / Light Btn', value: 'blueTheme-lightBtn'},
          
          {title: 'Red Theme / Yellow Btn', value: 'redTheme-yellowBtn'},
          {title: 'Red Theme / Light Btn', value: 'redTheme-lightBtn'}
        ]
      },
      validation: Rule => Rule.error('Select a color theme.').required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title (required)',
      description: 'the main big text in the section',
      validation: Rule => Rule.error('Enter the title of the CTA section.').required(),
    },{
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle (optional)',
      description: 'secondary text under the main one',
    },{
      name: 'text',
      type: 'barePortableText',
      title: 'Paragraph (optional)',
      description: 'longer text',
    },{
      name: 'button1',
      type: 'button',
      title: 'Primary Button (required)',
      description: 'primary action we\'d like the user to perform from here'
    },{
      name: 'image',
      type: 'bgImage',
      title: 'Image',
      description: 'appears to the side of the text'
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
      
      const butnColor = themeArray[1].replace("Btn", "");
      const capitalizedBtnColor = butnColor.charAt(0).toUpperCase() + butnColor.slice(1)

      subtitle = `CTA Section: ${capitalizedThemeColor} Theme + ${capitalizedBtnColor} Btn`
      }

      return {
        title: title,
        subtitle: subtitle,
      }
    }
  }
}
