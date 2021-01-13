// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import attraction from './documents/attraction'
import event from './documents/event'
import newsItem from './documents/newsItem'
import page from './documents/page'
import reusableSection from './documents/reusableSection'
import siteHome from './documents/siteHome'
import siteSettings from './documents/siteSettings'

// object types
import barePortableText from './objects/barePortableText'
import bgImage from './objects/bgImage'
import bodyPortableText from './objects/bodyPortableText'
import button from './objects/button'
import card from './objects/card'
import iframeEmbed from './objects/iframeEmbed'
import faqItem from './objects/faqItem'
import faqs from './objects/faqs'
import hero from './objects/hero'
import mainImage from './objects/mainImage'
import menuItem from './objects/menuItem'
import menuItemPrice from './objects/menuItemPrice'
import pageStatus from './objects/pageStatus'
import simplePortableText from './objects/simplePortableText'
import youtube from './objects/youtube'

// sections
import cardSection from './objects/sections/cardSection'
import ctaSection from './objects/sections/cta'
import bigHeading from './objects/sections/bigHeading'
import faqSection from './objects/sections/faqSection'
import magSection from './objects/sections/magazine'
import menuSection from './objects/sections/menuSection'
import reusedSection from './objects/sections/reusedSection'
import tableSection from './objects/sections/table'

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
    card,
    iframeEmbed,
    faqItem,
    faqs,
    hero,
    mainImage,
    pageStatus,
    simplePortableText,
    youtube,
    menuItem,
    menuItemPrice,
    // sections
    cardSection,
    ctaSection,
    bigHeading,
    faqSection,
    magSection,
    menuSection,
    reusedSection,
    tableSection,
    // tabs 
    seo,
    // documents
    attraction,
    event,
    newsItem,
    page,
    reusableSection,
    siteHome,
    siteSettings
  ])
})
