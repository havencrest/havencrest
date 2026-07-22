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
  ApplyView,
  ContactView,
  RequestAppointmentView,
  ClientAccessView,
  InsuranceFeesView,
  FaqsView,
  BlogsView,
  PrivacyView,
} from "@/views";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/services", name: "services", component: ServicesView },
  { path: "/services/:slug", name: "service-detail", component: ServiceDetailView },
  { path: "/specialties", name: "specialties", component: SpecialtiesView },
  { path: "/specialties/:slug", name: "specialty-detail", component: SpecialtyDetailView },
  { path: "/therapists", name: "therapists", component: TherapistsView },
  { path: "/therapists/:slug", name: "therapist-detail", component: TherapistDetailView },
  { path: "/careers", name: "careers", component: CareersView },
  { path: "/careers/opportunities", name: "opportunities", component: OpportunitiesView },
  { path: "/careers/apply", name: "apply", component: ApplyView },
  { path: "/contact", name: "contact", component: ContactView },
  { path: "/request-appointment", name: "request-appointment", component: RequestAppointmentView },
  { path: "/client-access", name: "client-access", component: ClientAccessView },
  { path: "/insurance-fees", name: "insurance-fees", component: InsuranceFeesView },
  { path: "/faqs", name: "faqs", component: FaqsView },
  { path: "/blogs", name: "blogs", component: BlogsView },
  { path: "/privacy", name: "privacy", component: PrivacyView },
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
