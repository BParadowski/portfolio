import { StaticImageData } from "next/image";
// Audiophile
import AudiophileShowcase from "@/public/audiophile/audiophile-showcase.jpg";
import AudiophileCheckoutError from "@/public/audiophile/checkout-error.jpeg";
import Headphones from "@/public/audiophile/headphones.jpeg";
import Cart from "@/public/audiophile/cart.jpeg";
import AudiophileLessons from "@/public/audiophile/tailwind-shopify.jpeg";
// Primuz App
import PrimuzShowcase from "@/public/primuz/primuz-hero.jpeg";
import PrimuzAvailabiltiy from "@/public/primuz/availability-picking2.jpeg";
import PrimuzInformation from "@/public/primuz/information-flow.jpeg";
import PrimuzNotification from "@/public/primuz/primuz-notification.jpg";
import PrimuzCalendar from "@/public/primuz/google-calendar.png";
import PrimuzMotivation from "@/public/primuz/motivation-primuz.jpeg";
import PrimuzInstallation from "@/public/primuz/installation.jpeg";
import PrimuzCMS from "@/public/primuz/cms.jpeg";
// Designo
import DesignoShowcase from "@/public/designo/designo-showcase.jpeg";
import PolymorphicButton from "@/public/designo/polymorphic-button.jpeg";

export interface ProjectData {
  title: string;
  mainDescription: string;
  links: {
    type: "demo" | "github";
    url: string;
  }[];
  heroImage: StaticImageData;
  techstack: string[];
  details: { title: string; paragraphs: string[]; image: StaticImageData }[];
}

export const projectSlugs = ["audiophile", "primuz", "designo"] as const;

export type ProjectSlugs = (typeof projectSlugs)[number];

