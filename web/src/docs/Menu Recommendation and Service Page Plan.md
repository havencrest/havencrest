# Menu Recommendation & Service Page Plan

> Client-supplied navigation recommendation, plus the list of service and
> specialty pages the client intends to publish. Blue text in the original
> document indicated an internal link.

## Recommended menu

1. Home (the logo is the home link)
2. About Us
3. Our Team — replaces "Therapists"
4. Services (dropdown)
   - Individual Therapy
   - Couples Counseling
   - Family Therapy
   - Child and Teen Therapy
   - Cognitive Behavioral Therapy (CBT)
   - Dialectical Behavior Therapy (DBT)
   - EMDR Therapy
   - Telehealth
   - Medication Management Support and Referrals
5. Specialties (dropdown)
   - Anxiety Disorders
   - Mood Disorders
   - Personality Disorders
   - Trauma-Related Disorders / Trauma / PTSD
   - ADHD Support
   - Autism
   - Depression
   - Men's Mental Health
   - Women's Mental Health
   - Stress & Burnout
   - Grief and Loss
   - Life Transitions
   - Obsessive-Compulsive Disorder (OCD)
   - Eating Disorders
   - Bipolar Disorder
6. Insurance
7. Resources — replaces "Careers"; the blog moves under here along with the
   rest of the supporting pages
8. Contact
9. Request appointment (button)

## Build status

The header now follows this structure. Dropdown entries are generated from
`src/data/services.js` and `src/data/specialties.js`, so a page appears in the
menu as soon as its entry exists.

### Services

The service list was rebuilt to match the revised _Havencrest Service Page
Guide_, which supersedes the recommendation above: it adds Culturally Responsive
Therapy, and its titles are the ones now live.

| Menu item                                 | Status                 | Route                                     |
| ----------------------------------------- | ---------------------- | ----------------------------------------- |
| Individual Therapy                        | Built — full page copy | `/services/individual-therapy`            |
| Couples Counseling                        | Built — full page copy | `/services/couples-counseling`            |
| Family Therapy                            | Built — full page copy | `/services/family-therapy`                |
| Child & Teen Therapy                      | Built — full page copy | `/services/child-teen-therapy`            |
| Cognitive Behavioral Therapy (CBT)        | Built — full page copy | `/services/cbt`                           |
| Dialectical Behavior Therapy (DBT)        | Built — full page copy | `/services/dbt`                           |
| EMDR Therapy                              | Built — full page copy | `/services/emdr-therapy`                  |
| Medication Management Support & Referrals | Built — full page copy | `/services/medication-management`         |
| Telehealth Therapy                        | Built — full page copy | `/services/telehealth-therapy`            |
| Culturally Responsive Therapy             | Built — full page copy | `/services/culturally-responsive-therapy` |

All ten pages now render the long-form layout: lede → sections → FAQs → closing
CTA, with a sticky "next steps" sidebar and related-page links. The three-part
summary (What is it? / When might it be helpful? / What can I expect?) is still
carried by every entry — it feeds the cards on the services index and the home
page preview.

#### Editorial decisions applied to the copy documents

- **Spelling.** The source documents are British English (_recognise_,
  _personalised_, _behaviours_, _judgement_, _honouring_, _practise_). All of it
  was converted to American English per house style.
- **Links to pages that don't exist.** The copy points at "Anxiety Therapy",
  "Depression Therapy", "ADHD Therapy" and "Trauma Therapy". Havencrest has no
  service pages by those names, but it does have specialty pages covering each,
  so those links resolve to `/specialties/anxiety`, `/specialties/depression`,
  `/specialties/adhd` and `/specialties/trauma-ptsd`. Nothing was invented, and
  every one of the 171 internal links on these pages resolves to a real route.
- **Placeholder link URLs.** Several documents contain `chatgpt.com` URLs where
  an internal link was intended. Those were replaced with the correct routes.
- **Copy-paste errors in the source.** The Family Therapy and Child & Teen
  Therapy documents both end their mid-page CTA with "Schedule your first
  **couples counseling** appointment today"; the Culturally Responsive Therapy
  document closes with the **telehealth** page's closing paragraph. Each was
  rewritten to fit its own page. Worth confirming with the client.
