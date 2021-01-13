import Tabs from "sanity-plugin-tabs"
import {MdEvent} from "react-icons/md"
import moment from "moment"

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: MdEvent,
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
          title: 'Event Date',
          type: 'date',
          options: {
            dateFormat: 'dddd MMM Do yyyy',
          },
          validation: Rule => Rule.required().error('missing event date')
        },
        {
          fieldset: 'main',
          name: 'tags',
          title: 'Event Tags',
          type: 'array',
          description: 'tags for this event',
          of: [{type: 'string'}],
          options: {
            layout: 'tags',
            list: [
              {title: 'Food', value: 'food'},
              {title: 'Music', value: 'music'},
              {title: 'Park', value: 'park'}            ]
          }
        },
        {
          fieldset: 'settings',
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          validation: Rule => Rule.error('You have to fill out the slug of the event page.').required(),
          description: 'the slug needs to be set to be able to show the event page',
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
          description: 'shown in the events listing, and as a header for the event item\'s page',
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
      name: 'eventDateAsc',
      title: 'By Date - oldest first',
      by: [
        {
          field: 'content.date',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'eventDateDesc',
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
    prepare ({title, slug, image, date, tags}) {
      const path = `/${slug.current}/`
      const taglist = tags ? `tags: ${tags.join(", ")}` : ''
      let formattedDate = "no date"
      if (date) { formattedDate = moment(new Date(date)).format('ddd Do MMM YYYY') }
      return {
        title: title,
        subtitle: formattedDate,
        description: taglist,
        media: image
      }
    }
  }
}
