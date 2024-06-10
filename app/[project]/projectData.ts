import { StaticImageData } from "next/image";

import AudiophileShowcase from "@/public/audiophile/audiophile-showcase.jpg";
import AudiophileCheckoutError from "@/public/audiophile/checkout-error.jpeg";
import Headphones from "@/public/audiophile/headphones.jpeg";
import Cart from "@/public/audiophile/cart.jpeg";

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

export const projectSlugs = ["audiophile"] as const;

export type ProjectSlugs = (typeof projectSlugs)[number];

export const projectsData: {
  [K in ProjectSlugs]: ProjectData;
} = {
  audiophile: {
    title: "Audiophile",
    mainDescription: `Creating an e-commerce application seems to be a rite of passage for web developers. I decided to make mine about something close to me - sound. The website is based on a Figma design by Frontend Mentor<span className="align-super text-xs">TM</span>. It features a REST API, cart with server state managementand a complex order form with data validation on both frontend and backend.`,
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
};
