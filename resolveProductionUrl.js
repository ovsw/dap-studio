export default function resolveProductionUrl(document) {
  const slug = document.slug?.current;

  // console.log("from resolveProductionUrl, slug:", slug);

  if (!slug) {
    if (document._type === "siteHome") {
      // console.log("from resolveProductionUrl, no slug, returning home");
      return `https://dap-web2.netlify.app/?preview=true`;
    }
    // console.log("from resolveProductionUrl, no slug, undefined");
    return undefined;
  }

  // Only show the preview option for documents for which a preview makes sense.
  if (document._type === "page") {
    return `https://dap-web2.netlify.app/${document.slug.current}/?preview=true`;
  }

  // return `https://dap-web2.netlify.app/${document.slug.current}/?preview=true`
  return undefined;
}
