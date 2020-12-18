import Tabs from "sanity-plugin-tabs"

export default {
  name: 'siteHome',
  type: 'document',
  liveEdit: true,
  title: 'Home Page',
  __experimental_actions: ['update', 'create', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'content',
      type: 'object',
      title: 'Content',
      inputComponent: Tabs,
      fieldsets: [
        {name: 'main', title: 'Main'},
        {name: 'seo', title: 'SEO'}
      ],
      fields: [
        {
          fieldset: 'main',
          name: 'sections',
          type: 'array',
          of: [
            {type: 'magSection'},
            {type: 'ctaSection'}
          ]
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
  preview: {
    select: {
    },
    prepare () {
      return {
        title: 'Site Home'
      }
    }
  }
}
