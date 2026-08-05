# Havencrest Service Page Guide

> Client-supplied. This revision replaces the earlier guide (which listed
> Psychological Assessments, Life Transitions, Identity, Relationships & Family,
> and Trauma Therapy & Recovery as services) and defines the service list and its
> order. Full page copy for each service is supplied separately, one document per
> page; links below point at those source documents.

## Services index page

**Thoughtful care, tailored to you.**

No two people experience life's challenges in the same way. That's why we provide
personalized mental healthcare designed around your unique needs, goals and
circumstances.

Explore our services below to learn more.

## Service pages

_Each service page should follow the same format._

| #   | Service                                   | Source copy                                                                                                                                                                    |
| --- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | Individual Therapy                        | [Individual Therapy in Washington \| Havencrest Wellness](https://docs.google.com/document/d/1CSkaS1UEkQbfobQJsTXNvIkHDSmQfvxMYWYWt0gMFvg/edit?tab=t.0#heading=h.7zxfkrev89kk) |
| 2   | Couples Counseling                        | [Couples Counseling](https://docs.google.com/document/d/1ZFyrckK3TWNKIISwWndaUO0JFHimhJmyYb79UN87c90/edit?tab=t.0)                                                             |
| 3   | Family Therapy                            | [Family Therapy](https://docs.google.com/document/d/1Q005GOzq_9mtX_Ijx6LMI-uoUv0g3wyQU1ikA2nLPYo/edit?tab=t.0)                                                                 |
| 4   | Child and Teen Therapy                    | [Child & Teen Therapy](https://docs.google.com/document/d/1xHndlxKSROJFvrrftGxzBGfSNqqKdB2q9Xz_wo98-wI/edit?usp=sharing)                                                       |
| 5   | CBT                                       | [Cognitive Behavioral Therapy (CBT)](https://docs.google.com/document/d/1CWIF8rVS-_l4F_zxOfbm0KT_1h0k1bJ0f4hvzKbvmns/edit?tab=t.0)                                             |
| 6   | DBT                                       | [Dialectical Behavior Therapy (DBT)](https://docs.google.com/document/d/16GaabzsSkkAtn4SrGFd2RK1SfH2g4vE0yoTlkHNVqwE/edit?usp=sharing)                                         |
| 7   | EMDR Therapy                              | [EMDR Therapy](https://docs.google.com/document/d/1xNr1vvi-EBesRS6jPsFWOZLQ7hlgg1j6iTJYKKo4l-M/edit?tab=t.0#heading=h.oafpa7z05nr3)                                            |
| 8   | Medication Management Support & Referrals | [Medication Management Support & Referrals](https://docs.google.com/document/d/1HgfXa6yqHvF2NPysbxmrEXSJGI74oZ_dysoW6PdnHys/edit?usp=sharing)                                  |
| 9   | Telehealth Therapy                        | [Telehealth Therapy](https://docs.google.com/document/d/1c0fciK-9RCRS7nef9R-dfqv3BvD4B6HLmNyTZd5rSp8/edit?usp=sharing)                                                         |
| 10  | Culturally Responsive Therapy             | [Culturally Responsive Therapy](https://docs.google.com/document/d/1m2-s8kpY_OJdJNq8Tu716S9Tmjmb9AOKq_tGlRBbyow/edit?usp=sharing)                                              |

## Build status

`src/data/services.js` holds exactly these ten entries, in this order, so the
menu, the services index, and the home page preview all follow the guide. The
full copy document for each page has been applied: every service renders the
long-form layout (lede → sections → FAQs → closing CTA), and each entry also
keeps the three-part summary (What is it? / When might it be helpful? / What can
I expect?) that feeds its card.

See `src/docs/Menu Recommendation and Service Page Plan.md` for the routes, the
editorial decisions applied to the copy documents, and what happened to the
services this revision dropped.

### Outstanding

- **Meta descriptions.** Only the Individual Therapy document supplied a title
  tag and meta description. The other nine pages fall back to
  `<page title> | Havencrest Wellness & Counseling` and the site-wide
  description. Supply per-page values and they drop straight into the `seo`
  field.
- **Alt text.** Page photography is still decorative (`alt=""`). Descriptive alt
  text needs to be written per image.
