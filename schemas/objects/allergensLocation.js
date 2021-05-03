import {FaQuestionCircle} from 'react-icons/fa'
import {BiRestaurant} from 'react-icons/bi'

export default {
  name: 'allergensLocation',
  type: 'object',
  liveEdit: true,
  title: 'Food Location',
  icon: BiRestaurant,
  fields: [
    {
      name: 'locationTitle',
      type: 'string',
      title: 'Location Title',
      validation: Rule => Rule.error('missing title').required(),
    },
    {
      name: 'allergenList',
      title: 'Allergen List',
      validation: Rule => [
        Rule.error('Must have at least one menu item').required(),
        Rule.error('Duplicate menu item').unique()
      ],
      type: 'array',
        of: [
          {type: 'allergenItem'},
        ]
    },
  ],
  preview: {
    select: {
      title: 'locationTitle'
    },
    prepare ({title}) {

      return {
        title
      }
    }
  }
}
