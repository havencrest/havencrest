// Job postings.
//
// Every entry carries the short fields used on the opportunities index —
// `credentials` / `location` / `employmentType` / `summary` — plus the
// long-form posting copy the client supplied per role. Source copy lives in
// `src/docs/`.
//
//   seo       { title, description }  — per-page title tag + meta description
//   lede      { heading, body[] }
//   sections  [ … ]                   — same shape as services / specialties,
//                                       see the note at the top of
//                                       src/data/specialties.js
//   closing   { heading, body }
//
// Two editorial notes on the source documents:
//
// 1. Spelling is American English throughout, per the house style — which is
//    also how the source postings were written.
// 2. The supervisor posting's title and opening line disagreed on number
//    ("Board Certified Licensed Counselors ... to serve as a Clinical
//    Supervisor"). The singular reading is used, since one person is hired.

export const roles = [
  {
    slug: "licensed-clinicians",
    title: "Licensed Clinicians",
    credentials: "LMHC, LICSW, LMFT, or Licensed Psychologist",
    location: "Washington State (Remote/Telehealth)",
    employmentType: "Full-Time | Part-Time | Contract",
    summary: "Full clinical caseload with autonomy, supervision, and flexible scheduling.",

    seo: {
      title: "Licensed Clinician Jobs in Washington | Havencrest Counseling",
      description:
        "Havencrest Wellness & Counseling is hiring licensed clinicians (LMHC, LICSW, LMFT, Licensed Psychologist) for remote telehealth roles across Washington State.",
    },
    lede: {
      heading: "Join Havencrest Wellness & Counseling",
      body: [
        "Havencrest Wellness & Counseling is seeking compassionate, client-centered licensed clinicians to join our growing team. We welcome experienced professionals who are passionate about providing high-quality, evidence-based mental health care in a collaborative and supportive environment.",
      ],
    },
    sections: [
      {
        heading: "Responsibilities",
        list: [
          "Provide individual, couples, family, and/or group therapy.",
          "Conduct clinical assessments, diagnoses, treatment planning, and ongoing care.",
          "Maintain timely and accurate clinical documentation.",
          "Collaborate with colleagues and referral partners to coordinate client care.",
          "Deliver ethical, culturally responsive, and trauma-informed services.",
        ],
      },
      {
        heading: "Qualifications",
        list: [
          {
            text: "Active, unrestricted Washington State license as one of the following:",
            list: [
              "Licensed Mental Health Counselor (LMHC)",
              "Licensed Independent Clinical Social Worker (LICSW)",
              "Licensed Marriage and Family Therapist (LMFT)",
              "Licensed Psychologist",
            ],
          },
          "Master's or Doctoral degree in a behavioral health field.",
          "Strong clinical, communication, and documentation skills.",
          "Experience providing telehealth services is preferred.",
        ],
      },
      {
        heading: "What we offer",
        checks: [
          "Flexible scheduling",
          "Remote telehealth opportunities",
          "Competitive compensation",
          "Administrative and billing support",
          "Collaborative, mission-driven team",
          "Opportunities for professional growth and continuing education",
        ],
      },
    ],
    closing: {
      heading: "Grow your career with Havencrest",
      body: "If you're passionate about helping individuals and families thrive, we'd love to hear from you. Apply today and grow your career with Havencrest Wellness & Counseling.",
    },
  },

  {
    slug: "associate-level-clinicians",
    title: "Associate-Level Clinicians",
    credentials: "LMHCA, LSWAIC, or LMFTA",
    location: "Washington State (Remote/Telehealth)",
    employmentType: "Full-Time | Part-Time | Contract",
    summary: "Structured clinical support and supervision toward independent licensure.",

    seo: {
      title: "Associate Clinician Jobs in Washington | Havencrest Counseling",
      description:
        "Havencrest Wellness & Counseling is hiring associate-level clinicians (LMHCA, LSWAIC, LMFTA) with qualified supervision toward independent licensure in Washington State.",
    },
    lede: {
      heading: "Launch your career with Havencrest Wellness & Counseling",
      body: [
        "Havencrest Wellness & Counseling is seeking compassionate associate-level clinicians to join our growing team. We provide a supportive, collaborative environment where you can build your clinical skills while working toward independent licensure under experienced clinical supervision.",
      ],
    },
    sections: [
      {
        heading: "Responsibilities",
        list: [
          "Provide individual, couples, family, and/or group therapy under clinical supervision.",
          "Complete assessments, treatment plans, progress notes, and other required documentation.",
          "Deliver evidence-based, client-centered mental health services.",
          "Participate in individual and group clinical supervision.",
          "Collaborate with colleagues to provide coordinated, high-quality care.",
          "Maintain ethical and professional standards in accordance with Washington State regulations.",
        ],
      },
      {
        heading: "Qualifications",
        list: [
          {
            text: "Active Washington State associate license as one of the following:",
            list: [
              "Licensed Mental Health Counselor Associate (LMHCA)",
              "Licensed Social Worker Associate – Independent Clinical (LSWAIC)",
              "Licensed Marriage and Family Therapist Associate (LMFTA)",
            ],
          },
          "Master's degree in Counseling, Social Work, Marriage and Family Therapy, or a related behavioral health field.",
          "Strong communication, organizational, and interpersonal skills.",
          "Commitment to professional growth and independent licensure.",
        ],
      },
      {
        heading: "What we offer",
        checks: [
          "Qualified clinical supervision",
          "Flexible scheduling",
          "Remote telehealth opportunities",
          "Administrative and billing support",
          "Collaborative, mission-driven team",
          "Professional development and mentorship",
          "Opportunities for growth within the organization",
        ],
      },
    ],
    closing: {
      heading: "Begin your clinical journey",
      body: "Begin your clinical journey with Havencrest Wellness & Counseling and grow your career while making a meaningful difference in the lives of others.",
    },
  },

  {
    slug: "clinical-supervisor",
    title: "Licensed Board Certified Clinical Supervisor",
    credentials: "LMHC, LICSW, LMFT, or Licensed Psychologist",
    location: "Washington State (Remote/Hybrid)",
    employmentType: "Part-Time | Contract",
    summary: "Provide clinical supervision within a values-driven multidisciplinary team.",

    seo: {
      title: "Clinical Supervisor Jobs in Washington | Havencrest Counseling",
      description:
        "Havencrest Wellness & Counseling is hiring a board certified clinical supervisor to mentor associate-level clinicians across Washington State. Remote and hybrid options.",
    },
    lede: {
      heading: "Join our leadership team",
      body: [
        "Havencrest Wellness & Counseling is seeking an experienced board certified licensed counselor to serve as a clinical supervisor for associate-level clinicians. This leadership role is ideal for a passionate clinician who enjoys mentoring, promoting clinical excellence, and supporting the growth of future mental health professionals.",
      ],
    },
    sections: [
      {
        heading: "Key responsibilities",
        list: [
          "Provide individual and group clinical supervision to associate-level clinicians.",
          "Offer case consultation, clinical guidance, and professional mentorship.",
          "Review clinical documentation to ensure quality, compliance, and best practices.",
          "Support clinicians in meeting Washington State licensure requirements.",
          "Promote ethical, evidence-based, and trauma-informed care.",
          "Collaborate with agency leadership to maintain high standards of clinical practice.",
        ],
      },
      {
        heading: "Qualifications",
        list: [
          {
            text: "Must hold an active Washington State license, unrestricted and in good standing, as one of the following:",
            list: [
              "Licensed Mental Health Counselor (LMHC)",
              "Licensed Independent Clinical Social Worker (LICSW)",
              "Licensed Marriage and Family Therapist (LMFT)",
              "Licensed Psychologist",
            ],
          },
          "Meets Washington State requirements to supervise associate-level clinicians.",
          "Master's or Doctoral degree in a related behavioral health field.",
          "Strong clinical assessment and diagnostic skills.",
          "Excellent communication and interpersonal skills.",
          "Excellent clinical judgment, leadership, organization, documentation review, and decision making.",
          "Experience providing telehealth services is preferred.",
          "Experience with electronic health records (EHR).",
          "Experience supervising interns and associates is a plus.",
          "Ability to work independently while contributing to a collaborative team.",
        ],
      },
      {
        heading: "What we offer",
        checks: [
          "Flexible remote/hybrid work opportunities",
          "Competitive compensation",
          "Supportive and collaborative team culture",
          "Administrative support",
          "Opportunity to help build and shape a growing behavioral health practice",
          "Professional growth and leadership opportunities",
        ],
      },
    ],
    closing: {
      heading: "Help shape a growing practice",
      body: "If you are passionate about developing clinicians and advancing quality mental health care, we'd love to hear from you. Apply today to join Havencrest Wellness & Counseling.",
    },
  },
];

export const findRole = (slug) => roles.find((r) => r.slug === slug);
