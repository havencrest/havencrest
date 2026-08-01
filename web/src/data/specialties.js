export const specialties = [
  {
    slug: "anxiety",
    title: "Anxiety",
    what: "Anxiety is more than occasional worry. It can affect your thoughts, emotions, body, and daily life.",
    recognize:
      "You may recognize this if you often feel overwhelmed, restless, on edge, struggle to relax, avoid situations, or experience racing thoughts or physical symptoms such as a fast heartbeat.",
    help: "Therapy can help you understand your anxiety, develop practical coping strategies, and regain confidence in everyday life.",
  },
  {
    slug: "depression",
    title: "Depression",
    what: "Depression is a persistent low mood that affects how you feel, think, and function.",
    recognize:
      "You may recognize this if you feel persistently sad, lose interest in things you once enjoyed, feel exhausted, struggle to concentrate, or experience changes in sleep or appetite.",
    help: "Therapy provides a supportive space to understand what you're experiencing and develop tools to help you move forward.",
  },
  {
    slug: "trauma-ptsd",
    title: "Trauma & PTSD",
    what: "Trauma can result from distressing or overwhelming experiences and may continue to affect you long after the event.",
    recognize:
      "You may recognize this if you experience intrusive memories, nightmares, avoidance, emotional numbness, hypervigilance, or feel constantly on edge.",
    help: "Our clinicians provide evidence-based, trauma-informed care at a pace that feels safe for you.",
  },
  {
    slug: "adhd",
    title: "ADHD",
    what: "ADHD affects attention, organization, and self-regulation in ways that can impact work, school, and relationships.",
    recognize:
      "You may recognize this if you struggle with focus, forgetfulness, impulsivity, restlessness, or completing tasks.",
    help: "Therapy can help you better understand your strengths, build practical strategies, and improve daily functioning.",
  },
  {
    slug: "autism",
    title: "Autism",
    what: "Autism is a neurodevelopmental difference that influences communication, sensory experiences, and how people interact with the world.",
    recognize:
      "You may recognize this if you experience sensory sensitivities, prefer routines, find social situations exhausting, or have focused interests.",
    help: "We provide affirming support tailored to your individual strengths and needs.",
  },
  {
    slug: "stress-burnout",
    title: "Stress & Burnout",
    what: "Stress becomes burnout when ongoing demands leave you feeling emotionally, mentally, and physically exhausted.",
    recognize:
      "You may recognize this if you feel overwhelmed, irritable, detached, exhausted, or struggle to recover even after resting.",
    help: "Together, we'll identify what's contributing to your stress and develop healthier, sustainable ways to cope.",
  },
  {
    slug: "grief-loss",
    title: "Grief & Loss",
    what: "Grief is a natural response to loss and can affect every aspect of life.",
    recognize:
      "You may recognize this if you're experiencing sadness, numbness, anger, guilt, difficulty concentrating, or feel like life has changed in unexpected ways.",
    help: "Therapy offers compassionate support as you process your loss in your own way and at your own pace.",
  },
  {
    slug: "life-transitions",
    title: "Life Transitions",
    what: "Major life changes can bring uncertainty, even when they're positive.",
    recognize:
      "You may recognize this if you're feeling unsettled by changes in work, relationships, parenthood, relocation, or other life events.",
    help: "We're here to help you navigate change with clarity, resilience, and confidence.",
  },
  {
    slug: "relationship-challenges",
    title: "Relationship Challenges",
    what: "Relationship difficulties can affect communication, trust, and emotional connection.",
    recognize:
      "You may recognize this if you're experiencing frequent conflict, feeling disconnected, struggling with communication, or facing significant life changes together.",
    help: "Therapy can help strengthen understanding, improve communication, and support healthier relationships.",
  },
  {
    slug: "parenting-support",
    title: "Parenting Support",
    what: "Parenting comes with unique joys and challenges at every stage.",
    recognize:
      "You may recognize this if you're feeling overwhelmed, uncertain, experiencing conflict at home, or looking for strategies to support your child.",
    help: "Our clinicians work alongside parents to build confidence and strengthen family relationships.",
  },
  {
    slug: "child-adolescent-mental-health",
    title: "Child & Adolescent Mental Health",
    what: "Children and teens experience mental health challenges differently from adults.",
    recognize:
      "You may recognize this if your child shows changes in mood, behavior, friendships, school performance, or emotional regulation.",
    help: "We provide age-appropriate support while working collaboratively with families.",
  },
  {
    slug: "womens-mental-health",
    title: "Women's Mental Health",
    what: "Women's mental health may be influenced by life stages, relationships, hormones, and personal experiences.",
    recognize:
      "You may recognize this if you're experiencing emotional changes related to stress, pregnancy, postpartum, menopause, or other life events.",
    help: "Our clinicians provide personalized, compassionate care for every stage of life.",
  },
  {
    slug: "mens-mental-health",
    title: "Men's Mental Health",
    what: "Men often experience unique pressures that can make it difficult to seek support.",
    recognize:
      "You may recognize this if you're feeling stressed, withdrawn, irritable, overwhelmed, or struggling to express emotions.",
    help: "Therapy provides a confidential space to explore challenges and build healthier ways of coping.",
  },
  {
    slug: "identity-self-discovery",
    title: "Identity & Self-Discovery",
    what: "Exploring your identity is a personal journey that can involve growth, uncertainty, and change.",
    recognize:
      "You may recognize this if you're questioning who you are, your values, life direction, or sense of belonging.",
    help: "We're here to provide a supportive, non-judgmental space as you explore what matters most to you.",
  },
  {
    slug: "cultural-life-experiences",
    title: "Cultural & Life Experiences",
    what: "Culture, background, and lived experiences can shape mental health in meaningful ways.",
    recognize:
      "You may recognize this if you're navigating cultural expectations, migration, discrimination, or challenges balancing different parts of your identity.",
    help: "Our clinicians value your lived experience and provide culturally responsive care.",
  },
];

export const findSpecialty = (slug) => specialties.find((s) => s.slug === slug);
