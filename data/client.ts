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