export const projectsData: {
  [K in ProjectSlugs]: ProjectData;
} = {
  audiophile: {
    title: "Audiophile",
    mainDescription: `Creating an e-commerce application seems to be a rite of passage for web developers. I decided to make mine about something close to me - sound. The website is based on a Figma design by Frontend Mentor<span class="align-super text-xs">TM</span>. It features a REST API, a cart with server state management and a complex order form with data validation on both the frontend and backend.`,
    links: [
      {
        type: "demo",
        url: "https://audiophile-ashy-rho.vercel.app",
      },
      { type: "github", url: "https://github.com/BParadowski/audiophile" },
    ],
    heroImage: AudiophileShowcase,
    techstack: [
      "TypeScript",
      "Next.js (pages router)",
      "Prisma ORM",
      "React Hook Form",
      "Tanstack Query (React Query)",
      "Zod",
      "SCSS modules",
    ],
    details: [
      {
        title: "Framework choice",
        paragraphs: [
          "I chose Next.js for this project because it provides SSR, which is key for search engine positioning and reaching customers. I also made use of its SSG capabilities - product and category (speakers, headphones, etc.) pages are generated at build time. Adding a new product is as easy as putting it in the database and revalidating these paths. Lastly, the monorepo architecture of Next.js allowed me to share types between the frontend and backend.",
        ],
        image: Headphones,
      },

      {
        title: "Server state",
        paragraphs: [
          "Since information about individual carts is useful for analytics (among other things), I decided to store it on the server. The client is connected to the cart by an ID in local storage.",
          "I implemented this functionality with React Query. It gave me the tools to handle loading states as well as optimistic updates, which ensure the cart works smoothly.",
        ],
        image: Cart,
      },
      {
        title: "Checkout form and data validation",
        paragraphs: [
          "I wanted the checkout form to provide users with descriptive error messages and validate data before sending it for further processing.",
          "For this job, I chose React Hook Form and Zod. Both have elegant APIs and integrate wonderfully with TypeScript. They're also widely used in the industry.",
        ],
        image: AudiophileCheckoutError,
      },
      {
        title: "Lessons learned",
        paragraphs: [
          "Working on this project taught me a lot about component-based architecture and responsive web design. It also showed me how managing CSS in a larger project can be a challenge.",
          "If I were to build a similar application again, I would consider using Tailwind for its gentle built-in design system. Using a CMS could also be beneficial. It would let the business manage their products without interacting with the database.",
        ],
        image: AudiophileLessons,
      },
    ],
  },
  primuz: {
    title: "Primuz App",
    mainDescription:
      "Well-renowned philharmonic orchestras and ensambles use IT systems to streamline their work. I developed something similar for my chamber orchestra. It's a PWA which helps us plan our concerts and rehearsals. Users can access information about projects, receive notifications about new ones, share if they're available for an event and download sheet music.",
    links: [{ type: "github", url: "https://github.com/BParadowski/primuz" }],
    heroImage: PrimuzShowcase,
    techstack: [
      "TypeScript",
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Google Calendar API",
      "OneSignal",
      "date-fns",
      "shadcn/ui (Radix UI)",
      "React DnD Kit",
    ],
    details: [
      {
        title: "Motivation",
        paragraphs: [
          "The idea for this application came to me when I noticed several problems with communication and planning within my orchestra. At the time, we used many services: Google Sheets, We-Transfer, e-mails, Google Calendar... Important information would end up scattered across several facebook group posts.",
          "I realised I could use my skills to bundle these services together and improve our workflow.",
        ],
        image: PrimuzMotivation,
      },
      {
        title: "Availability sharing",
        paragraphs: [
          "Orchestra members can signal if they're available for a given project. They can choose from 4 different status types and attach a message.",
          `It solved two problems of Google Sheets. We used to have the choice between checkmark and no checkmark - it offered no distinction between "I don't know yet" and "I'm unavailable". The other problem was UX on mobile devices - my collegues had problems getting Google Sheets to work on their phones.`,
        ],
        image: PrimuzAvailabiltiy,
      },
      {
        title: "Information flow",
        paragraphs: [
          "We can now access all information about an event on its page - two taps aways from phone's desktop. It's no longer divided into bits and pieces.",
        ],
        image: PrimuzInformation,
      },
      {
        title: "Notifications",
        paragraphs: [
          "App users can choose to receive notifications about new projects and important updates.",
          "Unfortunately, this functionality got crippled by Apple when they withdrew push notification support for PWAs. I also regret having used OneSignal. Even though the implementation was relatively simple, the node SDK turned out to be buggy (I ended up using fetch for API calls) and the documentation left much to be desired.",
        ],
        image: PrimuzNotification,
      },
      {
        title: "Google Calendar integration",
        paragraphs: [
          "In the past we used a Google Calendar as a part of our planning system. I implemented sync between it and Primuz App. Thanks to it, we still enjoy the convenience of all concerts appearing in our calendar apps and there is no additional organisational overhead (managing both app and calendar).",
        ],
        image: PrimuzCalendar,
      },
      {
        title: "Content management system",
        paragraphs: [
          "Members of the orchestra responsible for organisation have a CMS at their disposal. They can create and edit projects as well as add sheet music to the database.",
          "I'm especially pround of a component designed to build the exact structure of the orchestra. Our concertmaster can see the availability of all musicians, add them to sections and then sort them using drag and drop.",
        ],
        image: PrimuzCMS,
      },
      {
        title: "Lessons learned",
        paragraphs: [
          "I could write an essay about what I learned during the development of this project. Afterall, it's my first app actually used by people.",
          "What proved to be most valuable however, was my first contact with user feedback. Some features turned out to be high friction or less useful than I anticipated, others were missing.",
          "It gave me both motivation and new ideas for further tinkering with Primuz App.",
        ],
        image: PrimuzInstallation,
      },
    ],
  },
  designo: {
    title: "Designo",
    mainDescription:
      "This project is an exercise in RWD, based on a Figma design. It served me as a playground to explore three technologies: App router of Next.js, Tailwind and basics of E2E testing with Playwright. I ended up learning surprisingly much, not only about these libraries but also CSS and TypeScript.",
    heroImage: DesignoShowcase,
    links: [
      {
        type: "demo",
        url: "https://designo-livid.vercel.app",
      },
      { type: "github", url: "https://github.com/BParadowski/designo" },
    ],
    techstack: ["TypeScript", "Next.js (app router)", "Tailwind", "cva", "SVGR", "Playwright"],
    details: [
      {
        title: "Polymorphic button component",
        paragraphs: [
          "Creating a typesafe component which can serve as both a regular button and a link is surprisingly non-trivial.",
          "You can <a href='https://github.com/BParadowski/designo/blob/main/app/components/shared/Button.tsx' class='bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent'>see my implementation here.</a>",
        ],
        image: PolymorphicButton,
      },
    ],
  },
};
