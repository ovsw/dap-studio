import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'
const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='📷' />
const IconEmpty = () => <Emoji style={{ fontSize: '2rem' }} symbol='0️⃣' />
const IconApproved = () => <Emoji style={{ fontSize: '2rem' }} symbol='✅' />



export const pagesByStatusImages = S.listItem()
.title('by Body Images Status')
.icon(Icon)
.child(
    S.list()
    .title('Body Images Status')
    .id('pageImagesStatuses')
    .items([
      S.listItem()
        .title('1. No Images')
        .icon(IconEmpty)
        .schemaType('page')
        .child(
          S.documentList()
          .title('Pages missing content images:')
          .filter('(_type == "page" || _type == "attraction") && content.status.contentImages == "empty"')
          ),
      S.listItem()
        .icon(IconApproved)
        .title('2. Images Added')
        .schemaType('page')
        .child(
          S.documentList()
            .title('Pages that have content images')
            .filter('(_type == "page" || _type == "attraction") && content.status.contentImages == "added"')
        )
    ])
)