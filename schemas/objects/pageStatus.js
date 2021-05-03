export default {
  name: "pageStatus",
  type: "object",
  title: "Page Status",
  fields: [
    {
      name: "copy",
      type: "string",
      title: "Copy Status",
      description: "the state of the text copy on this page",
      options: {
        list: [
          { title: "1. Needs copy (empty)", value: "empty" },
          { title: "2. Needs update (old content)", value: "to update" },
          { title: "3. Needs approval", value: "to approve" },
          { title: "4. Approved", value: "approved" },
          { title: "5. Final", value: "final" },
        ],
      },
      validation: (Rule) => Rule.required().error("missing location"),
    },
    {
      name: "contentImages",
      type: "string",
      title: "Content Images Status",
      description:
        "the state of the content images inside the body of the page",
      options: {
        list: [
          { title: "1. Needs Images", value: "empty" },
          { title: "2. Images Added", value: "added" },
        ],
      },
      validation: (Rule) => Rule.required().error("missing location"),
    },
    // {
    //   name: 'headerImage',
    //   type: 'string',
    //   title: 'Header Image Status',
    //   options: {
    //     list: [
    //       {title: '1. Needs Image (empty)', value: 'empty'},
    //       {title: '2. Image Added', value: 'added'}
    //     ]
    //   },
    //   validation: Rule => Rule.required().error('missing location')
    // },
    {
      name: "notes",
      type: "text",
      title: "Notes",
      description:
        "notes for other content editors (or yourself), on the content and status of this page",
    },
  ],
};
