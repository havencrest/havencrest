import { toValue, watchEffect } from "vue";

// Per-page title tag and meta description.
//
// The client copy documents specify an exact title tag and meta description for
// each page, so pages carry them in their data (see the `seo` field in
// src/data/specialties.js) and hand them to this composable:
//
//   useSeo(() => specialty.value?.seo)
//
// Pass a plain object, a ref, or a getter. A missing or partial value falls
// back to the site defaults, and everything is restored when the page unmounts,
// so a page without its own SEO fields never inherits the previous page's.
//
// Caveat: this is a client-rendered SPA, so these tags are written after the
// page boots. Crawlers that execute JavaScript will read them; link-preview
// scrapers generally will not. Pre-rendering is the durable fix.

const SITE_NAME = "Havencrest Wellness & Counseling";

const DEFAULT_DESCRIPTION =
  "Havencrest Wellness & Counseling provides compassionate, evidence-based mental healthcare throughout Washington, in person and by secure telehealth.";

function metaTag(name) {
  let el = document.head.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  return el;
}

// The baseline is whatever index.html shipped with. It is captured once, on
// first use rather than at import, so this module stays safe to load without a
// DOM (pre-rendering, tests). Reading the baseline at effect time instead would
// hand a page the *previous* page's tags after two navigations.
let baseline = null;
function baselines() {
  baseline ??= {
    title: document.title || SITE_NAME,
    description: metaTag("description").getAttribute("content") || DEFAULT_DESCRIPTION,
  };
  return baseline;
}

export function useSeo(source) {
  if (typeof document === "undefined") return;

  const base = baselines();
  const descriptionTag = metaTag("description");

  watchEffect((onCleanup) => {
    const seo = toValue(source) ?? {};

    // A supplied title is used verbatim — the copy documents count its
    // characters against the search-result limit and already include the brand.
    document.title = seo.title ?? (seo.pageTitle ? `${seo.pageTitle} | ${SITE_NAME}` : base.title);
    descriptionTag.setAttribute("content", seo.description ?? base.description);

    onCleanup(() => {
      document.title = base.title;
      descriptionTag.setAttribute("content", base.description);
    });
  });
}
