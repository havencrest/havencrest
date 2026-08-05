// Specialty pages.
//
// Every entry carries the short summary used on cards and the specialties
// index: `what` / `recognize` / `help`.
//
// Entries the client has supplied full page copy for also carry long-form
// fields, and the detail view switches to the richer layout when it finds
// them. Source copy lives in `src/docs/`.
//
//   seo       { title, description }  — per-page title tag + meta description
//   headline  string                  — H1 override (the card keeps `title`)
//   lede      { heading, body[], emphasis }
//   sections  [ … ]                   — see the shape note below
//   faqs      [ { q, a, links[] } ]
//   closing   { heading, body[], button }
//   related   [ { label, to } ]       — sidebar cross-links
//
// A section renders whichever of these it defines, in this order:
//
//   heading   string
//   body      string[]                — paragraphs
//   defs      [ { term, detail } ]    — bold-term bullets
//   list      string[]                — plain bullets
//   items     [ { title, body, list[], link } ]  — sub-headed blocks
//   note      string                  — emphasized callout (safety copy)
//   outro     string[]                — paragraphs after the lists
//   links     [ { label, to } ]       — related-page link row
//
// Link targets are real routes only. Where the source copy pointed at a page
// that does not exist, the sentence is kept but the link is dropped rather than
// pointed somewhere approximate — see
// `src/docs/Menu Recommendation and Service Page Plan.md`.

