import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import { MdSettings, MdHome, MdEdit, MdVisibility } from "react-icons/md";
import {
  FaRegNewspaper,
  FaRegStar,
  FaFile,
  FaRegFileAlt,
  FaQuestionCircle,
} from "react-icons/fa";

// icons
import { ImSection } from "react-icons/im";
import { MdEvent } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";

// special dev page status categories
import { pagesByStatusCopy } from "./structure/pagesByStatusCopy";
import { pagesByStatusImage } from "./structure/pagesByStatusImage";
import { pagesByStatusImages } from "./structure/pagesByStatusImages";

// hidden doc types
const hiddenDocTypes = (listItem) =>
  ![
    "siteHome",
    "siteSettings",
    "newsItem",
    "attraction",
    "page",
    "reusableSection",
    "event",
    "sponsor",
  ].includes(listItem.getId());

// Web Preview
const url = "https://www.mydelgrossopark.com/";

const WebPreview = ({ document }) => {
  const { displayed } = document;
  const slug = displayed.content.slug?.current;

  if (!slug) {
    if (displayed._type == "siteHome") {
      //  url for home page
      return (
        <iframe
          src={`https://www.mydelgrossopark.com/?preview=true`}
          frameBorder={0}
          width="100%"
          height="100%"
        />
      );
    }
    //  no slug
    return <h1>Please set a slug to see a preview</h1>;
  }

  // get url path prefix for each content type
  const pathPrefixes = {
    page: "",
    simplePage: "",
    newsItem: "news/",
    event: "events/",
    attraction: "amusement-park-rides/",
  };
  const pathPrefix = pathPrefixes[displayed._type];

  // put together the whole URL for the preview
  const targetURL = url + pathPrefix + slug + `/?preview=true`;
  return <iframe src={targetURL} frameBorder={0} width="100%" height="100%" />;
};

// const JsonPreview = ({ document }) => (
//   // The JSON preview
//   <h1>JSON Data</h1>
// );

const pagesWithPreview = [
  "page",
  "siteHome",
  "newsItem",
  "event",
  "attraction",
  "simplePage",
];

export const getDefaultDocumentNode = ({ schemaType }) => {
  // Only show the iframe for documents for which a preview makes sense.
  if (pagesWithPreview.indexOf(schemaType) > -1) {
    return S.document().views([
      // default edit form
      S.view.form().icon(MdEdit),
      // custom preview component we built above
      S.view.component(WebPreview).title("Web Preview").icon(MdVisibility),
      // S.view.component(JsonPreview).title("JSON"),
    ]);
  }
};

export default () =>
  S.list()
    .title("Content")
    .items([
      S.documentListItem()
        .id("siteHome")
        .title("Site Home")
        .schemaType("siteHome")
        .icon(MdHome),
      S.listItem()
        .title("Settings")
        .icon(MdSettings)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.divider(),
      S.listItem()
        .title("News Items")
        .schemaType("newsItem")
        .icon(FaRegNewspaper)
        .child(S.documentTypeList("newsItem").title("News Items")),
      S.listItem()
        .title("Events")
        .schemaType("event")
        .icon(MdEvent)
        .child(S.documentTypeList("event").title("Events")),
      S.divider(),
      S.listItem()
        .title("Attractions")
        .schemaType("attraction")
        .icon(FaRegStar)
        .child(S.documentTypeList("attraction").title("Attractions & Rides")),
      S.listItem()
        .title("Pages")
        .schemaType("page")
        .icon(FaFile)
        .child(S.documentTypeList("page").title("Pages")),
      S.listItem()
        .title("Special pages")
        .id("specialPages2")
        .icon(FaRegFileAlt)
        .child(
          S.list()
            .title("Pages")
            .items([
              S.documentListItem()
                .id("eventsPage")
                .title("Events Page")
                .schemaType("pageSpecial"),
              S.documentListItem()
                .id("parkNews")
                .title("Park News Page")
                .schemaType("pageSpecial"),
              S.documentListItem()
                .id("parkRides")
                .title("Park Rides Page")
                .schemaType("pageSpecial"),
              S.documentListItem()
                .id("waterParkAttractions")
                .title("Water Park Attractions Page")
                .schemaType("pageSpecial"),
              S.documentListItem()
                .id("allergensPage")
                .title("Allergens Page")
                .schemaType("allergensPage"),
            ])
        ),
      S.listItem()
        .title("Simple Pages")
        .schemaType("simplePage")
        .icon(FaFile)
        .child(S.documentTypeList("simplePage").title("Simple Pages")),
      S.divider(),
      S.listItem()
        .title("Reusable Sections")
        .icon(ImSection)
        .schemaType("reusableSection")
        .child(
          S.documentTypeList("reusableSection").title("Reusable Sections")
        ),
      S.listItem()
        .title("Sponsors")
        .schemaType("sponsor")
        .child(S.documentTypeList("sponsor").title("Sponsors")),
      S.divider(),
      S.listItem()
        .title("FAQ Items")
        .icon(FaQuestionCircle)
        .schemaType("faqItem")
        .child(S.documentTypeList("faqItem").title("FAQ Items")),
      S.listItem()
        .title("FAQs by Category")
        .child(
          S.documentTypeList("faqCategory")
            .title("FAQs By Category")
            .child((categoryId) =>
              S.documentList()
                .title("FAQs")
                .filter('_type == "faqItem" && $categoryId in category[]._ref')
                .params({ categoryId })
            )
        ),
      S.listItem()
        .title("FAQ Categories")
        .schemaType("faqCategory")
        .child(S.documentTypeList("faqCategory").title("FAQ Categories")),
      S.divider(),
      // S.listItem()
      //   .title("Pages by Content Status")
      //   .child(
      //     S.list()
      //       .title("Organize by...")
      //       .id("contentTypes")
      //       .items([pagesByStatusCopy, pagesByStatusImages])
      //   ),

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
      // ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
