import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { LuGraduationCap } from "react-icons/lu";
import { GiPocketRadio } from "react-icons/gi";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import householdImg from "@/public/books/household.png";
import hopeImg from "@/public/books/hope.png";
import mirrorImg from "@/public/books/mirror.png";
import deflectionImg from "@/public/books/pointofdeflection.png";
import hiddenImg from "@/public/books/hidden-self.png";
import unpublishedImg from "@/public/books/unpublished.jpeg";

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
    title: "Doctor of Philosophy in Management",
    location: "University of New Castle (AIMS) Kuala Lumpur – Malaysia",
    description:
      "as i graduated i was serving as a manager at Savoy Real Estate & Gelato Divino in Mombasa from 2012 to 2016.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Acting manager",
    location: "Alshaya (Debenhams) Mall of Qatar (Doha - Qatar) ",
    description:
      "In charge of cosmetics department.Training & developing staff abilities.Overseeing stocks controller’s work and Initiating business growth.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2020",
  },
  {
    title: " Business Proprietor",
    location: "Dr.Bahaidar Consultancy Ltd Nairobi – Kenya.",
    description:
      "We provide case studies and practical solutions to assist sole proprietors and enterprises streamline operations and achieve thresholds of success.",
    icon: React.createElement(LiaBusinessTimeSolid),
    date: "2021 - present",
  },
  {
    title: " Chief Executive Officer",
    location: "IQRA FM, Nairobi – Kenya.",
    description:
      "Creation of enticing marketing strategies, clearing debts, and resolving management issues at IQRA FM as the CEO.",
    icon: React.createElement(GiPocketRadio),
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
  {
    title: "Millionaire’s Quest",
    description:
      "Becoming a millionaire involves understanding the essence of success and business. Is it tied to a person or a structured entity? Exploring the idea that a company is an extension of oneself, the question arises: What happens to it after you're gone? Alternatively, if we view a business as a structure, can changing its location alter its core concept? Ultimately, these considerations underscore the transformative power of a single idea—potentially the key to achieving millionaire status.",
    imageUrl: unpublishedImg,
  },
  {
    title: "The Anonymous Trek",
    description:
      "Navigating the unknown is a compelling journey—one of self-discovery amid confusion and emotional turmoil. Understanding our current position, we must assimilate into our surroundings and overcome internal conflicts to address external challenges. However, the path to serenity remains elusive, leaving us in a perpetual state of confusion. Amid the struggle to rise from the crowded bottom, the troubling question lingers: How long until we truly know ourselves and our purpose, especially by age 40?",
    imageUrl: unpublishedImg,
  },
  {
    title: "My Dash of Existence",
    description:
      "Life, fraught with challenges, lacks clear escape routes. Despite their complexity, problems fuel our existence, prompting solutions and imbuing life with meaning. While some offer solutions, others easily succumb to afflictions. The question persists: Why do people give up so easily? Regardless of wealth or status, everyone faces the twists of existence. Exhaustion may lead to surrender. Understanding roots, prioritizing, and breaking free from abuse is crucial. Life's struggles are real, but resilience lies in holding on, developing problem-solving skills, and fostering optimism—a vessel that guides us through life's stormy waters.",
    imageUrl: unpublishedImg,
  },
  {
    title: "The Living Silhouette",
    description:
      "A young orphan, once a shepherd struggling in a hostile environment, faced rejection from his nuclear family and community. Humiliated, he fled amid public pressure and propaganda. In response, he and his supporters endured a three-year boycott, suffering hunger and illness. Seeking peace, he traveled to escape ideological constraints. His rejection by his own people shattered his noble reputation and familial trust, once upheld by a strong guardian. The loss marked a turning point in his life.",
    imageUrl: unpublishedImg,
  },
  {
    title: "Trailing the Scent of Sex",
    description:
      "Encountering an enchanting woman, I, a 19-year-old virgin, experienced a surreal moment. Her unique beauty and spicy scent left me in awe. As things escalated, my feverish emotions ignited. The encounter unfolded into an intimate experience, marked by exploration and ecstasy. Overwhelmed, I succumbed to unconsciousness, a heady mix akin to opium.",
    imageUrl: unpublishedImg,
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
