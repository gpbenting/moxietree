export type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  iconClass: string; // svc-api | svc-integration | ...
  icon:
    | "api"
    | "integration"
    | "frontend"
    | "cloud"
    | "modernization"
    | "advisory";
};

export const services: Service[] = [
  {
    id: "api",
    title: "API & Microservices Development",
    description:
      "Spring Boot microservices, RESTful APIs with Swagger contracts, JPA/Hibernate persistence, and the operational scaffolding that keeps them healthy in production.",
    tags: ["Spring Boot", "JAX-RS", "Swagger"],
    iconClass: "svc-api",
    icon: "api",
  },
  {
    id: "integration",
    title: "Enterprise Integration",
    description:
      "Event-driven integration with Apache Kafka and Camel, IBM Integration Bus mediations, and message-broker work across IBM MQ, ActiveMQ, and Mule ESB.",
    tags: ["Kafka", "Camel", "IBM IIB", "Mule ESB"],
    iconClass: "svc-integration",
    icon: "integration",
  },
  {
    id: "frontend",
    title: "Front-end Engineering",
    description:
      "Production-grade React applications with TypeScript, ReactQuery and Redux state, Styled Components, and typed contracts against the backends we build.",
    tags: ["React", "TypeScript", "ReactQuery"],
    iconClass: "svc-frontend",
    icon: "frontend",
  },
  {
    id: "cloud",
    title: "Cloud & Container Platforms",
    description:
      "Workloads designed for AWS, Azure, and Red Hat OpenShift. Kubernetes-native deployments, Docker images, and CI/CD through Azure Pipelines or Jenkins.",
    tags: ["AWS EKS", "Azure", "OpenShift"],
    iconClass: "svc-cloud",
    icon: "cloud",
  },
  {
    id: "modernization",
    title: "Legacy Modernisation",
    description:
      "Strangle-and-replace migrations for monolithic Java estates. Replacing legacy APIs and point solutions with modern microservices — the same pattern we're running at BNZ today.",
    tags: ["Migration", "Strangler pattern"],
    iconClass: "svc-modernization",
    icon: "modernization",
  },
  {
    id: "advisory",
    title: "Technical Leadership & Advisory",
    description:
      "Technical lead & tech-advisor engagements. System design, solution architecture, code-review culture, team mentoring, and estimation support alongside BAs and architects.",
    tags: ["Tech lead", "Advisory", "Mentoring"],
    iconClass: "svc-advisory",
    icon: "advisory",
  },
];

export type Client = {
  initial: string;
  name: string;
  project: string;
  dates: string;
  tone: "accent" | "warning" | "blue" | "purple";
};

export const clients: Client[] = [
  {
    initial: "B",
    name: "Bank of New Zealand",
    project: "Enterprise Payments API",
    dates: "2024—26",
    tone: "accent",
  },
  {
    initial: "A",
    name: "ACC",
    project: "MyACC for Business",
    dates: "2021—24",
    tone: "warning",
  },
  {
    initial: "A",
    name: "ANZ Banking Group",
    project: "SwiSH core banking",
    dates: "2019—21",
    tone: "blue",
  },
  {
    initial: "I",
    name: "Inland Revenue (IR)",
    project: "via Solnet Solutions",
    dates: "2012—17",
    tone: "purple",
  },
  {
    initial: "M",
    name: "Ministry of Health",
    project: "Claims portal modernisation",
    dates: "2012—17",
    tone: "accent",
  },
];

