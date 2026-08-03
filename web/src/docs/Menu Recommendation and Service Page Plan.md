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

| Menu item                                 | Status          | Route                                           |
| ----------------------------------------- | --------------- | ----------------------------------------------- |
| Individual Therapy                        | **Copy needed** | —                                               |
| Couples Counseling                        | Built           | `/services/couples-therapy` ("Couples Therapy") |
| Family Therapy                            | Built           | `/services/family-therapy`                      |
| Child and Teen Therapy                    | Built           | `/services/child-adolescent-therapy`            |
| Cognitive Behavioral Therapy (CBT)        | **Copy needed** | —                                               |
| Dialectical Behavior Therapy (DBT)        | **Copy needed** | —                                               |
| EMDR Therapy                              | **Copy needed** | —                                               |
| Telehealth                                | Built           | `/services/telehealth-services`                 |
| Medication Management Support & Referrals | Built           | `/services/psychiatric-evaluation-medication`   |

Also live, though not on the client's list: Psychological Assessments,
Life Transitions, Identity, Relationships & Family, Trauma Therapy & Recovery.

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

### Naming differences left as-is

The client's menu names differ from the titles in the earlier
_Havencrest Service Page Guide_. Titles were **not** renamed, because renaming
changes the page title, the card, and the URL slug. Confirm before switching:

- "Couples Counseling" vs. the live "Couples Therapy"
- "Child and Teen Therapy" vs. the live "Child & Adolescent Therapy"
- "Medication Management Support & Referrals" vs. the live
  "Psychiatric Evaluation & Medication Management"

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
