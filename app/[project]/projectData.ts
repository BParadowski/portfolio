import { StaticImageData } from "next/image";
// Audiophile
import AudiophileShowcase from "@/public/audiophile/audiophile-showcase.jpg";
import AudiophileCheckoutError from "@/public/audiophile/checkout-error.jpeg";
import Headphones from "@/public/audiophile/headphones.jpeg";
import Cart from "@/public/audiophile/cart.jpeg";
// Primuz App
import PrimuzShowcase from "@/public/primuz/primuz-hero.jpeg";
import PrimuzAvailabiltiy from "@/public/primuz/availability-picking.jpeg";

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
    mainDescription: `Creating an e-commerce application seems to be a rite of passage for web developers. I decided to make mine about something close to me - sound. The website is based on a Figma design by Frontend Mentor<span class="align-super text-xs">TM</span>. It features a REST API, cart with server state managementand a complex order form with data validation on both frontend and backend.`,
    links: [
      {
        type: "demo",
        url: "https://audiophile-ashy-rho.vercel.app",
      },
      { type: "github", url: "https://github.com/BParadowski/audiophile" },
    ],
    heroImage: AudiophileShowcase,
    techstack: [
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
          "I chose Next.js for this project because it provides SSR which is key for search engine positioning and reaching customers. I also made use of its SSG capabilities - product and category (speakers, headphones etc.) pages are generated at build time from data in the DB. Adding a new product would be as easy as putting it in the database and revalidating these paths. Lastly - monorepo architecture of Next.js allowed me to share types between frontend and backend.",
        ],
        image: Headphones,
      },
      {
        title: "Checkout form and data validation",
        paragraphs: [
          "I wanted the checkout form to provide users with descriptive error messages and validate data before sending it for further processing.",
          "For this job I chose React Hook Form and Zod. Both have elegant APIs and integrate wonderfully with TypeScript. They're also widely used in the industry.",
        ],
        image: AudiophileCheckoutError,
      },
      {
        title: "Server state",
        paragraphs: [
          "Since information about individual carts is useful for analytics (among other things), I decided to store it on the server. The client is connected to the cart by ID in local storage.",
          "I implemented this functionality with React Query. It gave me the tools to handle loading states as well as optimistic updates which ensure the cart works smoothly.",
        ],
        image: Cart,
      },
    ],
  },
  primuz: {
    title: "Primuz App",
    mainDescription:
      "Well renowned (and well funded) orchestras have systems which streamline their work. I created something similar for my chamber orchestra. It's a PWA which helps us plan our concerts and rehearsals. Users can display information about projects, receive notifications about new ones in the planning, share if they're available for an event and download sheet music.",
    links: [],
    heroImage: PrimuzShowcase,
    techstack: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Google Calendar API",
      "OneSignal",
      "date-fns",
      "shadcn/ui",
      "React DnD Kit",
    ],
    details: [
      {
        title: "Motivation",
        paragraphs: [
          "The idea for this application came to me when I noticed several problems with communication and planning within my orchestra. At the time, we used many services: Google Sheets, We-Transfer, e-mails, Google Calendar... Important information would end up scattered across several facebook group posts.",
          "I realised I can use my skills to bundle these functionalities together and improve our workflow.",
        ],
        image: Headphones,
      },
      {
        title: "Feature: availability",
        paragraphs: [
          "Orchestra members can signal if they're available for a given project. They can choose from 4 different status types and attach a message.",
          `It solved two problems of Google Sheets. We used to have the choice between checkmark and no checkmark - it offered no distinction between "I don't know yet" and "I'm unavailable". The other problem was UX on mobile devices - my collegues had problems getting Google Sheets to work on their phones.`,
        ],
        image: PrimuzAvailabiltiy,
      },
      {
        title: "Feature: project info",
        paragraphs: ["We can now access all information about an event on its page."],
        image: PrimuzAvailabiltiy,
      },
    ],
  },
};
