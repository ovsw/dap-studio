// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import newsItem from './documents/newsItem'
import page from './documents/page'
import attraction from './documents/attraction'
import siteHome from './documents/siteHome'
import siteSettings from './documents/siteSettings'

// object types
import barePortableText from './objects/barePortableText'
import bgImage from './objects/bgImage'
import bodyPortableText from './objects/bodyPortableText'
import button from './objects/button'
import iframeEmbed from './objects/iframeEmbed'
import faqItem from './objects/faqItem'
import faqs from './objects/faqs'
import mainImage from './objects/mainImage'
import pageStatus from './objects/pageStatus'
import simplePortableText from './objects/simplePortableText'
import youtube from './objects/youtube'

// sections
import ctaSection from './objects/sections/cta'
import bigHeading from './objects/sections/bigHeading'
import magSection from './objects/sections/magazine'

// Common Tabs
import seo from './tabs/seo'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    // objects,
    barePortableText,
    bodyPortableText,
    bgImage,
    button,
    iframeEmbed,
    faqItem,
    faqs,
    mainImage,
    pageStatus,
    simplePortableText,
    youtube,
    // sections
    ctaSection,
    bigHeading,
    magSection,
    // tabs 
    seo,
    // documents
    attraction,
    newsItem,
    page,
    siteHome,
    siteSettings
  ])
})
