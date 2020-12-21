import React from 'react'
import Tabs from "sanity-plugin-tabs"
import {FiFile} from 'react-icons/fi'

export default {
  name: 'page',
  title: 'Page',
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
        {name: 'status', title: 'Status'},
        {name: 'main', title: 'Main'},
        {name: 'settings', title: 'Settings'},
        {name: 'seo', title: 'SEO'}
      ],
      fields: [
        {
          fieldset: 'status',
          name: "status",
          type: "pageStatus",
          title: 'Page Status',
          description: 'this is used during development to keep track of the status of this page.',
          validation: Rule => Rule.error('You have to fill out the status of the page.').required()

        },
        {
          fieldset: 'main',
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          fieldset: 'settings',
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          validation: Rule => Rule.error('You have to fill out the slug of the page.').required(),
          description: `This page will have the URL: https://mydelgrossoparl.com/[whatever you type below]/`,
          options: {
            source: 'content.title',
            maxLength: 96
          }
        },
        {
          fieldset: 'settings',
          name: 'mainImage',
          type: 'image',
          title: 'Cover Image',
          description: 'shown as a header background for the page',
          options: {
            hotspot: true
          },
          validation: Rule => Rule.required().error('missing image')
        },
        // {
        //   fieldset: 'main',
        //   title: 'Parent',
        //   name: 'parent',
        //   type: 'reference',
        //   to: [{type: 'page'}]
        // },
        {
          fieldset: 'main',
          name: 'sections',
          title: 'Content Sections',
          type: 'array',
          of: [
            {type: 'magSection'},
            {type: 'ctaSection'},
            {type: 'bigHeading'},
            {type: 'tableSection'}
          ]
        },
        {
          fieldset: 'main',
          name: 'body',
          title: 'Body',
          type: 'bodyPortableText',
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
      name: 'createdAt',
      title: 'Created older->newer',
      by: [
        {
          field: '_createdAt',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'content.title',
      slug: 'content.slug',
      media: 'content.mainImage',
      statusContent: 'content.status.copy',
      statusImages: 'content.status.contentImages' 
    },
    prepare ({title = 'No title', slug = {}, media, statusContent, statusImages}) {
      const path = `/${slug.current}/`
      const emojisCopy = {
        "empty": '0️⃣',
        "to update": '👴',
        "to approve": '👀',
        "approved": '✅'
      }
      const emojisImages = {
        "empty": '0️⃣',
        "added": '✅'
      }
      return {
        title,
        description: path,
        media: media,
        // description: `copy: ${statusContent}; images: ${statusImages}`
        subtitle: `copy: ${statusContent ? emojisCopy[statusContent] : '0️⃣'} | images: ${statusImages ? emojisImages[statusImages] : '0️⃣'}`
      }
    }
  }
}
