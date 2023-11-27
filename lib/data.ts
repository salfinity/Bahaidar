import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import householdImg from "@/public/books/household.png";
import hopeImg from "@/public/books/hope.png";
import mirrorImg from "@/public/books/mirror.png";
import deflectionImg from "@/public/books/pointofdeflection.png";
import hiddenImg from "@/public/books/hidden-self.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Books",
    hash: "#books",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "IQRABIASHARA",
    description:
      "This marks a revolution in radio broadcasting with IQRA FM—an online radio platform offering news, live streams, and a unique e-commerce section facilitating connections for individuals and businesses.",
    tags: ["radio livestream", "news", "ecommerce", "ads"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const booksData = [
  {
    title: "Point of Deflection",
    description:
      "'The Point of Deflection' is a book that provides insight into understanding the reasons behind not only changes in behavior but also shifts in perception. For example, when asking a child about their future ambitions, they might enthusiastically mention professions that currently inspire them, like becoming a doctor or pilot. However, it's not uncommon that, a decade or so later, their response to the same question could vary significantly. The book explores the factors influencing such transformations over time.",
    imageUrl: deflectionImg,
  },
  {
    title: "The Hidden Self",
    description:
      "'The Hidden Self' is a profoundly impactful book teeming with potential and hope. It not only taps into the depths of people's emotions but also speaks to their misfortunes with a level of understanding that suggests an intimate knowledge of the lives they have traversed. Through its pages, readers find solace, encouragement, and a beacon of optimism that extends beyond the surface, delving into the intricacies of the human spirit. 'The Hidden Self' is not just a book; it is a source of inspiration that navigates the intricacies of the human experience, offering a profound connection to the hidden aspects of one's soul.",
    imageUrl: hiddenImg,
  },
  {
    title: "Mirror Reflection",
    description:
      "'I've read numerous books, but Dr. Mohamed Bahaidar's literary works stand out. For the first time, I encountered an author delivering information that surpasses the typical book. Each of his two earlier works was not only informative but also avoided regurgitating information.'",
    imageUrl: mirrorImg,
  },
  {
    title: "Sparkling Hope",
    description:
      "In the pages of 'Sparkling Hope,' the profound realization unfolds that life, despite its rugged truths, holds an intrinsic beauty. It serves as a boon for those capable of empathy, imparts wisdom to those open to learning, and extols the endeavors of those who diligently strive.",
    imageUrl: hopeImg,
  },
  {
    title: "a Household of Bliss",
    description:
      "'House of Bliss' is a book that tackles the profound challenges of our time — a world filled with misconceptions, seeking lasting solutions beyond quick fixes. In a society where homes are falling apart, the book addresses the need to transform houses into true sanctuaries. It explores the intricate dynamics of relationships, emphasizing the importance of understanding and satisfying one's spouse. 'A Household of Bliss' doesn't just offer solutions to immediate troubles but aims to restore the entire atmosphere, fostering bliss in our existence. It serves as a guide for those desperate to mend broken homes and individuals seeking lasting fulfillment.",
    imageUrl: householdImg,
  },
] as const;


export const skillsData = [
  "Leadership",
  "Strategic Management",
  "Research",
  "PostgreSQL",
  "Authorship",
  "Consultancy",
  "Award Recognition",
  "Team Collaboration",
  "Negotiation",
  "Strategic Communication",
  "Management",
  "Cross-Cultural Understanding",
  "Problem Solving",
  "Networking",
  "Global Engagement",
  "Media Engagement",
  "Motivational Speaking",
  "Counseling",
  
] as const;
