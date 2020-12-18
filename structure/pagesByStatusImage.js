import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'
const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🌞' />
const IconEmpty = () => <Emoji style={{ fontSize: '2rem' }} symbol='0️⃣' />
const IconApproved = () => <Emoji style={{ fontSize: '2rem' }} symbol='✅' />



export const pagesByStatusImage = S.listItem()
.title('by Header Image Status')
.icon(Icon)
.child(
    S.list()
    .title('Header Image Status')
    .id('pageHeaderImageStatuses')
    .items([
      S.listItem()
        .title('1. No Header Image')
        .icon(IconEmpty)
        .schemaType('page')
        .child(
          S.documentList()
          .title('Pages missing header image:')
          .filter('(_type == "page" || _type == "attraction") && content.status.headerImage == "empty"')
          ),
      S.listItem()
        .icon(IconApproved)
        .title('2. Header Image added')
        .schemaType('page')
        .child(
          S.documentList()
            .title('Pages that have header image')
            .filter('(_type == "page" || _type == "attraction") && content.status.headerImage == "added"')
        )
    ])
)