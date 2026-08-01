export const services = [
  {
    slug: "couples-therapy",
    title: "Couples Therapy",
    what: "A supportive space for partners to strengthen their relationship, improve communication, and work through challenges together.",
    when: "Communication difficulties, conflict, trust concerns, parenting challenges, intimacy concerns, premarital counseling, and major life changes.",
    expect:
      "Your therapist will help you understand relationship patterns, improve communication, and develop practical strategies.",
  },
  {
    slug: "family-therapy",
    title: "Family Therapy",
    what: "Helps family members improve communication, strengthen relationships, and navigate challenges together.",
    when: "Family conflict, parenting challenges, blended families, behavioral concerns, life transitions, grief, and communication difficulties.",
    expect: "Sessions focus on understanding family dynamics and working toward shared goals.",
  },
  {
    slug: "child-adolescent-therapy",
    title: "Child & Adolescent Therapy",
    what: "Supports children and teenagers through emotional, behavioral, social, and developmental challenges.",
    when: "Anxiety, school concerns, behavioral challenges, social difficulties, family changes, grief, and self-esteem.",
    expect:
      "Care is tailored to the child's developmental needs while partnering with parents when appropriate.",
  },
  {
    slug: "psychological-assessments",
    title: "Psychological Assessments",
    what: "A structured evaluation to better understand cognitive, emotional, behavioral, or developmental functioning.",
    when: "ADHD, autism, learning difficulties, diagnostic clarification, accommodations, and treatment planning.",
    expect: "May include interviews, questionnaires, standardized testing, and a written report.",
  },
  {
    slug: "telehealth-services",
    title: "Telehealth Services",
    what: "Secure online therapy from a convenient location.",
    when: "Busy schedules, travel, rural living, or greater flexibility.",
    expect: "Sessions are conducted via a secure video platform.",
  },
  {
    slug: "life-transitions",
    title: "Life Transitions",
    what: "Support through significant life changes affecting wellbeing or identity.",
    when: "Career changes, relocation, marriage, divorce, parenthood, retirement, and grief.",
    expect: "Develop strategies and confidence to navigate change.",
  },
  {
    slug: "identity",
    title: "Identity",
    what: "A supportive space to explore identity, belonging, and self-understanding.",
    when: "Cultural identity, gender identity, sexual orientation, faith, spirituality, and self-discovery.",
    expect: "An affirming environment to develop greater clarity and confidence.",
  },
  {
    slug: "psychiatric-evaluation-medication",
    title: "Psychiatric Evaluation & Medication Management",
    what: "Assessment of mental health and whether medication may be beneficial, with ongoing monitoring.",
    when: "Anxiety, depression, bipolar disorder, ADHD, PTSD, OCD, or medication review.",
    expect:
      "Comprehensive evaluation, discussion of options, medication when appropriate, and follow-up.",
  },
  {
    slug: "relationships-family",
    title: "Relationships & Family",
    what: "Therapy that supports healthier relationships through improved communication.",
    when: "Communication difficulties, family conflict, parenting, separation, blended families, boundaries, and caregiver stress.",
    expect: "Strengthen communication and develop practical strategies.",
  },
  {
    slug: "trauma-therapy-recovery",
    title: "Trauma Therapy & Recovery",
    what: "Helps people process distressing experiences and move toward recovery.",
    when: "Childhood trauma, PTSD, abuse, violence, medical trauma, grief, and distressing life events.",
    expect: "Recovery at a pace that feels safe using evidence-based approaches.",
  },
];

export const findService = (slug) => services.find((s) => s.slug === slug);
