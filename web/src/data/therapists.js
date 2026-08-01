// Each therapist may include an optional `image` field — a portrait photo
// imported into src/assets or placed in /public. When present it renders in
// the therapist cards; when absent, a warm brand-tinted initials avatar is
// shown instead. Example:  image: "/therapists/sarah-johnson.jpg",
export const therapists = [
  {
    slug: "sarah-johnson",
    name: "Sarah Johnson",
    credentials: "LMHC",
    populations: ["Adults", "Couples"],
    specialties: ["Anxiety", "Trauma", "Life Transitions", "Burnout"],
    approaches: ["CBT", "ACT", "EMDR"],
    appointmentTypes: ["In-person", "Telehealth"],
    quote: "I believe therapy should be a partnership grounded in trust and curiosity.",
  },
  {
    slug: "michael-adeyemi",
    name: "Michael Adeyemi",
    credentials: "LMFT",
    populations: ["Families", "Adolescents"],
    specialties: ["Parenting Support", "Family Conflict", "Identity"],
    approaches: ["Family Systems", "Narrative Therapy"],
    appointmentTypes: ["In-person", "Telehealth"],
    quote: "Every family has a story worth hearing.",
  },
  {
    slug: "amara-okafor",
    name: "Amara Okafor",
    credentials: "PsyD",
    populations: ["Adults", "Children"],
    specialties: ["ADHD", "Autism", "Psychological Assessments"],
    approaches: ["Evidence-based Assessment", "CBT"],
    appointmentTypes: ["In-person"],
    quote: "Understanding how your mind works is the first step to working with it.",
  },
];

export const findTherapist = (slug) => therapists.find((t) => t.slug === slug);
