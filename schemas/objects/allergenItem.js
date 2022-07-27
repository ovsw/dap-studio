
import {BiDish} from 'react-icons/bi'

export default {
  name: 'allergenItem',
  type: 'document',
  title: 'Menu Item',
  icon: BiDish,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Menu Item Name',
      validation: Rule => Rule.error('empty item name').required()
    },
    // {
    //   name: 'allergens',
    //   title: 'Allergens',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [
    //         {type: 'allergenCategory'}
    //       ]
    //     }
    //   ],
    //   validation: Rule => [
    //     // Rule.required().min(1).error('missing allergen(s)'),
    //     Rule.error('duplicate allergen').unique()
    //   ],
    // },
    {
      name: 'allergenList',
      title: 'Allergens',
      type: 'array',
      description: 'list of allergens for this menu item',
      of: [{type: 'string'}],
      options: {
        layout: 'grid',
        list: [
          {title: 'Gluten/Wheat', value: 'Gluten/Wheat'},
          {title: 'Dairy', value: 'Dairy'},
          {title: 'Peanut', value: 'Peanut'},
          {title: 'Tree Nut', value: 'Tree Nut'},
          {title: 'Soy', value: 'Soy'},
          {title: 'Egg', value: 'Egg'},
          {title: 'Sesame Seeds', value: 'Sesame Seeds'},
          {title: 'Grilled', value: '* Grilled'},
          {title: 'Fried', value: '** Fried'},
          {title: 'Can Be Adapted', value: '*** Can Be Adapted'},
          {title: 'Manufactured', value: '**** Manufactured'}
        ]
      }
    },
  ],
  preview: {
    select: {
      title: 'name',
      allergen0: 'allergenList.0',
      allergen1: 'allergenList.1',
      allergen2: 'allergenList.2',
      allergen3: 'allergenList.3',
      allergen4: 'allergenList.4',
      allergen5: 'allergenList.5',
      allergen6: 'allergenList.6',
      allergen7: 'allergenList.7',
      allergen8: 'allergenList.8',
      allergen9: 'allergenList.9',
      allergen10: 'allergenList.10'
    },
    prepare ({title, allergen0, allergen1, allergen2, allergen3, allergen4, allergen5,allergen6,allergen7,allergen8,allergen9,allergen10}) {
      console.log(allergen0,allergen1)

      const allergens = [allergen0, allergen1, allergen2, allergen3, allergen4, allergen5,allergen6,allergen7,allergen8,allergen9,allergen10]
      const filteredAllergens = allergens.filter(function( element ) {
        return element !== undefined;
     });

      const subtitle = filteredAllergens.length > 0 ? `${filteredAllergens.join(', ')}` : ''

      return {
        title,
        subtitle
      }
    }
  }
}
