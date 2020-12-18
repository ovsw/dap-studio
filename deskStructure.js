import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdHome } from "react-icons/md";
import { FaRegNewspaper, FaRegStar, FaFile} from "react-icons/fa";

import {pagesByStatusCopy} from "./structure/pagesByStatusCopy"
import {pagesByStatusImage} from "./structure/pagesByStatusImage"
import {pagesByStatusImages} from "./structure/pagesByStatusImages"

const hiddenDocTypes = listItem =>
  !['siteSettings', 'newsItem', 'attraction', 'page'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .icon(MdHome)
        .child(
          S.editor()
            .id('siteHome')
            .schemaType('siteHome')
            .documentId('siteHome')
        ),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('News Items')
        .schemaType('newsItem')
        .icon(FaRegNewspaper)
        .child(S.documentTypeList('newsItem').title('News Items')),
      S.listItem()
        .title('Attractions')
        .schemaType('attraction')
        .icon(FaRegStar)
        .child(S.documentTypeList('attraction').title('Attractions & Rides')),
      S.listItem()
        .title('Pages')
        .schemaType('page')
        .icon(FaFile)
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Pages by Content Status')
        .child(
          S.list()
            .title('Organize by...')
            .id('contentTypes')
            .items([
              pagesByStatusCopy,
              pagesByStatusImages
          ])
        ),
      
        
      // S.listItem()
      //   .title('Projects by category')
      //   .child(
      //     // List out all categories
      //     S.documentTypeList('page')
      //       .title('Empty Pages')
      //       .child(() =>
      //         // List out project documents where the _id for the selected
      //         // category appear as a _ref in the project’s categories array
      //         S.documentList()
      //           .schemaType('page')
      //           .title('Pages')
      //           .filter(
      //             '_type == "page" && content.status.copy == "empty"'
      //           )
      //       )
      //   ),
      // S.listItem()
      //   .title('Blog posts')
      //   .schemaType('post')
      //   .child(S.documentTypeList('post').title('Blog posts')),
      // S.listItem()
      //   .title('Authors')
      //   .icon(MdPerson)
      //   .schemaType('author')
      //   .child(S.documentTypeList('author').title('Authors')),
      // S.listItem()
      //   .title('Categories')
      //   .schemaType('category')
      //   .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