export const specialties = [
  {
    slug: "anxiety",
    image: "Havencrest/annie-spratt-H582qBzGmHQ-unsplash_bhd7hd",
    title: "Anxiety",
    what: "Anxiety is more than occasional worry. It can affect your thoughts, emotions, body, and daily life.",
    recognize:
      "You may recognize this if you often feel overwhelmed, restless, on edge, struggle to relax, avoid situations, or experience racing thoughts or physical symptoms such as a fast heartbeat.",
    help: "Therapy can help you understand your anxiety, develop practical coping strategies, and regain confidence in everyday life.",
  },
  {
    slug: "depression",
    image: "Havencrest/christopher-lemercier-12yvdCiLaVE-unsplash_dkfwqv",
    title: "Depression",
    what: "Depression is a persistent low mood that affects how you feel, think, and function.",
    recognize:
      "You may recognize this if you feel persistently sad, lose interest in things you once enjoyed, feel exhausted, struggle to concentrate, or experience changes in sleep or appetite.",
    help: "Therapy provides a supportive space to understand what you're experiencing and develop tools to help you move forward.",

    seo: {
      title: "Depression Therapy in Washington | Havencrest",
      description:
        "Compassionate, evidence-based depression therapy in Washington for adults, teens, and young adults. Rediscover hope, resilience, and emotional wellbeing.",
    },
    headline: "Depression Therapy in Washington",
    lede: {
      heading: "Compassionate depression therapy to help you find hope again",
      body: [
        "Depression is more than feeling sad or having a difficult day. It can affect how you think, feel, and experience everyday life, making it harder to enjoy activities you once loved, maintain relationships, focus at work or school, or care for yourself. Whatever your experiences, healing is possible, and you don't have to navigate it alone.",
        "At Havencrest Wellness & Counseling, we provide compassionate, evidence-based depression therapy for adults, teens, and young adults throughout Washington. Our licensed therapists will work collaboratively with you to understand your experiences, develop practical coping strategies, and support you in rediscovering hope, resilience, and emotional wellbeing.",
        "Whether you're experiencing persistent sadness, loss of motivation, grief, depression related to trauma, or the challenges of a major life transition, we're here to support you every step of the way.",
      ],
      emphasis:
        "Take the first step today by scheduling an appointment with one of our therapists.",
    },
    sections: [
      {
        heading: "Who can benefit from depression therapy?",
        body: [
          "Depression affects everyone differently. If you're experiencing any of the following symptoms and they're affecting your wellbeing or ability to navigate everyday life, depression therapy may help:",
        ],
        defs: [
          {
            term: "Persistent sadness, emptiness or irritability",
            detail:
              "Feeling low, emotionally numb, or more irritable than usual, or finding it difficult to experience enjoyment in everyday life.",
          },
          {
            term: "Loss of interest or motivation",
            detail:
              "Losing interest in activities, hobbies, relationships or responsibilities that were once important to you.",
          },
          {
            term: "Feelings of hopelessness",
            detail:
              "Feeling discouraged about the future or struggling to believe that things can improve.",
          },
          {
            term: "Low energy or fatigue",
            detail:
              "Feeling physically or emotionally exhausted, experiencing reduced productivity, or finding everyday tasks more difficult than usual.",
          },
          {
            term: "Difficulty concentrating",
            detail: "Finding it hard to focus, make decisions, or complete everyday tasks.",
          },
          {
            term: "Changes in sleep",
            detail:
              "Sleeping too much, struggling to fall asleep, or waking frequently during the night.",
          },
          {
            term: "Changes in appetite",
            detail:
              "Eating significantly more or less than usual or noticing changes in your weight.",
          },
          {
            term: "Feelings of guilt or worthlessness",
            detail:
              "Being overly self-critical, blaming yourself, or feeling that you're not good enough or struggling to recognize your own strength.",
          },
          {
            term: "Withdrawing from others",
            detail:
              "Pulling away from friends, family, work, hobbies, or avoiding everyday responsibilities because they feel overwhelming.",
          },
          {
            term: "Depression following a difficult experience",
            detail:
              "Experiencing depression after trauma, grief, significant life changes, or ongoing stress.",
          },
        ],
        outro: [
          "Depending on your unique needs and goals, you may also find support through our trauma and grief services.",
        ],
        links: [
          { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
          { label: "Grief & Loss", to: "/specialties/grief-loss" },
        ],
      },
      {
        heading: "Understanding depression",
        body: [
          "Depression is a complex mental health condition influenced by many different factors, including biological, psychological, environmental, and life experiences. Family history, chronic stress, traumatic experiences, grief, major life transitions, relationship difficulties, chronic illness, and hormonal changes can all contribute to depression.",
          "Understanding the factors contributing to your depression allows us to develop a personalized approach that reflects your unique experiences, strengths, and goals.",
        ],
      },
      {
        heading: "How we support depression",
        body: [
          "Our goal is to help you better understand your depression, reduce its impact on your daily life, and develop practical skills that support lasting emotional wellbeing.",
          "Your therapy is tailored to your unique experiences, strengths, and goals. Depending on your needs, therapy may include:",
        ],
        items: [
          {
            title: "Understanding thought patterns (CBT)",
            body: "Cognitive Behavioral Therapy (CBT) helps you better understand the connection between your thoughts, emotions, and behaviors. Together, you'll identify patterns that contribute to depression and develop practical coping strategies that support lasting change.",
          },
          {
            title: "Building psychological flexibility (ACT)",
            body: "Acceptance and Commitment Therapy (ACT) helps you respond to difficult thoughts and emotions with greater flexibility, reducing their influence while supporting you to move forward in ways that reflect your values and personal goals.",
          },
          {
            title: "Developing present-moment awareness",
            body: "Mindfulness-based approaches help you focus on the present moment with greater awareness and acceptance, reducing emotional overwhelm while strengthening emotional regulation and self-compassion.",
          },
          {
            title: "Supporting healing from past experiences",
            body: "For some people, depression is shaped by difficult or traumatic experiences. Trauma-informed therapy recognizes the lasting impact these experiences can have, creating a safe and supportive environment where healing can take place.",
            link: { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
          },
          {
            title: "Processing grief and loss",
            body: "When depression is connected to the loss of a loved one or another significant life change, therapy provides a compassionate space to process your emotions, adjust to change, and move forward at a pace that feels right for you.",
            link: { label: "Grief & Loss", to: "/specialties/grief-loss" },
          },
          {
            title: "Medication support, when appropriate",
            body: "For some individuals, therapy provides the support they need to manage depression. For others, additional support may be beneficial. When appropriate, we can discuss medication support and referrals, and help coordinate your care with a trusted psychiatric provider.",
            link: {
              label: "Medication Management Support & Referrals",
              to: "/services/medication-management",
            },
          },
        ],
      },
      {
        heading: "What to expect during depression therapy",
        body: [
          "Your first session is focused on understanding your experiences, current challenges, strengths, and goals.",
          "Together, you and your therapist will:",
        ],
        list: [
          "Build a trusting therapeutic relationship where you feel heard, respected, and understood.",
          "Explore the factors contributing to your depression.",
          "Work collaboratively with you to develop personalized therapy goals.",
          "Begin introducing practical coping strategies that can be used in everyday life.",
          "Regularly review your progress together, adapting your approach as your needs and goals evolve.",
        ],
        outro: [
          "As therapy progresses, you'll continue building practical skills that help you manage depression, strengthen your resilience, and reconnect with the people, activities, and goals that matter most to you.",
          "If meeting in person isn't convenient, we also offer secure telehealth appointments throughout Washington.",
        ],
        links: [{ label: "Telehealth Therapy", to: "/services/telehealth-therapy" }],
      },
      {
        heading: "Insurance",
        body: [
          "Insurance coverage for depression therapy varies by provider and plan. Our team is happy to help you understand your benefits, verify your coverage, and discuss your options before your first appointment.",
        ],
        links: [{ label: "Insurance & fees", to: "/insurance-fees" }],
      },
    ],
    faqs: [
      {
        q: "How do I know if I'm experiencing depression?",
        a: "Depression can affect people in different ways. If you've been experiencing persistent sadness, hopelessness, loss of interest in activities you once enjoyed, changes in sleep or appetite, low energy, or other symptoms that are affecting your wellbeing or daily life, speaking with a therapist can help you better understand your experiences and explore the support that's right for you.",
      },
      {
        q: "Can depression improve without therapy or medication?",
        a: "It can. Some people experience periods of low mood that improve over time, while others benefit from additional support. If depression is persistent or affecting your daily life, therapy can help you understand the factors contributing to your depression, develop practical coping strategies, and build lasting resilience. For some individuals, medication may also form part of a broader treatment plan.",
        links: [
          {
            label: "Medication Management Support & Referrals",
            to: "/services/medication-management",
          },
        ],
      },
      {
        q: "Is online depression therapy effective?",
        a: "Yes. Research shows that telehealth therapy can be an effective treatment option for many people experiencing depression. Havencrest offers secure virtual appointments throughout Washington, providing the same compassionate, evidence-based care as our in-person sessions.",
        links: [{ label: "Telehealth Therapy", to: "/services/telehealth-therapy" }],
      },
    ],
    closing: {
      heading: "Schedule your first appointment today.",
      body: "Healing is possible, and you don't have to navigate it alone. Our team will help you find the therapist who's right for you.",
    },
    related: [
      { label: "Anxiety", to: "/specialties/anxiety" },
      { label: "Grief & Loss", to: "/specialties/grief-loss" },
      { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
      { label: "Telehealth Therapy", to: "/services/telehealth-therapy" },
    ],
  },
  {
    slug: "trauma-ptsd",
    image: "Havencrest/susan-wilkinson-EDJKEXFbzHA-unsplash_xridkb",
    title: "Trauma & PTSD",
    what: "Trauma can result from distressing or overwhelming experiences and may continue to affect you long after the event.",
    recognize:
      "You may recognize this if you experience intrusive memories, nightmares, avoidance, emotional numbness, hypervigilance, or feel constantly on edge.",
    help: "Our clinicians provide evidence-based, trauma-informed care at a pace that feels safe for you.",
  },
  {
    slug: "adhd",
    image: "Havencrest/nathan-dumlao-B7Ys4q_utls-unsplash_kogkxx",
    title: "ADHD",
    what: "ADHD affects attention, organization, and self-regulation in ways that can impact work, school, and relationships.",
    recognize:
      "You may recognize this if you struggle with focus, forgetfulness, impulsivity, restlessness, or completing tasks.",
    help: "Therapy can help you better understand your strengths, build practical strategies, and improve daily functioning.",
  },
  {
    slug: "autism",
    image: "Havencrest/peter-burdon-C2zX9DEVSDs-unsplash_zy67ms",
    title: "Autism",
    what: "Autism is a neurodevelopmental difference that influences communication, sensory experiences, and how people interact with the world.",
    recognize:
      "You may recognize this if you experience sensory sensitivities, prefer routines, find social situations exhausting, or have focused interests.",
    help: "We provide affirming support tailored to your individual strengths and needs.",
  },
  {
    slug: "stress-burnout",
    image: "Havencrest/ben-maguire-3AE3jUCBhxo-unsplash_peqacx",
    title: "Stress & Burnout",
    what: "Stress becomes burnout when ongoing demands leave you feeling emotionally, mentally, and physically exhausted.",
    recognize:
      "You may recognize this if you feel overwhelmed, irritable, detached, exhausted, or struggle to recover even after resting.",
    help: "Together, we'll identify what's contributing to your stress and develop healthier, sustainable ways to cope.",
  },
  {
    slug: "grief-loss",
    image: "Havencrest/sandy-millar-cQ-66Evaf5g-unsplash_ctbt9w",
    title: "Grief & Loss",
    what: "Grief is a natural response to loss and can affect every aspect of life.",
    recognize:
      "You may recognize this if you're experiencing sadness, numbness, anger, guilt, difficulty concentrating, or feel like life has changed in unexpected ways.",
    help: "Therapy offers compassionate support as you process your loss in your own way and at your own pace.",
  },
  {
    slug: "life-transitions",
    image: "Havencrest/jovan-vasiljevic-w91JpY9pGZo-unsplash_a4zisc",
    title: "Life Transitions",
    what: "Major life changes can bring uncertainty, even when they're positive.",
    recognize:
      "You may recognize this if you're feeling unsettled by changes in work, relationships, parenthood, relocation, or other life events.",
    help: "We're here to help you navigate change with clarity, resilience, and confidence.",

    seo: {
      title: "Life Transitions Therapy in Washington | Havencrest",
      description:
        "Navigate major life changes with compassionate therapy in Washington. Havencrest helps you explore identity, relationships, stress, and personal growth.",
    },
    headline: "Life Transitions & Identity Therapy in Washington",
    lede: {
      heading: "Finding your way through change, growth, and new seasons of life",
      body: [
        "Life is constantly changing. Some transitions bring excitement and opportunity, while others can feel overwhelming, uncertain, or emotionally exhausting.",
        "Changes in relationships, careers, family roles, culture, identity, or personal circumstances can affect how we see ourselves and where we feel we belong.",
        "At Havencrest Wellness & Counseling, we provide compassionate therapy for individuals navigating life transitions and identity exploration throughout Washington. Our therapists create a supportive space where you can process change, understand yourself more deeply, and develop the confidence and resilience needed to move forward.",
        "Whether you are adjusting to a new chapter, redefining who you are, or seeking clarity about your path, therapy can help you navigate change with greater awareness and self-compassion.",
      ],
      emphasis: "Your next chapter begins with understanding yourself.",
    },
    sections: [
      {
        heading: "What are life transitions?",
        body: [
          "Life transitions are significant changes that require adjustment, adaptation, and emotional processing. Even positive changes can bring stress, because they require us to step into unfamiliar situations.",
          "Common life transitions include:",
        ],
        list: [
          "Starting a new career",
          "Changing jobs",
          "Graduating from school",
          "Moving to a new city or state",
          "Marriage or divorce",
          "Becoming a parent",
          "Children leaving home",
          "Retirement",
          "Loss and grief",
          "Relationship changes",
          "Health changes",
          "Immigration or cultural adjustment",
          "Major personal growth experiences",
        ],
        outro: [
          "Therapy can provide support as you learn to adapt, make decisions, and reconnect with what matters most.",
        ],
      },
      {
        heading: "What is identity exploration?",
        body: [
          "Identity is how we understand ourselves, including our values, beliefs, experiences, relationships, culture, and sense of purpose.",
          "Identity exploration may involve questions such as:",
        ],
        list: [
          "Who am I becoming?",
          "What matters most to me?",
          "Am I living according to my values?",
          "How have my experiences shaped me?",
          "Where do I feel I belong?",
          "How do I define myself outside of others' expectations?",
        ],
        outro: [
          "Exploring identity is a normal and meaningful part of personal growth at any stage of life.",
        ],
      },
      {
        heading: "Who can benefit from this therapy?",
        body: ["This type of therapy may support individuals who are:"],
        list: [
          "Feeling uncertain about their future",
          "Experiencing major changes",
          "Struggling with confidence or self-worth",
          "Redefining themselves after a major event",
          "Adjusting to a new environment",
          "Exploring personal values and goals",
          "Navigating cultural or family expectations",
          "Feeling disconnected from who they are",
          "Seeking greater meaning and purpose",
        ],
        outro: [
          "If your transition is connected to trauma, anxiety, or depression, our specialized services may provide additional support.",
        ],
        links: [
          { label: "Anxiety", to: "/specialties/anxiety" },
          { label: "Depression", to: "/specialties/depression" },
          { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
        ],
      },
      {
        heading: "Common challenges during life transitions",
        body: ["Major changes can affect emotional wellbeing in many ways."],
        items: [
          {
            title: "Feeling overwhelmed",
            body: "You may feel unsure about decisions, responsibilities, or what comes next.",
          },
          {
            title: "Loss of confidence",
            body: "Transitions can challenge your sense of identity, purpose, or ability to adapt.",
          },
          {
            title: "Anxiety about the future",
            body: "Uncertainty may create worry, fear, or difficulty making decisions.",
          },
          {
            title: "Relationship changes",
            body: "Life transitions often affect family, friendships, partnerships, and social connections.",
          },
          {
            title: "Grief and letting go",
            body: "Moving forward sometimes requires processing what has changed or what has been lost.",
          },
        ],
      },
      {
        heading: "How therapy can help during life changes",
        body: [
          "At Havencrest, therapy provides a space to slow down, reflect, and better understand your experiences. Therapy may help you:",
        ],
        items: [
          {
            title: "Process change",
            body: "Explore emotions related to transitions and develop healthier ways of coping.",
          },
          {
            title: "Clarify your values",
            body: "Identify what matters most and make choices aligned with your goals.",
          },
          {
            title: "Build confidence",
            body: "Reconnect with your strengths and develop trust in yourself.",
          },
          {
            title: "Manage stress and anxiety",
            body: "Learn strategies to regulate emotions and navigate uncertainty.",
          },
          {
            title: "Create a new path forward",
            body: "Develop a clearer understanding of who you are and what you want next.",
          },
        ],
      },
      {
        heading: "Our approach",
        body: [
          "Every person's journey is unique. Our therapists use an individualized approach based on your experiences, needs, and goals. Therapeutic approaches may include:",
        ],
        items: [
          {
            title: "Cognitive Behavioral Therapy (CBT)",
            body: "Helps identify thought patterns that may be affecting confidence, decision-making, and emotional wellbeing.",
          },
          {
            title: "Acceptance and Commitment Therapy (ACT)",
            body: "Supports you in building psychological flexibility, accepting difficult emotions, and creating a life aligned with your personal values.",
          },
          {
            title: "Trauma-informed therapy",
            body: "Helps explore how past experiences may influence current beliefs, relationships, and identity.",
            link: { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
          },
          {
            title: "Culturally responsive therapy",
            body: "Recognizes how culture, family, community, and lived experiences shape identity and personal growth.",
            link: {
              label: "Cultural & Life Experiences",
              to: "/specialties/cultural-life-experiences",
            },
          },
        ],
      },
      {
        heading: "Identity, culture, and belonging",
        body: ["Our identity is shaped by many parts of our lives, including:"],
        list: [
          "Culture and heritage",
          "Family experiences",
          "Relationships",
          "Personal values",
          "Gender identity",
          "Life experiences",
          "Community connections",
          "Beliefs and traditions",
        ],
        outro: [
          "At Havencrest, we provide culturally responsive care that respects your individual story and the experiences that have shaped you.",
        ],
        links: [
          { label: "Cultural & Life Experiences", to: "/specialties/cultural-life-experiences" },
          { label: "Identity & Self-Discovery", to: "/specialties/identity-self-discovery" },
        ],
      },
      {
        heading: "Life transitions we support",
        body: ["Our therapists can support individuals navigating:"],
        checks: [
          "Career changes",
          "Relocation and adjustment",
          "Relationship changes",
          "Divorce and separation",
          "Parenting transitions",
          "Cultural adjustment",
          "Personal growth",
          "Self-esteem challenges",
          "Grief and loss",
          "Major life decisions",
          "Finding purpose and direction",
        ],
      },
      {
        heading: "What to expect in therapy",
        body: [
          "Your first session is an opportunity to share what brings you to therapy and what you hope to achieve.",
          "Together, you and your therapist may:",
        ],
        list: [
          "Explore your current challenges",
          "Identify patterns and strengths",
          "Clarify personal goals",
          "Develop coping strategies",
          "Create a personalized treatment plan",
        ],
        outro: [
          "Therapy is not about becoming someone else — it is about understanding yourself more fully and creating a life that feels meaningful.",
        ],
      },
      {
        heading: "Why choose Havencrest?",
        body: [
          "At Havencrest, we understand that change can be both challenging and transformative. Our therapists provide:",
        ],
        checks: [
          "Compassionate, personalized care",
          "Trauma-informed therapy",
          "Culturally responsive support",
          "Evidence-based approaches",
          "Identity-affirming counseling",
          "Support through major life changes",
          "Secure telehealth options throughout Washington",
        ],
        links: [
          { label: "About us", to: "/about" },
          { label: "Meet the team", to: "/therapists" },
        ],
      },
      {
        heading: "Insurance & accessibility",
        body: [
          "Many insurance plans cover therapy services related to mental health concerns and life challenges. Our team can help you understand your benefits and available options.",
        ],
        links: [{ label: "Insurance & fees", to: "/insurance-fees" }],
      },
    ],
    faqs: [
      {
        q: "Is struggling with a life transition normal?",
        a: "Yes. Major changes often create emotional challenges, even when the transition is positive. Therapy can provide support while you adjust and grow.",
      },
      {
        q: "Do I need a diagnosis to benefit from therapy?",
        a: "No. Many people seek therapy for personal growth, self-understanding, stress management, and navigating important life changes.",
      },
      {
        q: "Can therapy help me find my identity?",
        a: "Yes. Therapy can provide a supportive space to explore your values, experiences, goals, and sense of self.",
      },
      {
        q: "Can life transitions cause anxiety or depression?",
        a: "Yes. Significant changes can contribute to increased stress, anxiety, or depression symptoms. Therapy can help you understand and manage these experiences.",
        links: [
          { label: "Anxiety", to: "/specialties/anxiety" },
          { label: "Depression", to: "/specialties/depression" },
        ],
      },
      {
        q: "Is life transition therapy available through telehealth?",
        a: "Yes. Havencrest provides secure telehealth therapy throughout Washington.",
        links: [{ label: "Telehealth Therapy", to: "/services/telehealth-therapy" }],
      },
    ],
    closing: {
      heading: "Begin your next chapter.",
      body: "Change is part of life — but you don't have to navigate it alone. Whether you are starting over, finding yourself, adjusting to a new chapter, or seeking clarity about your future, we're here to support you.",
    },
    related: [
      { label: "Identity & Self-Discovery", to: "/specialties/identity-self-discovery" },
      { label: "Cultural & Life Experiences", to: "/specialties/cultural-life-experiences" },
      { label: "Grief & Loss", to: "/specialties/grief-loss" },
      { label: "Telehealth Therapy", to: "/services/telehealth-therapy" },
    ],
  },
  {
    slug: "relationship-challenges",
    image: "Havencrest/kelly-sikkema-ofczR12zfxM-unsplash_wiuarw",
    title: "Relationship Challenges",
    what: "Relationship difficulties can affect communication, trust, and emotional connection.",
    recognize:
      "You may recognize this if you're experiencing frequent conflict, feeling disconnected, struggling with communication, or facing significant life changes together.",
    help: "Therapy can help strengthen understanding, improve communication, and support healthier relationships.",
  },
  {
    slug: "parenting-support",
    image: "Havencrest/robo-wunderkind--_QpJv4J_AA-unsplash_qtwgmi",
    title: "Parenting Support",
    what: "Parenting comes with unique joys and challenges at every stage.",
    recognize:
      "You may recognize this if you're feeling overwhelmed, uncertain, experiencing conflict at home, or looking for strategies to support your child.",
    help: "Our clinicians work alongside parents to build confidence and strengthen family relationships.",
  },
  {
    slug: "child-adolescent-mental-health",
    image: "Havencrest/melissa-walker-horn-qycAibck4B0-unsplash_qqddkk",
    title: "Child & Adolescent Mental Health",
    what: "Children and teens experience mental health challenges differently from adults.",
    recognize:
      "You may recognize this if your child shows changes in mood, behavior, friendships, school performance, or emotional regulation.",
    help: "We provide age-appropriate support while working collaboratively with families.",
  },
  {
    slug: "womens-mental-health",
    image: "Havencrest/olivia-bauso-7NvnR9rK5uI-unsplash_bce3dw",
    title: "Women's Mental Health",
    what: "Women's mental health may be influenced by life stages, relationships, hormones, and personal experiences.",
    recognize:
      "You may recognize this if you're experiencing emotional changes related to stress, pregnancy, postpartum, menopause, or other life events.",
    help: "Our clinicians provide personalized, compassionate care for every stage of life.",
  },
  {
    slug: "mens-mental-health",
    image: "Havencrest/kaja-sariwating-UEEmt2sndSQ-unsplash_fdmnuh",
    title: "Men's Mental Health",
    what: "Men often experience unique pressures that can make it difficult to seek support.",
    recognize:
      "You may recognize this if you're feeling stressed, withdrawn, irritable, overwhelmed, or struggling to express emotions.",
    help: "Therapy provides a confidential space to explore challenges and build healthier ways of coping.",

    seo: {
      title: "Men's Mental Health Therapy in Washington | Havencrest",
      description:
        "Compassionate men's mental health therapy in Washington. Support for stress, anxiety, depression, relationships, trauma, and emotional wellness.",
    },
    headline: "Men's Mental Health Therapy in Washington",
    lede: {
      heading: "A safe space for men to prioritize their mental health",
      body: [
        "Many men are taught to be strong, independent, and resilient — but carrying everything alone can become exhausting.",
        "Stress, relationship challenges, career pressures, family responsibilities, trauma, and major life changes can affect emotional wellbeing. Yet many men hesitate to seek support because of stigma, expectations, or the belief that they should handle challenges on their own.",
        "At Havencrest Wellness & Counseling, we provide compassionate, judgment-free mental health therapy for men throughout Washington. Our therapists create a supportive environment where men can explore their experiences, strengthen emotional resilience, improve relationships, and develop healthier ways to navigate life's challenges.",
        "Seeking support is not a sign of weakness — it is a step toward growth, self-awareness, and a healthier future.",
      ],
      emphasis: "You do not have to carry everything alone.",
    },
    sections: [
      {
        heading: "Why men's mental health matters",
        body: ["Mental health affects every area of life, including:"],
        list: [
          "Relationships",
          "Work and career",
          "Parenting",
          "Physical health",
          "Confidence",
          "Decision-making",
          "Emotional wellbeing",
          "Overall quality of life",
        ],
        outro: [
          "Men may experience mental health challenges differently due to personal experiences, cultural expectations, family beliefs, and social pressures.",
          "Therapy provides a confidential space to better understand emotions, develop coping strategies, and create meaningful change.",
        ],
      },
      {
        heading: "Common reasons men seek therapy",
        body: ["Men come to therapy for many different reasons, including:"],
        items: [
          {
            title: "Stress and burnout",
            body: "High expectations at work, family responsibilities, financial pressure, and constant demands can lead to emotional exhaustion. Therapy can help you manage stress, set healthier boundaries, prevent burnout, and create balance.",
            link: { label: "Stress & Burnout", to: "/specialties/stress-burnout" },
          },
          {
            title: "Anxiety",
            body: "Anxiety can show up as constant worry, racing thoughts, irritability, difficulty relaxing, feeling overwhelmed, or trouble sleeping.",
            link: { label: "Anxiety", to: "/specialties/anxiety" },
          },
          {
            title: "Depression",
            body: "Depression in men may not always look like sadness. It may appear as anger or frustration, withdrawal, loss of motivation, feeling disconnected, changes in sleep or appetite, or feeling numb.",
            link: { label: "Depression", to: "/specialties/depression" },
          },
          {
            title: "Relationship challenges",
            body: "Relationships can be affected by communication difficulties, emotional distance, conflict, difficulty expressing needs, and trust concerns.",
            link: { label: "Couples Counseling", to: "/services/couples-counseling" },
          },
          {
            title: "Trauma and difficult experiences",
            body: "Past experiences can continue to affect how we see ourselves, manage emotions, and connect with others. Therapy can support healing from childhood experiences, relationship trauma, loss, workplace trauma, and major life events.",
            link: { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
          },
        ],
      },
      {
        heading: "Barriers that keep men from seeking help",
        body: ["Many men delay therapy because of:"],
        items: [
          {
            title: "Stigma around mental health",
            body: "Some men grow up hearing that asking for help means they are weak. In reality, seeking support requires self-awareness and courage.",
          },
          {
            title: "Pressure to handle everything alone",
            body: "Being responsible for others can make it difficult to recognize your own needs.",
          },
          {
            title: "Difficulty expressing emotions",
            body: "Some men were never taught how to identify or communicate emotions.",
          },
          {
            title: "Fear of being judged",
            body: "A good therapist provides a confidential, supportive environment where you can be yourself.",
          },
        ],
        outro: [
          "At Havencrest, therapy is a partnership — not a place where you are judged or told how you should feel.",
        ],
      },
      {
        heading: "How therapy can help men",
        body: ["Therapy can help men:"],
        items: [
          {
            title: "Improve emotional awareness",
            body: "Learn to identify, understand, and communicate emotions in healthier ways.",
          },
          {
            title: "Build better coping skills",
            body: "Develop strategies for managing stress, anger, anxiety, and difficult situations.",
          },
          {
            title: "Strengthen relationships",
            body: "Improve communication, connection, and emotional intimacy.",
          },
          {
            title: "Increase self-confidence",
            body: "Reconnect with your values, strengths, and personal goals.",
          },
          {
            title: "Process past experiences",
            body: "Work through difficult experiences that may still impact your present life.",
          },
        ],
      },
      {
        heading: "Our approach",
        body: [
          "At Havencrest, we recognize that every man's experience is different. Our therapists use evidence-based approaches tailored to your goals, including:",
        ],
        items: [
          {
            title: "Cognitive Behavioral Therapy (CBT)",
            body: "CBT helps identify thought patterns that influence emotions and behaviors.",
          },
          {
            title: "Dialectical Behavior Therapy (DBT)",
            body: "DBT teaches skills for emotional regulation, stress management, and healthier relationships.",
          },
          {
            title: "Trauma-informed therapy",
            body: "Supports individuals processing difficult experiences while focusing on safety, healing, and resilience.",
            link: { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
          },
          {
            title: "Culturally responsive care",
            body: "We recognize that culture, family, identity, and life experiences influence how men experience and express mental health.",
            link: {
              label: "Cultural & Life Experiences",
              to: "/specialties/cultural-life-experiences",
            },
          },
        ],
      },
      {
        heading: "Men's mental health and identity",
        body: ["Many men navigate questions around:"],
        list: [
          "What does strength mean?",
          "How do I balance responsibility and self-care?",
          "How do I communicate my needs?",
          "How do I build healthier relationships?",
          "Who do I want to become?",
        ],
        outro: [
          "Therapy provides space to explore identity, values, purpose, and personal growth.",
        ],
        links: [{ label: "Life Transitions & Identity", to: "/specialties/life-transitions" }],
      },
      {
        heading: "What to expect in therapy",
        body: [
          "Your first session is an opportunity to discuss what brings you to therapy and what you hope to change.",
          "Together, you and your therapist may:",
        ],
        list: [
          "Explore your current challenges",
          "Identify patterns affecting your wellbeing",
          "Discuss your goals",
          "Develop practical coping strategies",
          "Create a personalized treatment plan",
        ],
        outro: [
          "Therapy is not about changing who you are — it is about helping you become the healthiest version of yourself.",
        ],
      },
      {
        heading: "Why choose Havencrest?",
        body: [
          "At Havencrest, we believe men deserve mental healthcare that is compassionate, respectful, and free from judgment. Our approach includes:",
        ],
        checks: [
          "Confidential, supportive therapy",
          "Evidence-based treatment",
          "Trauma-informed care",
          "Culturally responsive counseling",
          "Personalized treatment plans",
          "Support for anxiety, depression, relationships, and life challenges",
          "Secure telehealth options throughout Washington",
        ],
        links: [
          { label: "About us", to: "/about" },
          { label: "Meet the team", to: "/therapists" },
        ],
      },
      {
        heading: "Insurance & accessibility",
        body: [
          "Many insurance plans cover therapy services for mental health concerns. Havencrest works with participating insurance providers and can help you understand your benefits and available options.",
        ],
        links: [{ label: "Insurance & fees", to: "/insurance-fees" }],
      },
    ],
    faqs: [
      {
        q: "Is therapy helpful for men?",
        a: "Yes. Therapy can help men improve emotional awareness, relationships, stress management, confidence, and overall mental health.",
      },
      {
        q: "Why do many men avoid therapy?",
        a: "Some men avoid therapy because of stigma, cultural expectations, or the belief that they should manage challenges alone. A supportive therapist can provide a confidential space to work through challenges.",
      },
      {
        q: "What issues can men talk about in therapy?",
        a: "Anything that affects your emotional wellbeing, including stress, anxiety, depression, relationships, trauma, identity, career challenges, grief, and personal growth.",
      },
      {
        q: "Do I need to have a mental health diagnosis to attend therapy?",
        a: "No. Many men seek therapy for personal growth, stress management, relationship improvement, and navigating life changes.",
      },
      {
        q: "Is men's therapy available through telehealth?",
        a: "Yes. Havencrest provides secure telehealth therapy throughout Washington.",
        links: [{ label: "Telehealth Therapy", to: "/services/telehealth-therapy" }],
      },
    ],
    closing: {
      heading: "Begin your mental health journey.",
      body: "Taking care of your mental health is an investment in yourself, your relationships, and your future. Whether you are feeling overwhelmed, disconnected, stuck, or simply want to grow, we provide a safe space to explore what matters most.",
    },
    related: [
      { label: "Stress & Burnout", to: "/specialties/stress-burnout" },
      { label: "Anxiety", to: "/specialties/anxiety" },
      { label: "Depression", to: "/specialties/depression" },
      { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
    ],
  },
  {
    slug: "identity-self-discovery",
    image: "Havencrest/mitch-nJupV3AOP-U-unsplash_w8p2zm",
    title: "Identity & Self-Discovery",
    what: "Exploring your identity is a personal journey that can involve growth, uncertainty, and change.",
    recognize:
      "You may recognize this if you're questioning who you are, your values, life direction, or sense of belonging.",
    help: "We're here to provide a supportive, non-judgmental space as you explore what matters most to you.",
  },
  {
    slug: "cultural-life-experiences",
    image: "Havencrest/hannah-busing-Zyx1bK9mqmA-unsplash_f0an6i",
    title: "Cultural & Life Experiences",
    what: "Culture, background, and lived experiences can shape mental health in meaningful ways.",
    recognize:
      "You may recognize this if you're navigating cultural expectations, migration, discrimination, or challenges balancing different parts of your identity.",
    help: "Our clinicians value your lived experience and provide culturally responsive care.",
  },
];

export const findSpecialty = (slug) => specialties.find((s) => s.slug === slug);