export type CaseStudy = {
  client: string;
  dates: string;
  status: string;
  title: string;
  titleAccent: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  stats?: { value: string; unit?: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    client: "Bank of New Zealand",
    dates: "2024 — 2026",
    status: "Live engagement",
    titleAccent: "Enterprise Payments API",
    title: "— orchestrating payments across multiple ledgers.",
    summary:
      "Moxietree is embedded as technical lead on BNZ's Digital Modernization programme, designing and delivering the Enterprise Payments API — a microservices platform built to replace legacy point solutions with a single, modern payment orchestration capability. We own API specification, solution design, delivery planning, and code-review standards across the team.",
    tags: ["Java", "Spring Boot", "RESTful API", "Swagger", "Microservices"],
    featured: true,
    stats: [
      { value: "Tech", unit: "lead", label: "Role" },
      { value: "2", unit: "yrs", label: "Engagement" },
      { value: "Multi", unit: "ledger", label: "Orchestration" },
    ],
  },
  {
    client: "ACC",
    dates: "2021 — 2024",
    status: "In production",
    titleAccent: "MyACC for Business",
    title: "— levies & policies, fully online.",
    summary:
      "Full-stack delivery for ACC's digital platform enabling NZ business owners, self-employed, and tax agents to manage policies and levies online. Moxietree led technical direction across React UX/UI and Spring Boot APIs, with system design and peer-review ownership.",
    tags: ["React", "Spring Boot", "TypeScript", "PostgreSQL"],
  },
  {
    client: "ANZ",
    dates: "2019 — 2021",
    status: "Shipped",
    titleAccent: "SwiSH",
    title: "— core banking switch & settlement platform.",
    summary:
      "Moxietree consulted on one of ANZ's core banking platforms, responsible for routing ATM and EFTPOS transactions to downstream fraud and settlement systems. System design, development, production incident resolution, and technical guidance to the wider team.",
    tags: ["Java", "Spring", "Core Banking", "Integration"],
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We collaborate with your stakeholders and SMEs to gather requirements, shape the problem, and document the API specification and solution design before a line of code is written.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Detailed development plans, honest estimates, and a clear breakdown of delivery milestones. We work alongside business analysts and system architects to translate intent into scope.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Senior-led development with peer review as a first-class practice. Test coverage via JUnit, Mockito, and Karate. Every delivery is observably running in production, not a prototype.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Early-life production support is part of the engagement, not an afterthought. We stay embedded through stabilisation, then hand over to your team with documentation that outlives us.",
  },
];

export type Certification = {
  badge: string;
  tone: "aws" | "mulesoft" | "ibm" | "sun";
  title: string;
  issuer: string;
  date: string;
};

export const certifications: Certification[] = [
  {
    badge: "AWS",
    tone: "aws",
    title: "Certified Developer — Associate",
    issuer: "Amazon Web Services",
    date: "2020",
  },
  {
    badge: "AWS",
    tone: "aws",
    title: "Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2020",
  },
  {
    badge: "MS",
    tone: "mulesoft",
    title: "MuleSoft Integration & API",
    issuer: "MuleSoft",
    date: "2017",
  },
  {
    badge: "IBM",
    tone: "ibm",
    title: "IBM Integration Bus V10",
    issuer: "IBM",
    date: "2016",
  },
  {
    badge: "IBM",
    tone: "ibm",
    title: "WebSphere Process Server V7",
    issuer: "IBM",
    date: "2014",
  },
  {
    badge: "☀",
    tone: "sun",
    title: "Sun Certified Java SE 5.0",
    issuer: "Sun Microsystems",
    date: "2009",
  },
];

export const techStack = [
  "Java 17+",
  "Spring Boot",
  "React",
  "TypeScript",
  "RESTful & SOAP APIs",
  "Apache Kafka",
  "Apache Camel",
  "IBM Integration Bus",
  "Mule ESB",
  "JPA / Hibernate",
  "PostgreSQL · Oracle · DB2",
  "AWS · Azure",
  "Kubernetes · OpenShift · Docker",
  "Karate · JUnit · Mockito",
  "Maven · Gradle",
];

export const contact = {
  email: "gpbenting@gmail.com",
  phone: "+64 21 207 2947",
  phoneHref: "+64212072947",
  linkedin: "https://www.linkedin.com/in/gpbenting/",
  linkedinHandle: "/in/gpbenting",
};
