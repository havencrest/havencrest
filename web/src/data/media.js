// Cloudinary image helper.
//
// All site photography lives in the Havencrest Cloudinary account and is
// referenced by public ID (no version needed — Cloudinary serves the latest).
// `cldImage` builds a delivery URL with automatic format/quality and a smart,
// content-aware crop to whatever aspect ratio the call site needs, so a single
// source photo serves cards, banners, and heroes without shipping oversized
// originals.
//
//   cldImage("Havencrest/foo", { w: 800, ar: "4:3" })
//
// Data modules store only the public ID (see `image` fields in services.js /
// specialties.js); components decide the size and aspect ratio at render time.

const CLOUD_NAME = "dpfcle0os";

export function cldImage(publicId, { w = 800, ar = "4:3", crop = "fill" } = {}) {
  const t = [`c_${crop}`, "g_auto", `w_${w}`, `ar_${ar}`, "f_auto", "q_auto"].join(",");
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${t}/${publicId}.jpg`;
}

// Named hero / page images used outside the services & specialties data.
export const media = {
  homeHero: "Havencrest/artem-kovalev-fk3XUcfTAvk-unsplash_ilvmzc", // calm, watching a sunset over water
  about: "Havencrest/olivia-bauso-7NvnR9rK5uI-unsplash_bce3dw", // group in forest at dusk
  careers: "Havencrest/christina-wocintechchat-com-m-vzfgh3RAPzM-unsplash_izmqhg", // team meeting
  cta: "Havencrest/hannah-busing-Zyx1bK9mqmA-unsplash_f0an6i", // hands stacked together — togetherness
};
