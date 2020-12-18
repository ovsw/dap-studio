import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'
const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='📝' />
const IconEmpty = () => <Emoji style={{ fontSize: '2rem' }} symbol='0️⃣' />
const IconUpdate = () => <Emoji style={{ fontSize: '2rem' }} symbol='👴' />
const IconToApprove = () => <Emoji style={{ fontSize: '2rem' }} symbol='👀' />
const IconApproved = () => <Emoji style={{ fontSize: '2rem' }} symbol='✅' />



export const pagesByStatusCopy = S.listItem()
.title('by Body Copy Status')
.icon(Icon)
.child(
    S.list()
    .title('Body Copy Status')
    .id('pageCopyStatuses')
    .items([
      S.listItem()
        .title('1. No Content')
        .icon(IconEmpty)
        .schemaType('page')
        .child(
          S.documentList()
          .title('Pages with No Content:')
          .filter('(_type == "page" || _type == "attraction") && content.status.copy == "empty"')
          ),
      S.listItem()
        .icon(IconUpdate)
        .title('2. Needs Update')
        .schemaType('page')
        .child(
          S.documentList()
            .title('Pages that need updating (old content):')
            .filter('(_type == "page" || _type == "attraction") && content.status.copy == "to update"')
        ),
      S.listItem()
        .title('3. To Approve')
        .icon(IconToApprove)
        .schemaType('page')
        .child(
          S.documentList()
            .title('Pages that need copy approval:')
            .filter('(_type == "page" || _type == "attraction") && content.status.copy == "to approve"')
        ),
      S.listItem()
        .title('4. Approved')
        .icon(IconApproved)
        .schemaType('page')
        .child(
          S.documentList()
            .title('Copy Approved:')
            .filter('_type == "page" && content.status.copy == "approved"')
        ),
    ])
)