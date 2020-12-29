
import { FaPizzaSlice } from "react-icons/fa"

export default {
  name: 'menuLineItem',
  type: 'object',
  title: 'MenuItem',
  icon: FaPizzaSlice,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Line Item Name',
      description: 'eg: 5 Marianna’s 14” Hoagies in your choice of up to 2 varieties above.',
      validation: Rule => Rule.error('Missing menu item name.').required()
    },
    {
      name: 'price',
      type: 'string',
      title: 'Line Item Price',
      description: 'eg: $30.00/Platter',
      validation: Rule => Rule.error('Missing menu item price.').required()
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price'
    }
  }
}
