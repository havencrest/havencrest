// Service pages.
//
// The list and its order follow the client's Service Page Guide
// (`src/docs/Havencrest_Service page Guide.md`). Every entry carries the short
// summary used on cards and the services index — `what` / `when` / `expect` —
// plus the long-form page copy the client supplied per service:
//
//   seo       { title, description }  — per-page title tag + meta description
//   headline  string                  — H1 override (the card keeps `title`)
//   lede      { heading, body[], emphasis }
//   sections  [ … ]                   — see the shape note below
//   faqs      [ { q, a, links[] } ]
//   closing   { heading, body }
//   related   [ { label, to } ]       — sidebar cross-links
//
// A section renders whichever of these it defines, in this order:
//
//   image     string                  — Cloudinary public ID, renders as a
//                                       16:9 accent photo above the heading.
//                                       Use to weave a second/third photo
//                                       through pages beyond the hero.
//   heading   string
//   body      string[]                — paragraphs
//   defs      [ { term, detail } ]    — bold-term bullets
//   list      string[]                — plain bullets. An entry may instead be
//                                       { text, list[] } to carry sub-bullets,
//                                       which drops the list to one column.
//   checks    string[]                — check-marked bullets
//   items     [ { title, body, list[], link } ]  — sub-headed blocks
//   note      string                  — emphasized callout (safety copy)
//   outro     string[]                — paragraphs after the lists
//   links     [ { label, to } ]       — related-page link row
//
// Two editorial rules, applied consistently to the source documents:
//
// 1. Link targets are real routes only. The copy points at "Anxiety Therapy",
//    "Depression Therapy", "ADHD Therapy" and "Trauma Therapy" — Havencrest has
//    no service pages by those names, but it does have specialty pages covering
//    each, so those links resolve to `/specialties/…`. Nothing is invented.
// 2. Spelling is American English throughout, per the house style.
//
// Slugs are referenced by the router's legacy-redirect table; renaming one
// means adding the old slug there (`src/router/index.js`).