- **Crisis copy.** The self-harm instruction on the Child & Teen page ("call 911
  or go to your nearest emergency department immediately") renders as a
  highlighted callout rather than body text — see the `note` field in
  `PageSections.vue`.
- **Medication management.** The page states plainly that Havencrest does not
  currently provide medication management directly and refers out. The service
  card copy was rewritten to match, so the index page doesn't imply otherwise.

#### Services dropped by this revision

The earlier guide listed five services the revised one does not. Their content
either duplicated a specialty page or is covered by a page that is still live, so
the routes redirect rather than 404 (`legacyServiceRedirects` in
`src/router/index.js`):

| Old route                                     | Redirects to                           |
| --------------------------------------------- | -------------------------------------- |
| `/services/psychological-assessments`         | `/services`                            |
| `/services/life-transitions`                  | `/specialties/life-transitions`        |
| `/services/identity`                          | `/specialties/identity-self-discovery` |
| `/services/relationships-family`              | `/services/family-therapy`             |
| `/services/trauma-therapy-recovery`           | `/specialties/trauma-ptsd`             |
| `/services/couples-therapy`                   | `/services/couples-counseling`         |
| `/services/child-adolescent-therapy`          | `/services/child-teen-therapy`         |
| `/services/telehealth-services`               | `/services/telehealth-therapy`         |
| `/services/psychiatric-evaluation-medication` | `/services/medication-management`      |

Cross-links in `src/data/specialties.js` were repointed to match. Note that
Psychological Assessments now has no home on the site — if the client still
offers assessments, it needs either a service page or a section on another page.

### Specialties

| Menu item                       | Status                 | Route                               |
| ------------------------------- | ---------------------- | ----------------------------------- |
| Anxiety Disorders               | Built                  | `/specialties/anxiety`              |
| Mood Disorders                  | **Copy needed**        | —                                   |
| Personality Disorders           | **Copy needed**        | —                                   |
| Trauma-Related Disorders / PTSD | Built                  | `/specialties/trauma-ptsd`          |
| ADHD Support                    | Built                  | `/specialties/adhd`                 |
| Autism                          | Built                  | `/specialties/autism`               |
| Depression                      | Built — full page copy | `/specialties/depression`           |
| Men's Mental Health             | Built — full page copy | `/specialties/mens-mental-health`   |
| Women's Mental Health           | Built                  | `/specialties/womens-mental-health` |
| Stress & Burnout                | Built                  | `/specialties/stress-burnout`       |
| Grief and Loss                  | Built                  | `/specialties/grief-loss`           |
| Life Transitions                | Built — full page copy | `/specialties/life-transitions`     |
| OCD                             | **Copy needed**        | —                                   |
| Eating Disorders                | **Copy needed**        | —                                   |
| Bipolar Disorder                | **Copy needed**        | —                                   |

Also live: Relationship Challenges, Parenting Support, Child & Adolescent
Mental Health, Identity & Self-Discovery, Cultural & Life Experiences.

### Naming — resolved

The naming differences flagged earlier are settled: the revised guide's titles
are now live, and the slugs were renamed to match, with redirects from the old
ones.

- "Couples Therapy" → **Couples Counseling**
- "Child & Adolescent Therapy" → **Child & Teen Therapy**
- "Psychiatric Evaluation & Medication Management" → **Medication Management
  Support & Referrals**
- "Telehealth Services" → **Telehealth Therapy**

## Image optimization

Every image should be compressed, have a descriptive filename, and carry
meaningful alt text — `anxiety-therapy-session-seattle-washington.jpg`, not
`image123.jpg`.

Current state: photography is served through Cloudinary (see `src/data/media.js`),
which handles compression, format negotiation, and responsive sizing
automatically. Two gaps remain:

1. **Filenames.** Public IDs are still the Unsplash originals
   (`Havencrest/annie-spratt-H582qBzGmHQ-unsplash_bhd7hd`). Renaming them in
   Cloudinary to descriptive IDs, then updating the `image` fields, would close
   this.
2. **Alt text.** Photos on service and specialty pages are decorative and
   currently carry `alt=""`, which is correct for purely decorative images. If
   the client wants descriptive alt text for SEO, each photo needs a written
   description — those are not in the copy documents yet.

## Page-level SEO

Title tags and meta descriptions supplied with the new copy are applied per
page via the `useSeo` composable (`src/composables/useSeo.js`). Pages without a
supplied title fall back to `<page title> | Havencrest Wellness & Counseling`.

Note: the site is a client-rendered Vue SPA. Search crawlers that execute
JavaScript will read these tags, but link previews and non-JS crawlers will not.
Pre-rendering or SSR is the durable fix if organic search is a priority.
