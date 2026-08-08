import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  AboutView,
  ServicesView,
  ServiceDetailView,
  SpecialtiesView,
  SpecialtyDetailView,
  TherapistsView,
  TherapistDetailView,
  CareersView,
  OpportunitiesView,
  RoleDetailView,
  ApplyView,
  ContactView,
  RequestAppointmentView,
  ClientAccessView,
  InsuranceFeesView,
  FaqsView,
  BlogsView,
  PrivacyView,
} from "@/views";

// Service slugs that used to exist. The service list was rebuilt to match the
// client's Service Page Guide (see `src/docs/`), which renamed several pages and
// dropped others; these keep the old URLs working rather than 404ing.
const legacyServiceRedirects = {
  "couples-therapy": "/services/couples-counseling",
  "child-adolescent-therapy": "/services/child-teen-therapy",
  "telehealth-services": "/services/telehealth-therapy",
  "psychiatric-evaluation-medication": "/services/medication-management",
  "relationships-family": "/services/family-therapy",
  "trauma-therapy-recovery": "/specialties/trauma-ptsd",
  "life-transitions": "/specialties/life-transitions",
  identity: "/specialties/identity-self-discovery",
  "psychological-assessments": "/services",
};

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/services", name: "services", component: ServicesView },
  {
    path: "/services/:slug",
    name: "service-detail",
    component: ServiceDetailView,
    beforeEnter: (to) => legacyServiceRedirects[to.params.slug] ?? true,
  },
  { path: "/specialties", name: "specialties", component: SpecialtiesView },
  { path: "/specialties/:slug", name: "specialty-detail", component: SpecialtyDetailView },
  { path: "/therapists", name: "therapists", component: TherapistsView },
  { path: "/therapists/:slug", name: "therapist-detail", component: TherapistDetailView },
  { path: "/careers", name: "careers", component: CareersView },
  { path: "/careers/opportunities", name: "opportunities", component: OpportunitiesView },
  { path: "/careers/opportunities/:slug", name: "role-detail", component: RoleDetailView },
  { path: "/careers/apply", name: "apply", component: ApplyView },
  { path: "/contact", name: "contact", component: ContactView },
  { path: "/request-appointment", name: "request-appointment", component: RequestAppointmentView },
  { path: "/client-access", name: "client-access", component: ClientAccessView },
  { path: "/insurance-fees", name: "insurance-fees", component: InsuranceFeesView },
  { path: "/faqs", name: "faqs", component: FaqsView },
  { path: "/blogs", name: "blogs", component: BlogsView },
  { path: "/privacy", name: "privacy", component: PrivacyView },

  // Some copy documents specify their own URL. Those pages live under
  // /services/ and /specialties/ with the rest of the menu, so the client's
  // URLs redirect.
  { path: "/individual-therapy-washington", redirect: "/services/individual-therapy" },
  { path: "/anxiety-therapy-washington", redirect: "/specialties/anxiety" },
  { path: "/depression-therapy-washington", redirect: "/specialties/depression" },
  { path: "/trauma-therapy-washington", redirect: "/specialties/trauma-ptsd" },
  { path: "/adhd-therapy-washington", redirect: "/specialties/adhd" },
  { path: "/autism-therapy-washington", redirect: "/specialties/autism" },
  { path: "/mood-disorders-therapy-washington", redirect: "/specialties/mood-disorders" },
  {
    path: "/personality-disorders-therapy-washington",
    redirect: "/specialties/personality-disorders",
  },
  { path: "/mens-mental-health-therapy", redirect: "/specialties/mens-mental-health" },
  {
    path: "/womens-mental-health-therapy-washington",
    redirect: "/specialties/womens-mental-health",
  },
  {
    path: "/stress-and-burnout-therapy-washington",
    redirect: "/specialties/stress-burnout",
  },

  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0 };
  },
});

export default router;