export const services = [
  {
    slug: "individual-therapy",
    art: "sprout",
    image: "Havencrest/Individual_therapy_s4svpo",
    title: "Individual Therapy",
    what: "One-to-one therapy with a licensed clinician, focused on understanding what you're experiencing and building practical tools for everyday life.",
    when: "Anxiety, depression, stress and burnout, trauma, grief, self-esteem, life transitions, and personal growth.",
    expect:
      "A confidential space, a personalized treatment plan, and evidence-based approaches chosen around your goals.",

    seo: {
      title: "Individual Therapy in Washington | Havencrest Counseling",
      description:
        "Find compassionate individual therapy in Washington for anxiety, depression, trauma, stress, grief, and life transitions. Schedule your first appointment today.",
    },
    headline: "Individual Therapy",
    lede: {
      heading: "Find support, healing, and growth with individual therapy",
      body: [
        "Life can be overwhelming, whether you're navigating anxiety, depression, trauma, grief, relationship challenges, or major life changes. At Havencrest Wellness & Counseling, we provide personalized, evidence-based individual therapy designed to help you better understand yourself, build resilience, and create lasting positive change.",
        "Our licensed therapists work collaboratively with adults, teens, and young adults across Washington through both in-person and secure telehealth appointments.",
      ],
    },
    sections: [
      {
        heading: "Who is individual therapy for?",
        body: [
          "Whether you're navigating life's challenges or simply looking to better understand yourself, individual therapy offers a supportive space to improve your mental health, strengthen your emotional wellbeing, and create meaningful, lasting change.",
          "You may benefit from individual therapy if you're experiencing:",
        ],
        defs: [
          {
            term: "Anxiety",
            detail: "Constant worry, panic attacks, racing thoughts, or feeling on edge.",
          },
          {
            term: "Depression",
            detail:
              "Persistent sadness, low mood, low motivation, or loss of interest in things you once enjoyed.",
          },
          {
            term: "Trauma and PTSD",
            detail:
              "Past experiences that continue to affect your emotions, relationships, or daily life.",
          },
          {
            term: "Stress and burnout",
            detail:
              "Feeling overwhelmed by work, school, caregiving, or life's demands; feeling irritable or struggling to cope with everyday responsibilities.",
          },
          {
            term: "Grief and loss",
            detail: "Coping with the loss of a loved one or another significant life change.",
          },
          {
            term: "Relationship challenges",
            detail: "Difficulties with family, friendships, or romantic relationships.",
          },
          {
            term: "Life transitions",
            detail:
              "Adjusting to parenthood, career changes, divorce, relocation, retirement, or other major life events.",
          },
          {
            term: "Self-esteem and identity",
            detail:
              "Building confidence, developing a stronger sense of self, and finding clarity during times of uncertainty or personal change.",
          },
          {
            term: "Women's mental health",
            detail:
              "Support for the emotional challenges that can arise through fertility, pregnancy, postpartum, menopause, hormonal changes, or other stages of life.",
          },
          {
            term: "Men's mental health",
            detail:
              "Navigating stress, anxiety, burnout, relationship challenges, fatherhood, major life changes, or the pressures and expectations that can make it difficult to express emotions or ask for help.",
          },
        ],
        outro: [
          "If your concerns relate to a particular stage of life or personal experience, you may find these pages helpful:",
        ],
        links: [
          { label: "Men's Mental Health", to: "/specialties/mens-mental-health" },
          { label: "Women's Mental Health", to: "/specialties/womens-mental-health" },
          { label: "Life Transitions", to: "/specialties/life-transitions" },
        ],
      },
      {
        heading: "What can contribute to mental health challenges?",
        body: [
          'When life feels difficult, it\'s common to wonder, "Why am I feeling this way?" Mental health challenges rarely have a single cause. More often, they develop through a combination of life experiences, circumstances, and biological factors.',
          "These may include:",
        ],
        list: [
          "Chronic stress from work, finances, or daily responsibilities",
          "Childhood experiences that continue to shape how you think and relate to others",
          "Past trauma affecting emotional wellbeing, relationships, or sense of safety",
          "Family history or genetic factors influencing mental health",
          "Anxiety, depression, or other mental health concerns",
          "Major life transitions such as parenthood, career change, relocation, retirement, divorce, or loss",
          "Relationship challenges, conflict, or difficulty connecting with others",
          "Workplace or academic pressures, including burnout",
          "Medical conditions, chronic illness, or pain affecting mental health",
          "Hormonal changes related to puberty, pregnancy, postpartum, or menopause",
        ],
        outro: [
          "At Havencrest Wellness & Counseling, we recognize that every person's story is unique. Rather than focusing only on symptoms, we work with you to understand the factors contributing to your experiences and develop practical strategies that support long-term wellbeing.",
        ],
      },
      {
        image: "Havencrest/adult-therapy-client-conversation-1-1024x683_e711tj",
        heading: "How we approach individual therapy",
        body: [
          "Our goal is to help you better understand yourself, build resilience, strengthen emotional wellbeing, and develop practical skills that support lasting change.",
          "Because every person's experiences and goals are different, therapy is tailored using evidence-based approaches, including:",
        ],
        list: [
          "Cognitive Behavioral Therapy (CBT)",
          "Acceptance and Commitment Therapy (ACT)",
          "Solution-Focused Therapy",
          "Trauma-informed counseling",
          "Mindfulness-based interventions",
          "Motivational interviewing",
          "Strengths-based therapy",
        ],
        outro: [
          "When appropriate, we may also recommend specialized services such as EMDR therapy, or help you explore medication support, so you receive the care that's right for you.",
        ],
        links: [
          { label: "EMDR Therapy", to: "/services/emdr-therapy" },
          {
            label: "Medication Management Support & Referrals",
            to: "/services/medication-management",
          },
        ],
      },
      {
        image: "Havencrest/hannah-busing-Zyx1bK9mqmA-unsplash_f0an6i",
        heading: "What to expect during individual therapy",
        body: ["During your first session, your therapist will:"],
        list: [
          "Learn about you and what has brought you to therapy",
          "Understand your concerns, goals, and what you hope to achieve",
          "Explore your strengths and the challenges you're experiencing",
          "Work with you to create a personalized plan that supports your therapy goals",
          "Begin introducing practical strategies to help you manage challenges and improve your wellbeing",
          "Establish meaningful goals and regularly review your progress together, adjusting your approach as your needs and goals evolve",
        ],
        outro: [
          "As therapy progresses, you'll continue to build practical skills and strategies that you can apply in everyday life to support lasting positive change.",
          "If meeting in person isn't convenient, we also offer secure telehealth appointments throughout Washington.",
        ],
        links: [{ label: "Telehealth Therapy", to: "/services/telehealth-therapy" }],
      },
      {
        heading: "Finding the right fit",
        body: [
          "Choosing a therapist is an important decision, and finding the right fit can make all the difference. At Havencrest Wellness & Counseling, we're committed to providing compassionate, evidence-based care that's tailored to your unique needs and goals.",
          "Learn more about Havencrest's approach to care on our About Us page, or explore our team to find the therapist who best fits your needs.",
        ],
        links: [
          { label: "About us", to: "/about" },
          { label: "Meet the team", to: "/therapists" },
        ],
      },
      {
        heading: "Insurance & payment",
        body: [
          "Insurance coverage for individual therapy varies by provider and plan. Our team is happy to help you understand your benefits and discuss your options before your first appointment.",
        ],
        links: [{ label: "Insurance & fees", to: "/insurance-fees" }],
      },
    ],
    faqs: [
      {
        q: "How do I know if I need therapy?",
        a: "You don't need to be in crisis to benefit from therapy. Many people seek support for everyday stress, anxiety, low mood, life transitions, relationship difficulties, or simply wanting a confidential space to work through what's on their mind. If something is affecting your daily life, relationships, or wellbeing, therapy can help.",
      },
      {
        q: "Do you accept insurance?",
        a: "Insurance coverage depends on your plan and the reason for treatment. Our team is happy to help verify your benefits and explain your options.",
        links: [{ label: "Insurance & fees", to: "/insurance-fees" }],
      },
      {
        q: "Can I attend therapy virtually?",
        a: "Yes. Havencrest offers secure telehealth appointments for clients throughout Washington.",
        links: [{ label: "Telehealth Therapy", to: "/services/telehealth-therapy" }],
      },
    ],
    closing: {
      heading: "Ready to take the next step?",
      body: "Whether you're navigating anxiety, depression, life transitions, relationship challenges, or simply looking to better understand yourself, Havencrest Wellness & Counseling provides compassionate, evidence-based individual therapy tailored to your unique needs and goals.",
    },
    related: [
      { label: "Anxiety", to: "/specialties/anxiety" },
      { label: "Depression", to: "/specialties/depression" },
      { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
      { label: "Telehealth Therapy", to: "/services/telehealth-therapy" },
    ],
  },
  {
    slug: "couples-counseling",
    art: "hearts",
    image: "Havencrest/couples-counseling-therapy-washington_zsyt53",
    title: "Couples Counseling",
    what: "A supportive space for partners to strengthen their relationship, improve communication, and work through challenges together.",
    when: "Communication difficulties, conflict, trust concerns, parenting challenges, intimacy concerns, premarital counseling, and major life changes.",
    expect:
      "Your therapist will help you understand relationship patterns, improve communication, and develop practical strategies.",

    headline: "Couples Counseling",
    lede: {
      heading: "A supportive space to grow together",
      body: [
        "Whether you're navigating challenges or simply want to strengthen your relationship, couples counseling offers a supportive space to improve communication, deepen understanding, and grow together.",
        "At Havencrest Wellness & Counseling, we work alongside both partners to understand the unique dynamics of your relationship, identify the factors contributing to your challenges, and develop practical strategies that strengthen communication, rebuild trust, and foster lasting connection.",
      ],
      emphasis: "Schedule your first couples counseling appointment today.",
    },
    sections: [
      {
        heading: "Who is couples counseling for?",
        body: ["You may benefit from couples counseling if you're experiencing:"],
        defs: [
          {
            term: "Communication challenges",
            detail:
              '"I don\'t feel heard," "We keep misunderstanding each other," or "We struggle to talk without arguing."',
          },
          {
            term: "Frequent conflict",
            detail:
              "Recurring arguments, unresolved disagreements, or difficulty finding common ground.",
          },
          {
            term: "Emotional distance",
            detail: "Feeling disconnected, growing apart, or lacking emotional intimacy.",
          },
          {
            term: "Trust concerns",
            detail: "Rebuilding trust after dishonesty, betrayal, or infidelity.",
          },
          {
            term: "Parenting and family challenges",
            detail:
              "Differences in parenting styles, blended family dynamics, or family-related stress.",
          },
          {
            term: "Financial pressures",
            detail: "Money-related disagreements or differing financial priorities.",
          },
          {
            term: "Intimacy concerns",
            detail:
              "Changes in physical or emotional intimacy that are affecting your relationship.",
          },
          {
            term: "Major life transitions",
            detail:
              "Adjusting to marriage, parenthood, relocation, career changes, illness, grief and loss, or caring responsibilities.",
          },
          {
            term: "Premarital counseling",
            detail: "Building healthy communication and a strong foundation before marriage.",
          },
        ],
        outro: [
          "When past experiences are affecting your relationship, individual or trauma-focused therapy may complement the work you do together in couples counseling.",
        ],
        links: [
          { label: "Individual Therapy", to: "/services/individual-therapy" },
          { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
        ],
      },
      {
        heading: "What can cause relationship difficulties?",
        body: [
          'When relationships become strained, it\'s common for one or both partners to wonder, "Is this my fault?" In reality, relationship challenges are rarely that simple.',
          "Relationships are shaped by the experiences, circumstances, and patterns that both partners bring into them. Often, difficulties develop over time through a combination of factors, such as:",
        ],
        list: [
          "Communication patterns that leave one or both partners feeling unheard",
          "Ongoing stress from work, finances, or daily responsibilities",
          "Past experiences or trauma that continue to influence the present",
          "Anxiety, depression, or other mental health concerns",
          "Parenting and family responsibilities",
          "Differences in expectations, values, or ways of communicating",
          "Unresolved hurt or resentment",
          "Having little quality time to connect and nurture the relationship",
        ],
        outro: [
          "At Havencrest, we don't focus on assigning blame or deciding who is right or wrong. If past trauma is affecting your relationship, trauma-informed care and EMDR therapy may also be helpful alongside couples counseling.",
        ],
        links: [
          { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
          { label: "EMDR Therapy", to: "/services/emdr-therapy" },
        ],
      },
      {
        image: "Havencrest/hannah-busing-Zyx1bK9mqmA-unsplash_f0an6i",
        heading: "How we approach couples counseling",
        body: [
          "Our goal is to help you strengthen communication, deepen understanding, rebuild trust, and develop the skills needed to navigate challenges together with confidence.",
          "Every couple is different, so we tailor therapy using evidence-based approaches, ensuring your care is personalized to your relationship and goals:",
        ],
        list: [
          "The Gottman Method",
          "Emotionally Focused Therapy (EFT)",
          "Cognitive Behavioral Therapy (CBT)",
          "Solution-Focused Therapy",
          "Trauma-informed counseling",
          "Mindfulness-based interventions",
        ],
      },
      {
        image: "Havencrest/christina-wocintechchat-com-m-eF7HN40WbAQ-unsplash_owuqwo",
        heading: "What to expect during couples counseling",
        body: ["During your first session, your therapist will:"],
        list: [
          "Learn about your relationship and what has brought you to counseling",
          "Understand your concerns, goals, and what you hope to achieve",
          "Identify the strengths within your relationship and areas for growth",
          "Work with you to create a personalized plan that supports your relationship goals",
          "Begin introducing practical strategies to strengthen communication and navigate challenges together",
          "Establish meaningful goals and regularly review your progress together, adjusting your approach as your needs and relationship evolve",
        ],
        outro: [
          "As therapy progresses, you'll continue to build practical skills and strategies that you can apply between sessions to deepen your connection, navigate conflict, and create lasting positive change.",
          "If meeting in person isn't convenient, we also offer secure telehealth appointments for couples throughout Washington.",
        ],
        links: [{ label: "Telehealth Therapy", to: "/services/telehealth-therapy" }],
      },
      {
        heading: "Finding the right fit",
        body: [
          "Choosing a couples therapist is an important decision, and finding the right fit can make all the difference. At Havencrest Wellness & Counseling, we're committed to providing compassionate, evidence-based care that is tailored to your unique relationship and goals.",
          "Learn more about Havencrest's approach to care on our About Us page, or explore our team to find the therapist who best fits your needs.",
        ],
        links: [
          { label: "About us", to: "/about" },
          { label: "Meet the team", to: "/therapists" },
        ],
      },
      {
        heading: "Insurance & payment",
        body: [
          "Insurance coverage for couples counseling varies by provider and plan. Our team is happy to help you understand your benefits and discuss your options before your first appointment.",
        ],
        links: [{ label: "Insurance & fees", to: "/insurance-fees" }],
      },
    ],
    faqs: [
      {
        q: "How do I choose the right couples therapist?",
        a: "Choosing the right therapist is an important part of the counseling process. Visit our team page to learn more about each clinician's background, areas of expertise, and therapeutic approach, and find the therapist who feels like the right fit for your relationship.",
        links: [{ label: "Meet the team", to: "/therapists" }],
      },
      {
        q: "Can we attend therapy virtually?",
        a: "Yes. Havencrest offers secure telehealth couples counseling for clients throughout Washington.",
        links: [{ label: "Telehealth Therapy", to: "/services/telehealth-therapy" }],
      },
      {
        q: "Do you accept insurance?",
        a: "Insurance coverage depends on your plan and the reason for treatment. Our team is happy to help verify your benefits and explain your options.",
        links: [{ label: "Insurance & fees", to: "/insurance-fees" }],
      },
    ],
    closing: {
      heading: "Ready to take the next step?",
      body: "Whether you're navigating conflict, rebuilding trust, or strengthening communication, Havencrest Wellness & Counseling provides compassionate, evidence-based couples counseling tailored to your relationship.",
    },
    related: [
      { label: "Relationship Challenges", to: "/specialties/relationship-challenges" },
      { label: "Family Therapy", to: "/services/family-therapy" },
      { label: "Individual Therapy", to: "/services/individual-therapy" },
      { label: "Telehealth Therapy", to: "/services/telehealth-therapy" },
    ],
  },
  {
    slug: "family-therapy",
    art: "home",
    image: "Havencrest/Family_Therapy_xlcifj",
    title: "Family Therapy",
    what: "Helps family members improve communication, strengthen relationships, and navigate challenges together.",
    when: "Family conflict, parenting challenges, blended families, behavioral concerns, life transitions, grief, and communication difficulties.",
    expect: "Sessions focus on understanding family dynamics and working toward shared goals.",

    headline: "Family Therapy",
    lede: {
      heading: "Working through challenges together",
      body: [
        "Family therapy is designed for families who want to improve communication, strengthen relationships, and work through challenges together. Whether you're navigating ongoing conflict or adjusting to a significant life change, therapy provides a supportive space where every family member can feel heard and understood.",
        "At Havencrest Wellness & Counseling, we don't focus on assigning blame. Instead, we work with families to understand relationship patterns, strengthen communication, and develop practical strategies that support healthier, more connected relationships.",
      ],
      emphasis: "Schedule your first family therapy appointment today.",
    },
    sections: [
      {
        heading: "Who is family therapy for?",
        body: ["Your family may benefit from therapy if you're experiencing:"],
        defs: [
          {
            term: "Communication challenges",
            detail: "When conversations often lead to misunderstandings, frustration, or conflict.",
          },
          {
            term: "Parent-child relationship concerns",
            detail:
              "Ongoing tension, difficulty connecting, or challenges communicating as children grow and family dynamics change.",
          },
          {
            term: "Teen behavioral or emotional concerns",
            detail:
              "Changes in behavior, emotional wellbeing, independence, or relationships that are creating challenges at home.",
          },
          {
            term: "Blended family adjustments",
            detail:
              "Navigating new family roles, routines, relationships, and expectations after families come together.",
          },
          {
            term: "Divorce or separation",
            detail:
              "Adjusting to changes in family structure, co-parenting, and supporting children through the transition.",
          },
          {
            term: "Grief and loss",
            detail:
              "Coping with the death of a loved one or another significant loss that is affecting the family.",
          },
          {
            term: "Trauma affecting the family",
            detail:
              "When past or recent traumatic experiences are affecting relationships, communication, or emotional wellbeing.",
          },
          {
            term: "Parenting disagreements",
            detail:
              "Differences in parenting styles, expectations, or approaches that are creating tension between caregivers.",
          },
          {
            term: "Sibling conflict",
            detail:
              "Frequent arguments, rivalry, jealousy, or ongoing difficulties between brothers and sisters.",
          },
          {
            term: "Major life transitions",
            detail:
              "Adjusting to relocation, illness, career changes, welcoming a new family member, or other significant life events.",
          },
          {
            term: "Mental health concerns affecting the family",
            detail:
              "When anxiety, depression, or other mental health conditions are influencing family relationships or daily life.",
          },
          {
            term: "Caregiver stress",
            detail:
              "Feeling overwhelmed by the emotional, physical, or practical responsibilities of caring for children or other family members.",
          },
        ],
        outro: ["Depending on your family's needs, you may also find support through:"],
        links: [
          { label: "Individual Therapy", to: "/services/individual-therapy" },
          { label: "Child & Teen Therapy", to: "/services/child-teen-therapy" },
          { label: "Anxiety", to: "/specialties/anxiety" },
          { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
        ],
      },
      {
        heading: "What can contribute to family challenges?",
        body: [
          "Every family experiences challenges at different stages of life. It's common to wonder why communication has become more difficult or why conflict seems harder to resolve. In reality, family challenges are rarely caused by one person or one event. Over time, influences can affect how family members communicate, respond to one another, and work through challenges together.",
          "Common factors that contribute to family conflict, and that can benefit from family therapy, include:",
        ],
        list: [
          "Communication breakdowns that leave family members feeling unheard",
          "Parenting differences between caregivers",
          "Work, financial, or caregiving stress affecting family relationships",
          "Mental health concerns such as anxiety, depression, or trauma",
          "Substance use impacting trust and family dynamics",
          "Grief, loss, or major life transitions such as divorce, remarriage, or relocation",
          "Unresolved past conflicts or resentment",
          "Blended family, cultural, or generational differences",
        ],
        outro: [
          "Depending on your family's unique needs, individual family members may also find these services helpful:",
        ],
        links: [
          { label: "Child & Teen Therapy", to: "/services/child-teen-therapy" },
          { label: "Individual Therapy", to: "/services/individual-therapy" },
          {
            label: "Culturally Responsive Therapy",
            to: "/services/culturally-responsive-therapy",
          },
        ],
      },
      {
        image: "Havencrest/olivia-bauso-7NvnR9rK5uI-unsplash_bce3dw",
        heading: "How we approach family therapy",
        body: [
          "Every family is unique, so therapy is tailored to your family's strengths, challenges, and goals. Our therapists use evidence-based approaches to help improve communication, strengthen relationships, and support healthier family functioning.",
          "Depending on your family's needs, therapy may include approaches such as:",
        ],
        list: [
          "Family Systems Therapy",
          "Structural Family Therapy",
          "Solution-Focused Therapy",
          "Cognitive Behavioral Therapy (CBT)",
          "Trauma-informed counseling",
          "Parenting support strategies",
          "Strengths-based therapy",
        ],
        outro: [
          "Our goal is to help your family strengthen communication, deepen understanding, navigate conflict more effectively, and build practical skills that support healthier relationships long after therapy has ended.",
        ],
      },
      {
        image: "Havencrest/christina-wocintechchat-com-m-vzfgh3RAPzM-unsplash_izmqhg",
        heading: "What to expect during family therapy",
        body: ["During your first session, your therapist will:"],
        list: [
          "Learn about your family's history, strengths, and the concerns that brought you to therapy",
          "Understand each family member's perspective, where appropriate",
          "Identify communication patterns and areas for growth",
          "Work with your family to develop shared goals that reflect your family's unique needs",
          "Begin introducing practical strategies to strengthen communication, improve relationships, and navigate challenges together",
          "Regularly review your family's progress together, adjusting your approach as your family's needs and goals evolve",
        ],
        outro: [
          "As therapy progresses, your family will continue developing practical skills and strategies that can be used outside of sessions to strengthen relationships, navigate conflict, and create lasting positive change.",
          "Some sessions may include the entire family, while others may involve parents, caregivers, or individual family members, depending on your family's goals and treatment plan.",
          "If meeting in person isn't convenient, we also offer secure telehealth appointments for families throughout Washington.",
        ],
        links: [{ label: "Telehealth Therapy", to: "/services/telehealth-therapy" }],
      },
      {
        heading: "Finding the right fit",
        body: [
          "Choosing a therapist is an important decision, and finding the right fit can make all the difference. At Havencrest Wellness & Counseling, we're committed to providing compassionate, evidence-based care that's tailored to your family's unique needs and goals.",
          "Learn more about Havencrest's approach to care on our About Us page, or explore our team to find the therapist who best fits your family's needs.",
        ],
        links: [
          { label: "About us", to: "/about" },
          { label: "Meet the team", to: "/therapists" },
        ],
      },
      {
        heading: "Insurance & payment",
        body: [
          "Insurance coverage for family therapy varies by provider and plan. Our team is happy to help you understand your benefits and discuss your options before your first appointment.",
        ],
        links: [{ label: "Insurance & fees", to: "/insurance-fees" }],
      },
    ],
    faqs: [
      {
        q: "When should a family consider therapy?",
        a: "Families don't need to be in crisis to benefit from therapy. It can help with ongoing conflict, communication breakdowns, parenting disagreements, major transitions like divorce or blended family adjustments, grief, or when one member's struggles are affecting the whole household. If tension or misunderstanding is becoming a regular pattern rather than a one-off disagreement, therapy can help before things become harder to resolve.",
      },
      {
        q: "Do you accept insurance?",
        a: "Insurance coverage depends on your plan and the reason for treatment. Our team is happy to help verify your benefits and explain your options.",
        links: [{ label: "Insurance & fees", to: "/insurance-fees" }],
      },
      {
        q: "Can I attend therapy virtually?",
        a: "Yes. Havencrest offers secure telehealth appointments for clients throughout Washington.",
        links: [{ label: "Telehealth Therapy", to: "/services/telehealth-therapy" }],
      },
    ],
    closing: {
      heading: "Ready to take the next step?",
      body: "Whether you're navigating conflict, rebuilding trust, or strengthening communication, Havencrest Wellness & Counseling provides compassionate, evidence-based family therapy tailored to your family's unique needs and goals.",
    },
    related: [
      { label: "Child & Teen Therapy", to: "/services/child-teen-therapy" },
      { label: "Parenting Support", to: "/specialties/parenting-support" },
      { label: "Couples Counseling", to: "/services/couples-counseling" },
      { label: "Telehealth Therapy", to: "/services/telehealth-therapy" },
    ],
  },
  {
    slug: "child-teen-therapy",
    art: "kite",
    image: "Havencrest/Child_and_Teen_Therapy_og1fon",
    title: "Child & Teen Therapy",
    what: "Supports children and teenagers through emotional, behavioral, social, and developmental challenges.",
    when: "Anxiety, school concerns, behavioral challenges, social difficulties, family changes, grief, and self-esteem.",
    expect:
      "Care is tailored to the child's developmental needs while partnering with parents when appropriate.",

    headline: "Child & Teen Therapy",
    lede: {
      heading: "A safe, supportive space for children and teens",
      body: [
        "Child and teen therapy provides a safe, supportive space for children (ages 5–12) and teenagers (ages 13–17) to better understand their emotions, develop healthy coping skills, and navigate the unique challenges of growing up.",
        "Whether your child or teen is experiencing emotional, behavioral, social, or academic difficulties, therapy can help them build confidence, strengthen resilience, and develop the skills they need to thrive.",
      ],
      emphasis: "Schedule your child's first appointment today.",
    },
    sections: [
      {
        heading: "Who is child & teen therapy for?",
        body: ["Your child or teen may benefit from therapy if they are experiencing:"],
        defs: [
          {
            term: "Anxiety",
            detail: "Excessive worry, fears, panic, or feeling overwhelmed by everyday situations.",
          },
          {
            term: "Depression",
            detail:
              "Persistent sadness, low mood, withdrawal from activities, or loss of interest in things they once enjoyed.",
          },
          {
            term: "School-related challenges",
            detail:
              "Academic pressure, school avoidance, difficulty concentrating, or declining school performance.",
          },
          {
            term: "Behavioral concerns",
            detail:
              "Frequent anger, emotional outbursts, aggression, increased conflict at home, difficulty following expectations, or changes in eating or sleeping habits that are affecting daily life.",
          },
          {
            term: "Emotional regulation",
            detail: "Difficulty understanding, expressing, or managing emotions in healthy ways.",
          },
          {
            term: "ADHD-related challenges",
            detail:
              "Difficulties with attention, organization, impulsivity, or managing everyday responsibilities.",
          },
          {
            term: "Trauma and PTSD",
            detail:
              "When past or recent experiences continue to affect emotional wellbeing, relationships, or a child's sense of safety.",
          },
          {
            term: "Grief and loss",
            detail: "Coping with the death of a loved one or another significant loss.",
          },
          {
            term: "Self-esteem and confidence",
            detail:
              "Building confidence, developing a stronger sense of self, and navigating periods of uncertainty or change.",
          },
          {
            term: "Friendship or social difficulties",
            detail:
              "Struggling to build friendships, manage peer relationships, or feeling isolated.",
          },
          {
            term: "Family changes",
            detail:
              "Adjusting to divorce, separation, relocation, blended families, or other significant changes at home.",
          },
          {
            term: "Bullying or cyberbullying",
            detail: "Coping with the emotional impact of bullying at school or online.",
          },
          {
            term: "Self-harming behaviors or thoughts of self-harm",
            detail:
              "When your child is intentionally hurting themselves, expressing thoughts of self-harm, or showing signs that they may be at risk.",
          },
          {
            term: "Life transitions",
            detail:
              "Adjusting to new schools, changing friendships, adolescence, or other important developmental milestones.",
          },
        ],
        note: "If your child is at immediate risk of harming themselves or others, call 911 or go to your nearest emergency department immediately.",
        outro: [
          "If your family is navigating these challenges together, family therapy can provide additional support. Parents and caregivers may also benefit from individual therapy to help manage the stress that can accompany supporting a child through difficult times.",
        ],
        links: [
          { label: "Family Therapy", to: "/services/family-therapy" },
          { label: "Individual Therapy", to: "/services/individual-therapy" },
        ],
      },
      {
        heading: "What can contribute to emotional and behavioral challenges?",
        body: [
          "Growing up brings many changes, and it's natural for children and teens to experience periods of emotional or behavioral difficulty. It's common for parents to wonder, \"Is this just a phase?\" In reality, emotional and behavioral challenges are rarely caused by one single event or experience.",
          "Children's wellbeing is shaped by many factors, including their environment, relationships, developmental stage, and life experiences. Over time, these influences can affect how they think, feel, behave, and respond to everyday challenges.",
          "Common factors that can contribute include:",
        ],
        defs: [
          {
            term: "Academic pressure",
            detail:
              "Expectations at school, exams, or learning difficulties can contribute to stress and anxiety.",
          },
          {
            term: "Friendship and social challenges",
            detail:
              "Difficulties with peers, social anxiety, or feeling isolated can affect confidence and emotional wellbeing.",
          },
          {
            term: "Bullying or cyberbullying",
            detail: "Negative experiences at school or online can have a lasting emotional impact.",
          },
          {
            term: "Family conflict or change",
            detail:
              "Divorce, separation, blended families, or ongoing conflict at home can affect a child's sense of stability.",
          },
          {
            term: "Trauma",
            detail:
              "Past or recent traumatic experiences may continue to influence emotions, behavior, and relationships.",
          },
          {
            term: "Grief and loss",
            detail:
              "Losing a loved one or experiencing another significant loss can affect emotional wellbeing at any age.",
          },
          {
            term: "Mental health concerns",
            detail:
              "Anxiety, depression, ADHD, or other emotional challenges may affect daily life and development.",
          },
          {
            term: "Major life transitions",
            detail:
              "Moving home, changing schools, welcoming a new sibling, or other significant life changes can feel overwhelming.",
          },
          {
            term: "Medical or developmental conditions",
            detail:
              "Physical health or developmental differences can also influence emotional wellbeing.",
          },
        ],
        outro: [
          "At Havencrest Wellness & Counseling, we recognize that every child is unique. We take time to understand the experiences contributing to your child's challenges and work collaboratively with both young people and their families to develop practical strategies that support healthy emotional growth and resilience.",
          "If anxiety or depression is a primary concern, you can also learn more about how we support each:",
        ],
        links: [
          { label: "Anxiety", to: "/specialties/anxiety" },
          { label: "Depression", to: "/specialties/depression" },
        ],
      },
      {
        image: "Havencrest/Child_therapy_l92spo",
        heading: "How we approach child & teen therapy",
        body: [
          "Our goal is to help children and teens better understand their emotions, build confidence, strengthen resilience, and develop practical skills that support healthy emotional wellbeing both now and into adulthood.",
          "Because every child develops differently, therapy is tailored to their age, personality, strengths, and goals. Our therapists use evidence-based approaches, including:",
        ],
        list: [
          "Cognitive Behavioral Therapy (CBT)",
          "EMDR therapy",
          "Play-based techniques",
          "Trauma-informed counseling",
          "Strengths-based therapy",
          "Family involvement",
          "Age-appropriate emotional regulation strategies",
        ],
        links: [
          { label: "Cognitive Behavioral Therapy (CBT)", to: "/services/cbt" },
          { label: "EMDR Therapy", to: "/services/emdr-therapy" },
        ],
      },
      {
        image: "Havencrest/hannah-busing-Zyx1bK9mqmA-unsplash_f0an6i",
        heading: "What to expect during child & teen therapy",
        body: ["During your child's first session, your therapist will:"],
        list: [
          "Understand your concerns, your child's strengths, and your family's goals",
          "Work with you to develop personalized goals that support your child's emotional wellbeing, growth, and development",
          "Work collaboratively with you to create a therapeutic approach that reflects your child's unique strengths, needs, and goals",
          "Begin introducing age-appropriate coping strategies and practical skills that can be applied at home, at school, and in everyday life",
          "Regularly review your child's progress throughout therapy, adapting the approach as their needs and goals evolve",
        ],
        items: [
          {
            title: "Individual sessions",
            body: "A safe and supportive environment for your child to explore their thoughts, feelings, and experiences.",
          },
          {
            title: "Parent consultations",
            body: "Guidance, practical strategies, and ongoing support for what happens at home.",
          },
          {
            title: "Family sessions",
            body: "Where appropriate, sessions that strengthen communication, improve relationships, and work toward shared family goals.",
            link: { label: "Family Therapy", to: "/services/family-therapy" },
          },
        ],
        outro: [
          "As therapy progresses, your child will continue developing practical skills and healthy coping strategies that support emotional wellbeing, strengthen resilience, and encourage lasting positive growth.",
          "We also offer secure telehealth appointments for appropriate cases throughout Washington.",
        ],
        links: [{ label: "Telehealth Therapy", to: "/services/telehealth-therapy" }],
      },
      {
        heading: "Finding the right fit",
        body: [
          "Choosing a therapist for your child is an important decision, and finding the right fit can make all the difference. At Havencrest Wellness & Counseling, we're committed to providing compassionate, evidence-based care that's tailored to your child's unique needs and goals.",
          "Learn more about Havencrest's approach to care on our About Us page, or explore our team to find the therapist who best fits your child's needs.",
        ],
        links: [
          { label: "About us", to: "/about" },
          { label: "Meet the team", to: "/therapists" },
        ],
      },
      {
        heading: "Insurance & payment",
        body: [
          "Insurance coverage for child and teen therapy varies by provider and plan. Our team is happy to help you understand your benefits and discuss your options before your child's first appointment.",
        ],
        links: [{ label: "Insurance & fees", to: "/insurance-fees" }],
      },
    ],
    faqs: [
      {
        q: "How do I know if my child needs therapy?",
        a: "Children and teens experience challenges differently. If emotional or behavioral changes are persistent and affecting school, relationships, family life, or your child's overall wellbeing, therapy may help. An initial assessment can help determine the most appropriate support.",
      },
      {
        q: "Will I be involved in my child's therapy?",
        a: "Yes. Parents and caregivers play an important role in the therapeutic process. Your level of involvement will depend on your child's age, developmental stage, and clinical needs, while also respecting your child's privacy and therapeutic relationship. In some situations, family therapy may also be recommended to strengthen communication, improve relationships, and support shared family goals.",
        links: [{ label: "Family Therapy", to: "/services/family-therapy" }],
      },
      {
        q: "Do you accept insurance?",
        a: "Insurance coverage depends on your provider and plan. Our team is happy to help verify your benefits and explain your options before your child's first appointment.",
        links: [{ label: "Insurance & fees", to: "/insurance-fees" }],
      },
    ],
    closing: {
      heading: "Ready to take the next step?",
      body: "Whether your child is navigating anxiety, behavioral challenges, grief, trauma, or the everyday pressures of growing up, Havencrest Wellness & Counseling provides compassionate, evidence-based therapy tailored to their unique needs.",
    },
    related: [
      { label: "Family Therapy", to: "/services/family-therapy" },
      {
        label: "Child & Adolescent Mental Health",
        to: "/specialties/child-adolescent-mental-health",
      },
      { label: "Parenting Support", to: "/specialties/parenting-support" },
      { label: "Telehealth Therapy", to: "/services/telehealth-therapy" },
    ],
  },
  {
    slug: "cbt",
    art: "clipboard",
    image: "Havencrest/cbt-therapy-session-washington_y62lkk",
    title: "Cognitive Behavioral Therapy (CBT)",
    what: "A structured, evidence-based therapy that examines how thoughts, emotions, and behaviors influence one another.",
    when: "Anxiety, depression, panic, OCD, insomnia, stress, and unhelpful thought patterns.",
    expect:
      "Practical skills, between-session practice, and steady progress toward clearly defined goals.",

    headline: "Cognitive Behavioral Therapy (CBT)",
    lede: {
      heading: "Practical, evidence-based tools for lasting change",
      body: [
        "Cognitive Behavioral Therapy (CBT) is an evidence-based approach that helps you understand the connection between your thoughts, emotions, and behaviors. Together, these patterns influence how you experience the world, respond to challenges, and relate to yourself and others.",
        'Rather than encouraging you to simply "think positively," CBT helps you recognize unhelpful patterns of thinking and behavior, understand how they developed, and learn practical strategies to respond in ways that better support your wellbeing and goals.',
        "At Havencrest Wellness & Counseling, we use CBT as a collaborative and personalized approach, helping you build realistic, lasting skills that can be applied long after therapy has ended.",
      ],
      emphasis: "Schedule your first CBT appointment today.",
    },
    sections: [
      {
        heading: "Who can benefit from CBT?",
        body: [
          "CBT can support children, teens, and adults experiencing a wide range of emotional and mental health challenges. Whether you're looking to better understand yourself, develop healthier coping strategies, or change patterns that no longer serve you, CBT provides practical, evidence-based tools that support meaningful and lasting change.",
          "You may benefit from CBT if you're experiencing:",
        ],
        defs: [
          {
            term: "Anxiety",
            detail:
              "Excessive worry, fears, panic attacks, or feeling overwhelmed by everyday situations.",
          },
          {
            term: "Depression",
            detail:
              "Persistent sadness, low mood, loss of motivation, or negative thinking patterns that make it difficult to enjoy daily life.",
          },
          {
            term: "Stress and burnout",
            detail:
              "Feeling emotionally or physically overwhelmed by work, school, caregiving, or the demands of everyday life.",
          },
          {
            term: "Trauma-related symptoms",
            detail:
              "When past experiences continue to affect your emotions, relationships, or sense of safety.",
          },
          {
            term: "Low self-esteem and negative self-talk",
            detail:
              'Thoughts such as "I always fail," "Everyone is judging me," or "Things will never get better," alongside self-criticism or difficulty recognizing your strengths.',
          },
          {
            term: "Emotional regulation",
            detail:
              "Difficulty understanding, expressing, or managing emotions in healthy and constructive ways.",
          },
          {
            term: "Anger management challenges",
            detail:
              "Strong emotional reactions that feel difficult to manage, communicate, or respond to effectively.",
          },
          {
            term: "Relationship difficulties",
            detail:
              "Unhelpful thinking or communication patterns that are affecting your relationships with others.",
          },
          {
            term: "Life transitions",
            detail:
              "Adjusting to major life changes, uncertainty, new responsibilities, or significant changes in your personal or professional life.",
          },
        ],
        outro: [
          "Depending on your individual needs, CBT may be used alongside other evidence-based approaches:",
        ],
        links: [
          { label: "EMDR Therapy", to: "/services/emdr-therapy" },
          { label: "Dialectical Behavior Therapy (DBT)", to: "/services/dbt" },
          { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
        ],
      },
      {
        image: "Havencrest/christina-wocintechchat-com-m-vzfgh3RAPzM-unsplash_izmqhg",
        heading: "How we approach CBT",
        body: [
          "Our goal is to help you better understand the connection between your thoughts, emotions, and behaviors, so you can respond to life's challenges with greater awareness, confidence, and resilience.",
          "Because every person's experiences and goals are different, CBT is tailored to your unique needs. Together, we'll identify the patterns that may be contributing to your current challenges and develop practical strategies that support meaningful, lasting change.",
          "Depending on your goals, therapy may include approaches such as:",
        ],
        defs: [
          {
            term: "Recognizing unhelpful thinking patterns",
            detail: "And developing more balanced perspectives.",
          },
          {
            term: "Building practical coping strategies",
            detail: "For managing anxiety, stress, and difficult emotions.",
          },
          {
            term: "Developing healthier behavioral patterns",
            detail: "That support your emotional wellbeing.",
          },
          {
            term: "Strengthening problem-solving and decision-making skills",
            detail: "To navigate everyday challenges with greater confidence.",
          },
          {
            term: "Gradually reducing fear and avoidance",
            detail: "Where appropriate, through evidence-based exposure techniques.",
          },
        ],
        outro: [
          "Our focus isn't simply to change the way you think — it's to help you develop practical skills and healthier patterns that continue supporting your wellbeing long after therapy has ended. CBT may also complement other areas of care:",
        ],
        links: [
          { label: "Anxiety", to: "/specialties/anxiety" },
          { label: "ADHD", to: "/specialties/adhd" },
        ],
      },
      {
        heading: "What to expect during CBT",
        body: ["During your first session, your therapist will:"],
        list: [
          "Take time to understand your concerns, experiences, strengths, and goals",
          "Work collaboratively with you to develop personalized goals that reflect what you hope to achieve through therapy",
          "Explore the connection between your thoughts, emotions, and behaviors, and how these patterns may be influencing your current challenges",
          "Begin identifying practical strategies and coping skills that can be applied in your everyday life",
          "Regularly review your progress together, adapting your therapeutic approach as your needs and goals evolve",
        ],
        checks: [
          "Develop greater awareness of unhelpful thinking and behavioral patterns",
          "Practice practical coping strategies and emotional regulation skills",
          "Apply new skills between sessions to strengthen confidence, resilience, and emotional wellbeing",
          "Continue building healthier patterns that support lasting, meaningful change",
        ],
        outro: [
          "One thing that sets CBT apart is the opportunity to practice what you learn outside of therapy. Between sessions, your therapist may suggest simple exercises or strategies to help you apply new skills in everyday situations, supporting lasting growth and progress.",
          "If meeting in person isn't convenient, we also offer secure telehealth appointments throughout Washington.",
        ],
        links: [{ label: "Telehealth Therapy", to: "/services/telehealth-therapy" }],
      },
      {
        heading: "Finding the right fit",
        body: [
          "Choosing a therapist is an important decision, and finding the right fit can make all the difference. At Havencrest Wellness & Counseling, we're committed to providing compassionate, evidence-based care that's tailored to your unique needs and goals.",
          "Learn more about Havencrest's approach to care on our About Us page, or explore our team to find the therapist who best fits your needs.",
        ],
        links: [
          { label: "About us", to: "/about" },
          { label: "Meet the team", to: "/therapists" },
        ],
      },
      {
        heading: "Insurance & payment",
        body: [
          "Insurance coverage for CBT varies by provider and plan. Our team is happy to help you understand your benefits, verify your coverage, and discuss your options before your first appointment.",
        ],
        links: [{ label: "Insurance & fees", to: "/insurance-fees" }],
      },
    ],
    faqs: [
      {
        q: "What is CBT used for?",
        a: "CBT can support a wide range of emotional and mental health challenges, including anxiety, depression, stress, trauma-related symptoms, low self-esteem, and difficulties managing emotions. It helps people better understand the connection between their thoughts, emotions, and behaviors while developing practical skills to navigate life's challenges with greater confidence.",
        links: [
          { label: "Anxiety", to: "/specialties/anxiety" },
          { label: "Depression", to: "/specialties/depression" },
          { label: "Individual Therapy", to: "/services/individual-therapy" },
        ],
      },
      {
        q: "Is CBT better than other types of therapy?",
        a: "There isn't one therapy approach that's right for everyone. CBT is one of the most well-researched and widely used evidence-based therapies, but the most effective approach depends on your unique experiences, goals, and needs. Your therapist will work collaboratively with you to determine whether CBT, or a combination of therapeutic approaches, is the best fit for your care.",
        links: [
          { label: "Dialectical Behavior Therapy (DBT)", to: "/services/dbt" },
          { label: "EMDR Therapy", to: "/services/emdr-therapy" },
        ],
      },
      {
        q: "How does CBT differ from traditional talk therapy?",
        a: "While all therapy provides a space to explore your experiences and emotions, CBT takes a more structured and goal-oriented approach. Together with your therapist, you'll identify patterns in your thoughts, emotions, and behaviors, develop practical coping strategies, and apply these skills in everyday life to create meaningful, lasting change.",
      },
    ],
    closing: {
      heading: "Ready to take the next step?",
      body: "Whether you're looking to manage anxiety, overcome unhelpful thought patterns, improve emotional wellbeing, or build healthier coping strategies, Havencrest Wellness & Counseling provides compassionate, evidence-based CBT tailored to your unique needs.",
    },
    related: [
      { label: "Dialectical Behavior Therapy (DBT)", to: "/services/dbt" },
      { label: "EMDR Therapy", to: "/services/emdr-therapy" },
      { label: "Anxiety", to: "/specialties/anxiety" },
      { label: "Depression", to: "/specialties/depression" },
    ],
  },
  {
    slug: "dbt",
    art: "chat",
    image: "Havencrest/dbt-therapy-session-washington_c2fyld",
    title: "Dialectical Behavior Therapy (DBT)",
    what: "A skills-based therapy for managing intense emotions and building healthier, steadier relationships.",
    when: "Emotional overwhelm, impulsivity, self-harm, mood instability, and relationship difficulties.",
    expect:
      "Skills in mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness, practiced between sessions.",

    headline: "Dialectical Behavior Therapy (DBT)",
    lede: {
      heading: "Skills for managing intense emotions",
      body: [
        "Dialectical Behavior Therapy (DBT) is an evidence-based therapy that helps people better understand and manage intense emotions while developing healthier ways of responding to life's challenges.",
        "Originally developed for individuals experiencing significant emotional dysregulation, DBT is now widely used to support people facing a range of emotional and mental health concerns. It combines practical skill-building with a compassionate, accepting approach, helping you recognize that it's possible to accept yourself as you are while working toward meaningful change.",
        "At Havencrest Wellness & Counseling, we use DBT to help you build greater emotional awareness, strengthen relationships, develop healthier coping strategies, and respond to difficult situations with greater confidence and resilience.",
      ],
      emphasis: "Schedule your first DBT appointment today.",
    },
    sections: [
      {
        heading: "Who can benefit from DBT?",
        body: [
          "DBT can support adults, teens, and young adults experiencing a range of emotional and mental health challenges. Whether your emotions often feel overwhelming, relationships feel difficult to navigate, or you're looking for healthier ways to cope with stress, DBT provides practical skills that can support lasting change.",
          "You may benefit from DBT if you're experiencing:",
        ],
        defs: [
          {
            term: "Intense emotions",
            detail: "Feeling overwhelmed by emotions that seem difficult to understand or manage.",
          },
          {
            term: "Emotional regulation challenges",
            detail:
              "Difficulty calming yourself after becoming upset, or responding to emotions in ways that feel helpful.",
          },
          {
            term: "Mood changes",
            detail:
              "Emotional highs and lows that affect your wellbeing, relationships, or daily life.",
          },
          {
            term: "Anxiety",
            detail:
              "Excessive worry, feeling on edge, or becoming overwhelmed by everyday situations.",
          },
          {
            term: "Depression",
            detail: "Persistent sadness, low mood, or feeling emotionally exhausted.",
          },
          {
            term: "Trauma and PTSD",
            detail:
              "When past experiences continue to affect your emotions, relationships, sense of safety, or daily life.",
          },
          {
            term: "Relationship difficulties",
            detail:
              "Frequent conflict, difficulty setting healthy boundaries, or challenges maintaining healthy relationships.",
          },
          {
            term: "Impulsive or self-destructive behaviors",
            detail:
              "Acting in ways that feel difficult to control during times of emotional distress, that don't reflect your long-term goals, or that may place your wellbeing at risk.",
          },
          {
            term: "Low self-esteem",
            detail:
              "Feeling self-critical, struggling with self-worth, or finding it difficult to recognize your strengths.",
          },
          {
            term: "Difficulty coping with distress",
            detail:
              "Feeling overwhelmed during difficult situations, struggling to manage uncertainty, or finding it difficult to cope during times of crisis.",
          },
        ],
        outro: [
          "Your care is tailored to your unique experiences, needs, and goals. You may also find support through:",
        ],
        links: [
          { label: "Individual Therapy", to: "/services/individual-therapy" },
          { label: "EMDR Therapy", to: "/services/emdr-therapy" },
          { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
        ],
      },
      {
        image: "Havencrest/hannah-busing-Zyx1bK9mqmA-unsplash_f0an6i",
        heading: "How we approach DBT",
        body: [
          "Our goal is to help you better understand your emotions, strengthen your relationships, and develop practical skills that help you respond to life's challenges with greater confidence and balance.",
          "Because every person's experiences and goals are different, therapy is tailored to your individual needs. Depending on your goals, DBT may include:",
        ],
        defs: [
          {
            term: "Developing mindfulness skills",
            detail:
              "To become more aware of your thoughts, emotions, and experiences without judgment.",
          },
          {
            term: "Building distress tolerance strategies",
            detail: "To navigate difficult situations without making them harder.",
          },
          {
            term: "Strengthening emotional regulation skills",
            detail: "To better understand, manage, and respond to intense emotions.",
          },
          {
            term: "Improving interpersonal effectiveness",
            detail:
              "To communicate more confidently, establish healthy boundaries, and strengthen relationships.",
          },
        ],
        outro: [
          "Our focus isn't simply to help you cope with difficult emotions — it's to help you build practical skills that support healthier relationships, greater resilience, and lasting emotional wellbeing. DBT may also complement other areas of care:",
        ],
        links: [
          { label: "Anxiety", to: "/specialties/anxiety" },
          { label: "Depression", to: "/specialties/depression" },
        ],
      },
      {
        heading: "What to expect during DBT",
        body: ["During your first session, your therapist will:"],
        list: [
          "Take time to understand your experiences, current challenges, strengths, and goals",
          "Work collaboratively with you to identify the areas you'd like to improve and develop personalized goals",
          "Begin introducing practical DBT skills that support emotional regulation, healthier relationships, and coping with life's challenges",
          "Encourage you to practice new skills between sessions, helping you apply what you've learned in everyday life",
          "Regularly review your progress together, adapting your therapeutic approach as your needs and goals evolve",
          "Build your confidence in managing difficult emotions and navigating life's challenges with greater resilience",
        ],
        outro: [
          "As therapy progresses, you'll continue developing practical skills that support emotional wellbeing, strengthen relationships, and create lasting, meaningful change.",
          "If meeting in person isn't convenient, we also offer secure telehealth appointments throughout Washington.",
        ],
        links: [{ label: "Telehealth Therapy", to: "/services/telehealth-therapy" }],
      },
      {
        heading: "Finding the right fit",
        body: [
          "Choosing a therapist is an important decision, and finding the right fit can make all the difference. At Havencrest Wellness & Counseling, we're committed to providing compassionate, evidence-based care that's tailored to your unique needs and goals.",
          "Learn more about Havencrest's approach to care on our About Us page, or explore our team to find the therapist who best fits your needs.",
        ],
        links: [
          { label: "About us", to: "/about" },
          { label: "Meet the team", to: "/therapists" },
        ],
      },
      {
        heading: "Insurance & payment",
        body: [
          "Insurance coverage for DBT varies by provider and plan. Our team is happy to help you understand your benefits, verify your coverage, and discuss your options before your first appointment.",
        ],
        links: [{ label: "Insurance & fees", to: "/insurance-fees" }],
      },
    ],
    faqs: [
      {
        q: "How is DBT different from CBT?",
        a: "While both CBT and DBT are evidence-based therapies, CBT focuses primarily on understanding and changing unhelpful thoughts and behaviors. DBT builds on this foundation by teaching practical skills that help people regulate emotions, tolerate distress, strengthen relationships, and become more present in everyday life.",
        links: [
          { label: "Cognitive Behavioral Therapy (CBT)", to: "/services/cbt" },
          { label: "Individual Therapy", to: "/services/individual-therapy" },
        ],
      },
      {
        q: "Is DBT the right therapy for me?",
        a: "There isn't one therapy approach that's right for everyone. DBT is an evidence-based therapy that can be highly effective for people who experience intense emotions or difficulty regulating them. Your therapist will work collaboratively with you to determine whether DBT, or a combination of therapeutic approaches, is the best fit for your needs and goals.",
      },
      {
        q: "Is DBT only for borderline personality disorder?",
        a: "No. Although DBT was originally developed for borderline personality disorder, it is now widely used to treat anxiety, depression, PTSD, emotional dysregulation, eating disorders, and other mental health concerns.",
        links: [
          { label: "Anxiety", to: "/specialties/anxiety" },
          { label: "Depression", to: "/specialties/depression" },
          { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
        ],
      },
    ],
    closing: {
      heading: "Ready to take the next step?",
      body: "Whether you're navigating intense emotions, anxiety, relationship challenges, or emotional overwhelm, Havencrest Wellness & Counseling provides compassionate, evidence-based DBT tailored to your unique needs.",
    },
    related: [
      { label: "Cognitive Behavioral Therapy (CBT)", to: "/services/cbt" },
      { label: "EMDR Therapy", to: "/services/emdr-therapy" },
      { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
      { label: "Telehealth Therapy", to: "/services/telehealth-therapy" },
    ],
  },
  {
    slug: "emdr-therapy",
    art: "shield",
    image: "Havencrest/emdr-therapy-session-seattle-washington_a9mssq",
    title: "EMDR Therapy",
    what: "An evidence-based therapy that helps the brain reprocess distressing memories so they carry less emotional weight.",
    when: "PTSD, childhood trauma, abuse, accidents, medical trauma, phobias, and distressing memories.",
    expect:
      "Careful preparation, structured reprocessing with bilateral stimulation, and progress at a pace that feels safe.",

    headline: "EMDR Therapy",
    lede: {
      heading: "Processing difficult experiences at a pace that feels safe",
      body: [
        "Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based therapy that helps people process traumatic or distressing experiences that continue to affect their emotional wellbeing, relationships, and daily life.",
        "When difficult experiences remain unprocessed, they can leave people feeling stuck in patterns of anxiety, fear, emotional distress, or negative beliefs about themselves. EMDR helps the brain reprocess these experiences so they become less emotionally overwhelming, allowing you to move forward with greater confidence and resilience.",
        "Unlike traditional talk therapy, EMDR doesn't require you to repeatedly relive difficult experiences. Instead, your therapist guides you through a structured process using bilateral stimulation — such as guided eye movements, tapping, or alternating sounds — while ensuring you feel safe, supported, and in control throughout therapy.",
      ],
      emphasis: "Schedule your first EMDR therapy appointment today.",
    },
    sections: [
      {
        heading: "Who can benefit from EMDR therapy?",
        body: [
          "EMDR can support adults, teens, and young adults who are struggling with the effects of trauma or other distressing life experiences. Whether the experience happened recently or many years ago, therapy can help reduce the emotional impact it continues to have on your life.",
          "You may benefit from EMDR therapy if you're experiencing:",
        ],
        defs: [
          {
            term: "Trauma and PTSD",
            detail:
              "When childhood trauma, military service, abuse, accidents, or other distressing experiences continue to affect your emotions, relationships, sense of safety, or daily life.",
          },
          {
            term: "Childhood trauma",
            detail:
              "Experiences from childhood that continue to influence your wellbeing, relationships, or self-belief.",
          },
          {
            term: "Physical, emotional, or sexual abuse",
            detail: "Healing from experiences that continue to cause emotional distress.",
          },
          {
            term: "Accidents or medical trauma",
            detail:
              "Distressing experiences related to car accidents, medical procedures, or serious illness.",
          },
          {
            term: "Grief and traumatic loss",
            detail:
              "When the loss of a loved one or another significant event feels difficult to process.",
          },
          {
            term: "Anxiety and panic attacks",
            detail:
              "Persistent worry, panic, or feeling constantly on alert following distressing experiences.",
          },
          { term: "Phobias", detail: "Intense fears that interfere with daily life." },
          {
            term: "Low self-esteem related to past experiences",
            detail:
              "Negative beliefs about yourself that developed following difficult or traumatic events.",
          },
          {
            term: "Distressing memories",
            detail:
              "Intrusive memories, nightmares, flashbacks, feeling constantly on alert, feeling stuck after a traumatic experience, or strong emotional reactions to reminders of the past.",
          },
        ],
        outro: [
          "If you're unsure whether EMDR is right for you, our trauma-informed and individual therapy services can help determine the best treatment approach.",
        ],
        links: [
          { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
          { label: "Individual Therapy", to: "/services/individual-therapy" },
        ],
      },
      {
        image: "Havencrest/susan-wilkinson-EDJKEXFbzHA-unsplash_xridkb",
        heading: "How we approach EMDR therapy",
        body: [
          "Our goal is to help you safely process distressing experiences, reduce the emotional impact they continue to have on your life, and develop a greater sense of confidence, resilience, and emotional wellbeing.",
          "Because every person's experiences and goals are different, therapy is tailored to your individual needs and readiness. Throughout the process, your therapist will work at a pace that feels safe and appropriate for you.",
          "Depending on your needs, therapy may include:",
        ],
        defs: [
          {
            term: "Understanding your experiences",
            detail:
              "Together, we'll explore your concerns, experiences, strengths, and goals to develop a personalized approach that reflects your unique needs.",
          },
          {
            term: "Building coping skills",
            detail:
              "Before processing distressing memories, you'll learn grounding techniques and emotional regulation strategies to help you feel safe, supported, and prepared throughout therapy.",
          },
          {
            term: "Processing distressing memories",
            detail:
              "Using bilateral stimulation, your therapist will guide you through a structured process that helps your brain safely reprocess difficult memories, reducing their emotional intensity over time.",
          },
          {
            term: "Strengthening healthier beliefs",
            detail:
              "As therapy progresses, you'll begin replacing unhelpful beliefs about yourself with more balanced, compassionate, and adaptive perspectives.",
          },
          {
            term: "Reviewing your progress",
            detail:
              "Throughout therapy, you'll regularly review your progress together, ensuring you're moving at a pace that feels right for you while adapting your approach as your needs and goals evolve.",
          },
        ],
        outro: [
          "Our focus isn't to erase difficult memories, but to help you process them in a way that allows them to become part of your story without continuing to define your present.",
          "If anxiety or depression are part of your experiences, you may also find support through:",
        ],
        links: [
          { label: "Anxiety", to: "/specialties/anxiety" },
          { label: "Depression", to: "/specialties/depression" },
        ],
      },
      {
        heading: "What to expect during EMDR therapy",
        body: ["During your first session, your therapist will:"],
        list: [
          "Take time to understand your experiences, current challenges, strengths, and goals",
          "Work collaboratively with you to develop personalized goals that reflect what you hope to achieve through therapy",
          "Help you build trust and confidence in the therapeutic process, moving at a pace that feels safe and appropriate for you",
          "Begin introducing grounding techniques and practical coping strategies to support you throughout therapy",
          "Regularly review your progress together, adapting your therapeutic approach as your needs and goals evolve",
        ],
        checks: [
          "Develop trust with your therapist",
          "Learn practical coping strategies",
          "Process distressing memories gradually and safely",
          "Reduce the emotional impact of distressing experiences",
          "Strengthen emotional regulation",
          "Build confidence and resilience",
        ],
        outro: [
          "As therapy progresses, you'll work toward processing distressing experiences at a pace that feels right for you, while continuing to build practical strategies that support emotional wellbeing, resilience, and lasting healing.",
          "If meeting in person isn't convenient, we also offer secure telehealth appointments throughout Washington.",
        ],
        links: [{ label: "Telehealth Therapy", to: "/services/telehealth-therapy" }],
      },
      {
        heading: "Finding the right fit",
        body: [
          "Choosing a therapist is an important decision, and finding the right fit can make all the difference. At Havencrest Wellness & Counseling, we're committed to providing compassionate, evidence-based care that's tailored to your unique needs and goals.",
          "Learn more about Havencrest's approach to care on our About Us page, or explore our team to find the therapist who best fits your needs.",
        ],
        links: [
          { label: "About us", to: "/about" },
          { label: "Meet the team", to: "/therapists" },
        ],
      },
      {
        heading: "Insurance & payment",
        body: [
          "Insurance coverage for EMDR therapy varies by provider and plan. Our team is happy to help you understand your benefits, verify your coverage, and discuss your options before your first appointment.",
        ],
        links: [{ label: "Insurance & fees", to: "/insurance-fees" }],
      },
    ],
    faqs: [
      {
        q: "Is EMDR therapy evidence-based?",
        a: "Yes. EMDR is an evidence-based therapy that has been extensively researched and is recognized as an effective treatment for trauma and PTSD. It is also used to support people experiencing a range of trauma-related emotional challenges.",
      },
      {
        q: "Do I have to talk about every detail of my trauma?",
        a: "No. EMDR doesn't require you to describe every detail of a traumatic experience. Your therapist will work with you at a pace that feels safe and supportive, helping you process difficult memories without repeatedly reliving them.",
        links: [
          { label: "Individual Therapy", to: "/services/individual-therapy" },
          { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
        ],
      },
      {
        q: "How many EMDR sessions will I need?",
        a: "The number of sessions varies depending on your history, symptoms, and treatment goals. Some clients experience meaningful improvement within a relatively short period, while others benefit from longer-term therapy.",
      },
    ],
    closing: {
      heading: "Ready to take the next step?",
      body: "Whether you're healing from trauma, navigating PTSD, processing grief, or working through another distressing life experience, Havencrest Wellness & Counseling provides compassionate, evidence-based EMDR tailored to your unique needs.",
    },
    related: [
      { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
      { label: "Individual Therapy", to: "/services/individual-therapy" },
      { label: "Cognitive Behavioral Therapy (CBT)", to: "/services/cbt" },
      { label: "Telehealth Therapy", to: "/services/telehealth-therapy" },
    ],
  },
  {
    slug: "medication-management",
    art: "pulse",
    image: "Havencrest/Medication_Management_js0hjb",
    title: "Medication Management Support & Referrals",
    what: "Havencrest doesn't prescribe medication. We help you explore whether medication may be part of your care and connect you with trusted psychiatric providers.",
    when: "Depression, anxiety, ADHD, trauma and PTSD, mood changes, or symptoms that are affecting daily life.",
    expect:
      "A conversation about your options, referral to a qualified prescriber when appropriate, and coordinated care with your consent.",

    headline: "Medication Management Support & Referrals",
    lede: {
      heading: "Coordinated care and trusted psychiatric referrals",
      body: [
        "Medication management is a service provided by qualified medical professionals, such as psychiatrists and psychiatric nurse practitioners, who are licensed to assess, prescribe, and monitor medications used to support mental health. A medication evaluation helps determine whether medication may be an appropriate part of your care based on your symptoms, experiences, and overall wellbeing.",
        "At Havencrest Wellness & Counseling, we believe mental health care is not one-size-fits-all. While we don't currently provide medication management services directly, we can help connect you with trusted psychiatric providers who offer medication evaluations and ongoing medication support when appropriate.",
        "For some people, therapy provides the tools and support they need to manage their mental health. For others, a combination of therapy and medication may be a helpful part of a broader treatment plan. When appropriate and with your consent, our therapists can work collaboratively with your prescribing provider to help ensure your care remains coordinated and aligned with your goals.",
      ],
      emphasis:
        "Contact Havencrest today to learn more about therapy options and medication support.",
    },
    sections: [
      {
        heading: "Who may benefit from medication support?",
        body: ["Medication support may be appropriate if you're experiencing:"],
        defs: [
          {
            term: "Depression",
            detail:
              "Persistent low mood, loss of interest, or symptoms that continue to affect daily life.",
          },
          {
            term: "Anxiety",
            detail: "Excessive worry, panic, or anxiety that feels difficult to manage.",
          },
          {
            term: "ADHD",
            detail:
              "Difficulties with attention, focus, organization, or impulsivity that affect everyday functioning.",
          },
          {
            term: "Trauma and PTSD",
            detail: "Ongoing symptoms following traumatic or distressing experiences.",
          },
          {
            term: "Mood changes",
            detail: "Emotional highs and lows that are affecting your wellbeing or relationships.",
          },
          {
            term: "Mental health symptoms affecting daily life",
            detail:
              "When emotional or psychological challenges are making it difficult to work, study, maintain relationships, or care for yourself.",
          },
          {
            term: "Sleep concerns related to mental health",
            detail:
              "Difficulty falling asleep, staying asleep, or getting restful sleep when emotional or mental health challenges are contributing to disrupted sleep.",
          },
        ],
        outro: [
          "If you are unsure whether medication support is right for you, our therapists can help you explore your concerns and discuss appropriate next steps. You can also learn more about the areas we support:",
        ],
        links: [
          { label: "Depression", to: "/specialties/depression" },
          { label: "Anxiety", to: "/specialties/anxiety" },
          { label: "ADHD", to: "/specialties/adhd" },
          { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
          { label: "Individual Therapy", to: "/services/individual-therapy" },
        ],
      },
      {
        image: "Havencrest/annie-spratt-H582qBzGmHQ-unsplash_bhd7hd",
        heading: "How our referral process works",
        body: [
          "If medication support may be a helpful part of your care, we'll work with you to explore your options and connect you with appropriate psychiatric support when needed. The process may include:",
        ],
        items: [
          {
            title: "1. Initial therapy assessment",
            body: "Your therapist learns about your concerns, symptoms, history, and goals.",
          },
          {
            title: "2. Discuss treatment options",
            body: "Together, you can explore whether additional support, including a medication evaluation, may be appropriate.",
          },
          {
            title: "3. Referral coordination",
            body: "When needed, we can help connect you with qualified psychiatric providers in your area.",
          },
          {
            title: "4. Ongoing collaboration",
            body: "With appropriate consent, your healthcare providers can coordinate care to support your overall treatment goals.",
          },
        ],
        outro: [
          "If meeting in person isn't convenient, we also offer secure telehealth appointments throughout Washington.",
        ],
        links: [{ label: "Telehealth Therapy", to: "/services/telehealth-therapy" }],
      },
      {
        heading: "Finding the right fit",
        body: [
          "Choosing a therapist is an important decision, and finding the right fit can make all the difference. At Havencrest Wellness & Counseling, we're committed to providing compassionate, evidence-based care that's tailored to your unique needs and goals.",
          "Learn more about Havencrest's approach to care on our About Us page, or explore our team to find the therapist who best fits your needs.",
        ],
        links: [
          { label: "About us", to: "/about" },
          { label: "Meet the team", to: "/therapists" },
        ],
      },
      {
        heading: "Insurance & payment",
        body: [
          "Coverage for psychiatric medication evaluations and medication management varies depending on the prescribing provider, your insurance plan, and the type of service provided. Our team is happy to help you understand your therapy benefits, discuss your options, and answer any questions about coordinated care and referrals.",
        ],
        links: [{ label: "Insurance & fees", to: "/insurance-fees" }],
      },
    ],
    faqs: [
      {
        q: "How do I know if I should consider medication?",
        a: "There's no one-size-fits-all approach to mental health care. If your symptoms are significantly affecting your daily life, relationships, work, or overall wellbeing, your therapist can help you explore whether a medication evaluation may be appropriate.",
        links: [
          { label: "Individual Therapy", to: "/services/individual-therapy" },
          { label: "Anxiety", to: "/specialties/anxiety" },
          { label: "Depression", to: "/specialties/depression" },
        ],
      },
      {
        q: "Can I receive therapy and medication support at the same time?",
        a: "Yes. Many people benefit from a combination of therapy and medication. With your consent, we can collaborate with your prescribing provider to help ensure your care is coordinated and supports your overall treatment goals.",
      },
      {
        q: "Do I need medication if I have anxiety or depression?",
        a: "Not necessarily. Many people improve through therapy alone, while others benefit from additional support. A qualified healthcare provider can help determine what approach is best for your situation.",
      },
    ],
    closing: {
      heading: "Ready to take the next step?",
      body: "Whether you're exploring therapy, considering medication support, or looking for coordinated mental health care, Havencrest Wellness & Counseling is here to help you understand your options and find the support that's right for you.",
    },
    related: [
      { label: "Individual Therapy", to: "/services/individual-therapy" },
      { label: "Depression", to: "/specialties/depression" },
      { label: "Anxiety", to: "/specialties/anxiety" },
      { label: "Insurance & fees", to: "/insurance-fees" },
    ],
  },
  {
    slug: "telehealth-therapy",
    art: "monitor",
    image: "Havencrest/Telehealth_1_gcnhlj",
    title: "Telehealth Therapy",
    what: "Secure online therapy from wherever is convenient for you, anywhere in Washington.",
    when: "Busy schedules, travel, rural living, limited transportation, or a need for greater flexibility.",
    expect: "The same care as an in-person session, conducted over a secure video platform.",

    headline: "Telehealth Therapy",
    lede: {
      heading: "Compassionate care, wherever you are in Washington",
      body: [
        "Mental health support should be accessible to everyone. Whether you're balancing work, family life, school, health concerns, or a busy schedule, accessing compassionate care shouldn't feel out of reach.",
        "Telehealth therapy, also known as online therapy or virtual therapy, lets you meet with a licensed therapist through a secure video platform from anywhere in Washington. It offers the same compassionate, evidence-based care as in-person counseling, making it easier to access support without the need to travel.",
        "Whether you're at home, in your office, or another private space, telehealth allows you to receive support for anxiety, depression, trauma, relationship challenges, life transitions, and more — wherever you are in Washington.",
      ],
      emphasis: "Schedule your first telehealth therapy appointment today.",
    },
    sections: [
      {
        heading: "Who can benefit from telehealth therapy?",
        body: [
          "Telehealth therapy can support children, teens, adults, couples, and families seeking flexible access to mental health care. Whether you're managing a busy schedule, live far from mental health providers, or simply prefer the comfort and privacy of your own space, online therapy offers a flexible and convenient way to receive ongoing support.",
          "You may benefit from telehealth therapy if you:",
        ],
        defs: [
          {
            term: "Have a busy work, school, or family schedule",
            detail: "Finding it difficult to attend in-person appointments.",
          },
          {
            term: "Need flexible appointment options",
            detail: "Looking for therapy that fits around your commitments and daily routine.",
          },
          {
            term: "Live far from mental health providers",
            detail: "Accessing therapy without the need to travel long distances.",
          },
          {
            term: "Prefer the comfort and privacy of your own space",
            detail: "Feeling more at ease receiving therapy from home or another private location.",
          },
          {
            term: "Have transportation or mobility challenges",
            detail: "Removing barriers that make attending appointments more difficult.",
          },
          {
            term: "Travel frequently within Washington",
            detail: "Maintaining consistency in your care while away from home.",
          },
          {
            term: "Prefer virtual appointments",
            detail: "Choosing a flexible approach that better fits your lifestyle.",
          },
        ],
        outro: ["Telehealth can be used across many of our services and specialties, including:"],
        links: [
          { label: "Individual Therapy", to: "/services/individual-therapy" },
          { label: "Child & Teen Therapy", to: "/services/child-teen-therapy" },
          { label: "Couples Counseling", to: "/services/couples-counseling" },
          { label: "Family Therapy", to: "/services/family-therapy" },
          { label: "Anxiety", to: "/specialties/anxiety" },
          { label: "Depression", to: "/specialties/depression" },
          { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
        ],
      },
      {
        image: "Havencrest/virtual-therapy-barrie_wfzodz",
        heading: "How telehealth therapy works",
        body: ["Starting online therapy with Havencrest is simple."],
        items: [
          {
            title: "Step 1: Schedule your appointment",
            body: "Contact our team to find a therapist and appointment time that works for you.",
          },
          {
            title: "Step 2: Complete your intake forms",
            body: "Before your first session, you'll complete the necessary paperwork and provide information about your concerns, experiences, and therapy goals.",
          },
          {
            title: "Step 3: Meet your therapist online",
            body: "We'll send you secure instructions for joining your telehealth appointment. All you need is a private, comfortable space, a reliable internet connection, and a smartphone, tablet, or computer with a camera and microphone. If you have any questions about using the platform, our team is happy to help before your first appointment.",
          },
          {
            title: "Step 4: Begin your therapy journey",
            body: "During your first session, your therapist will take time to understand your experiences, current challenges, strengths, and goals. Together, you'll develop personalized goals and begin creating an approach tailored to your unique needs.",
          },
        ],
        outro: [
          "Our therapists use a range of evidence-based approaches, including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Acceptance and Commitment Therapy (ACT), trauma-informed counseling, and EMDR therapy, where appropriate.",
        ],
        links: [
          { label: "Cognitive Behavioral Therapy (CBT)", to: "/services/cbt" },
          { label: "Dialectical Behavior Therapy (DBT)", to: "/services/dbt" },
          { label: "EMDR Therapy", to: "/services/emdr-therapy" },
        ],
      },
      {
        heading: "Finding the right fit",
        body: [
          "Choosing a therapist is an important decision, and finding the right fit can make all the difference. At Havencrest Wellness & Counseling, we're committed to providing compassionate, evidence-based care that's tailored to your unique needs and goals.",
          "Learn more about Havencrest's approach to care on our About Us page, or explore our team to find the therapist who best fits your needs.",
        ],
        links: [
          { label: "About us", to: "/about" },
          { label: "Meet the team", to: "/therapists" },
        ],
      },
      {
        heading: "Insurance & payment",
        body: [
          "Insurance coverage for telehealth therapy varies by provider and plan. Our team is happy to help you understand your benefits, verify your coverage, and discuss your options before your first appointment.",
        ],
        links: [{ label: "Insurance & fees", to: "/insurance-fees" }],
      },
    ],
    faqs: [
      {
        q: "Is online therapy as effective as in-person therapy?",
        a: "Yes. Research has shown that telehealth therapy can be just as effective as in-person therapy for many mental health concerns. The most important factor is building a strong therapeutic relationship and receiving the approach that's right for your needs.",
      },
      {
        q: "Is telehealth therapy confidential?",
        a: "Yes. Havencrest uses secure, encrypted platforms designed to protect your privacy and confidentiality.",
      },
      {
        q: "Can I receive telehealth therapy anywhere in Washington?",
        a: "Yes. As long as you're physically located in Washington at the time of your appointment, you can access telehealth therapy with one of our licensed therapists.",
      },
      {
        q: "Can children, teens, couples, and families attend telehealth therapy?",
        a: "Yes. Depending on your needs and goals, many of our therapy services can be provided through secure telehealth appointments.",
        links: [
          { label: "Child & Teen Therapy", to: "/services/child-teen-therapy" },
          { label: "Couples Counseling", to: "/services/couples-counseling" },
          { label: "Family Therapy", to: "/services/family-therapy" },
        ],
      },
      {
        q: "Do you accept insurance?",
        a: "Insurance coverage varies by provider and plan. Our team is happy to help you understand your benefits and discuss your options before your first appointment.",
        links: [{ label: "Insurance & fees", to: "/insurance-fees" }],
      },
    ],
    closing: {
      heading: "Ready to take the next step?",
      body: "Whether you're looking for therapy that fits around your schedule, prefer the comfort of home, or want greater flexibility in how you access care, Havencrest Wellness & Counseling provides compassionate, evidence-based telehealth therapy throughout Washington.",
    },
    related: [
      { label: "Individual Therapy", to: "/services/individual-therapy" },
      { label: "Couples Counseling", to: "/services/couples-counseling" },
      { label: "Family Therapy", to: "/services/family-therapy" },
      { label: "Insurance & fees", to: "/insurance-fees" },
    ],
  },
  {
    slug: "culturally-responsive-therapy",
    art: "sun",
    image: "Havencrest/hannah-busing-Zyx1bK9mqmA-unsplash_f0an6i",
    title: "Culturally Responsive Therapy",
    what: "Therapy that recognizes how culture, faith, language, migration, and lived experience shape mental health.",
    when: "Cultural or family expectations, immigration and adjustment, discrimination, identity, and questions of belonging.",
    expect:
      "A therapist who takes your background seriously and adapts care to your values, community, and goals.",

    headline: "Culturally Responsive Therapy",
    lede: {
      heading: "Care that recognizes your whole story",
      body: [
        "Mental health is shaped by more than symptoms alone. Our culture, identity, relationships, values, beliefs, and lived experiences all influence how we understand ourselves and the world around us.",
        "Culturally responsive therapy recognizes these experiences as an important part of your mental health journey. Rather than taking a one-size-fits-all approach, therapy is tailored to your unique background, identity, strengths, and goals.",
        "At Havencrest Wellness & Counseling, we believe everyone deserves mental healthcare where they feel seen, respected, and understood.",
      ],
    },
    sections: [
      {
        heading: "Who can benefit from culturally responsive therapy?",
        body: ["Culturally responsive therapy may be especially helpful if you're experiencing:"],
        defs: [
          {
            term: "Feeling misunderstood",
            detail:
              "Feeling that your identity, culture, values, or experiences haven't been fully understood in previous healthcare or therapy settings.",
          },
          {
            term: "Cultural or family value challenges",
            detail:
              "Navigating differing cultural expectations, family responsibilities, traditions, or beliefs that are affecting your wellbeing or relationships.",
          },
          {
            term: "Disability and accessibility",
            detail:
              "Navigating the emotional impact of disability, accessibility needs, or environments that haven't fully supported you.",
          },
          {
            term: "Socioeconomic experiences",
            detail:
              "Exploring how financial pressures, access to resources, education, or other life circumstances have influenced your mental health and wellbeing.",
          },
          {
            term: "Identity-related challenges",
            detail:
              "Exploring questions around racial or ethnic identity, gender identity, sexual orientation, belonging, or understanding yourself.",
          },
          {
            term: "Generational or family experiences",
            detail:
              "Working through differences in values, expectations, communication styles, or experiences across generations.",
          },
          {
            term: "Stress related to belonging or acceptance",
            detail:
              "Feeling isolated, excluded, or struggling to feel accepted at home, work, school, or within your community.",
          },
          {
            term: "Trauma related to personal or community experiences",
            detail:
              "Processing experiences that have affected your sense of safety, identity, relationships, or emotional wellbeing.",
          },
          {
            term: "Immigration and cultural adjustment experiences",
            detail:
              "Adjusting to life between cultures, languages, communities, or balancing multiple cultural identities.",
          },
          {
            term: "Discrimination or systemic barriers",
            detail:
              "Processing experiences of prejudice, exclusion, discrimination, or barriers that continue to affect your emotional wellbeing.",
          },
          {
            term: "Wanting a therapist who understands your experiences",
            detail:
              "Looking for care that recognizes and respects your background, values, identity, and lived experiences.",
          },
        ],
        outro: [
          "Your therapist will work collaboratively with you to determine the approach that best reflects your experiences and goals. You may also find support through:",
        ],
        links: [
          { label: "Individual Therapy", to: "/services/individual-therapy" },
          { label: "Family Therapy", to: "/services/family-therapy" },
          { label: "Couples Counseling", to: "/services/couples-counseling" },
          { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
        ],
      },
      {
        image: "Havencrest/olivia-bauso-7NvnR9rK5uI-unsplash_bce3dw",
        heading: "How we approach culturally responsive therapy",
        body: [
          "Our goal is to provide therapy that recognizes your whole story while creating a safe, respectful, and collaborative space where you can explore your experiences and work toward meaningful change.",
          "Every person's experiences are unique, so therapy is tailored to your identity, values, strengths, and goals. Depending on your needs, therapy may include:",
        ],
        defs: [
          {
            term: "Understanding your story",
            detail:
              "Exploring the experiences, relationships, values, and identities that have shaped your mental health.",
          },
          {
            term: "Recognizing your strengths",
            detail:
              "Building on the resilience, resources, and support systems that already exist in your life.",
          },
          {
            term: "Honoring your values",
            detail:
              "Ensuring therapy reflects what matters most to you rather than applying a one-size-fits-all approach.",
          },
          {
            term: "Building trust and emotional safety",
            detail:
              "Creating a therapeutic relationship grounded in respect, collaboration, and understanding.",
          },
          {
            term: "Developing practical coping strategies",
            detail:
              "Building skills that support your emotional wellbeing while recognizing your unique experiences and goals.",
          },
        ],
        outro: [
          "Our culturally responsive approach is integrated across many of Havencrest's services and specialties, ensuring care is tailored to your unique experiences and goals:",
        ],
        links: [
          { label: "Individual Therapy", to: "/services/individual-therapy" },
          { label: "Child & Teen Therapy", to: "/services/child-teen-therapy" },
          { label: "Anxiety", to: "/specialties/anxiety" },
          { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
        ],
      },
      {
        image: "Havencrest/kaja-sariwating-UEEmt2sndSQ-unsplash_fdmnuh",
        heading: "What to expect during therapy",
        body: ["During your first session, your therapist will:"],
        list: [
          "Take time to understand your experiences, strengths, values, and goals",
          "Explore how your culture, identity, and life experiences influence your wellbeing",
          "Work collaboratively with you to develop personalized goals",
          "Create a safe and respectful space where you feel heard and understood",
          "Regularly review your progress together, adapting therapy as your needs and goals evolve",
        ],
        outro: [
          "As therapy progresses, you'll continue developing practical coping strategies, strengthening resilience, and building confidence in ways that reflect your unique experiences and values.",
          "If meeting in person isn't convenient, we also offer secure telehealth appointments throughout Washington.",
        ],
        links: [{ label: "Telehealth Therapy", to: "/services/telehealth-therapy" }],
      },
      {
        heading: "Finding the right fit",
        body: [
          "Choosing a therapist is an important decision, and finding the right fit can make all the difference. At Havencrest Wellness & Counseling, we're committed to providing compassionate, evidence-based care that's tailored to your unique needs and goals.",
          "Learn more about Havencrest's approach to care on our About Us page, or explore our team to find the therapist who best fits your needs.",
        ],
        links: [
          { label: "About us", to: "/about" },
          { label: "Meet the team", to: "/therapists" },
        ],
      },
      {
        heading: "Insurance",
        body: [
          "Insurance coverage for therapy services varies by provider and plan. Our team is happy to help you understand your benefits, verify your coverage, and discuss your options before your first appointment.",
        ],
        links: [{ label: "Insurance & fees", to: "/insurance-fees" }],
      },
    ],
    faqs: [
      {
        q: "Why is cultural understanding important in therapy?",
        a: "Feeling understood and respected can strengthen the therapeutic relationship and help clients feel safer discussing personal experiences and challenges.",
        links: [{ label: "Individual Therapy", to: "/services/individual-therapy" }],
      },
      {
        q: "Do I need to share my cultural background?",
        a: "No. You only need to share what feels comfortable and relevant to you. Your therapist will create a safe, respectful space where you can explore your experiences at your own pace, while always respecting your boundaries.",
      },
      {
        q: "Can culturally responsive therapy help with trauma?",
        a: "Yes. Culturally responsive therapy recognizes that trauma does not exist in isolation. Your therapist will consider how your culture, identity, relationships, and lived experiences may influence your healing, providing care that is compassionate, respectful, and tailored to your unique needs.",
        links: [
          { label: "Trauma & PTSD", to: "/specialties/trauma-ptsd" },
          { label: "EMDR Therapy", to: "/services/emdr-therapy" },
        ],
      },
      {
        q: "Is culturally responsive therapy only for people from minority backgrounds?",
        a: "No. Culturally responsive therapy recognizes that everyone has a unique identity, background, values, and life experiences that influence their mental health. It aims to provide respectful, personalized care that considers the whole person.",
      },
      {
        q: "Can I access culturally responsive therapy through telehealth?",
        a: "Yes. Havencrest provides secure telehealth therapy throughout Washington.",
        links: [{ label: "Telehealth Therapy", to: "/services/telehealth-therapy" }],
      },
    ],
    closing: {
      heading: "Ready to take the next step?",
      body: "Whether you're navigating cultural expectations, exploring your identity, adjusting to life between cultures, or simply looking for care where you feel seen and understood, Havencrest Wellness & Counseling provides compassionate, culturally responsive therapy throughout Washington.",
    },
    related: [
      { label: "Cultural & Life Experiences", to: "/specialties/cultural-life-experiences" },
      { label: "Identity & Self-Discovery", to: "/specialties/identity-self-discovery" },
      { label: "Individual Therapy", to: "/services/individual-therapy" },
      { label: "Telehealth Therapy", to: "/services/telehealth-therapy" },
    ],
  },
];

export const findService = (slug) => services.find((s) => s.slug === slug);
