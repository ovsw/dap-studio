import Tabs from "sanity-plugin-tabs"
import {FiFile} from "react-icons/fi"
import moment from "moment"

export default {
  name: 'newsItem',
  title: 'News Item',
  type: 'document',
  icon: FiFile,
  liveEdit: false,
  __experimental_actions: [ 'create', 'update', 'publish', 'delete' ], /* 'create', 'delete' */
  fields: [
    {
      name: 'content',
      type: 'object',
      title: 'Content',
      inputComponent: Tabs,
      fieldsets: [
        {name: 'main', title: 'Main'},
        {name: 'settings', title: 'Settings'},
        {name: 'seo', title: 'SEO'}
      ],
      fields: [
        {
          fieldset: 'main',
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: Rule => Rule.required().error('missing title')
        },
        {
          fieldset: 'main',
          name: 'subtitle',
          title: 'Sub title',
          description: 'optional, shown under the main title if present',
          type: 'string'
        },
        {
          fieldset: 'main',
          name: 'date',
          title: 'Date',
          type: 'date',
          options: {
            dateFormat: 'dddd MMM Do yyyy',
          },
          validation: Rule => Rule.required().error('missing date')
        },
        {
          fieldset: 'main',
          name: 'tags',
          title: 'Category Tags',
          type: 'array',
          description: 'what does this news item refer to?',
          of: [{type: 'string'}],
          options: {
            layout: 'tags',
            list: [
              {title: 'Food', value: 'food'},
              {title: 'Park', value: 'park'},
              {title: 'Closures', value: 'closures'},
              {title: 'Hiring', value: 'hiring'},
              {title: 'Promo', value: 'promo'}
            ]
          },
          validation: Rule => Rule.required().error('missing tag(s)')
        },
        {
          fieldset: 'settings',
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          validation: Rule => Rule.error('You have to fill out the slug of the page.').required(),
          description: 'the slug needs to be set to be able to show the page',
          options: {
            source: 'content.title',
            maxLength: 96
          }
        },
        {
          fieldset: 'settings',
          name: 'mainImage',
          type: 'bgImage',
          title: 'Cover Image',
          description: 'shown in the news listing, and as a header for the news item\'s page',
          options: {
            hotspot: true
          },
          validation: Rule => Rule.required().error('missing image')
        },
        {
          fieldset: 'main',
          name: 'body',
          title: 'Body',
          type: 'bodyPortableText'
        },
        {
          fieldset: 'seo',
          name: 'seo',
          title: 'SEO Title',
          type: 'seo',
        },
      ]
    }

  ],
  orderings: [
    {
      name: 'newsDateAsc',
      title: 'By Date - oldest first',
      by: [
        {
          field: 'content.date',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'newsDateDesc',
      title: 'By Date - newest first',
      by: [
        {
          field: 'content.date',
          direction: 'desc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'content.title',
      date: 'content.date',
      slug: 'content.slug',
      image: 'content.mainImage',
      tags: 'content.tags'
    },
    prepare ({title = 'No title', slug = {}, image, date, tags}) {
      const path = `/${slug.current}/`
      const taglist = tags.join(", ")
      const formattedDate = moment(new Date(date)).format('ddd Do MMM YYYY')
      return {
        title,
        subtitle: formattedDate,
        description: `tags: ${taglist}`,
        media: image
      }
    }
  }
}
