import { Crafts } from '@/components/crafts'

export type ComponentItem = {
  title: string;
  slug: keyof typeof Crafts;
  description?: string;
  component: typeof Crafts[keyof typeof Crafts];
  date?: string;
  mdxPath?: string; 
}

export const components: ComponentItem[] = [
 
  {
    title: "Newsletter",
    slug: "newsletter",
    description: "I developed this component for my newsletter, and the idea was to integrate a notice into the same card, but in a more different and minimalist way. The detail that won me over the most was this orange, which gives a special touch to the design.",
    component: Crafts['newsletter'],
    date: "Fev, 2025"
  },
  // {
  //   title: "Tracking progress",
  //   slug: "tracking-progress",
  //   description: "Um botão animado que reage às interações do usuário, trazendo feedback visual imediato para melhorar a experiência.",
  //   component: Crafts['tracking-progress'],
  //   date: "Fev, 2025"
  // },

  {
    title: "Album Disk",
    slug: "album-disk",
    description: "A stylized component that simulates the display of an album disc, perfect for music websites or media galleries.",
    component: Crafts['album-disk'],  
    date: "Nov, 2024"
  },
  {
    title: "Gallery (Challenge)",
    slug: "gallery",
    description: "This component came from a challenge I saw on Twitter, posted by Ishan. It was a fun experiment because there are many ways to achieve this effect, but I settled on this approach at the time. Maybe someday, I’ll revisit it and make improvements.",
    component: Crafts['gallery'],
    date: "Aug, 2024"
  },
  {
    title: "Virtual Vault",
    slug: "vault",
    description: "A secure and dynamic layout for storing sensitive information, simulating the interface of a digital vault. This component still needs a lot of tweaking, but I decided to share it anyway. It was inspired by @Ibelick's amazing work, especially the 'dcm' component.",
    component: Crafts['vault'],
    date: "Aug, 2024"
  },
  {
    title: "Animated Form",
    slug: "animated-form",
    description: "Here we have an interactive input, which dynamically expands to a textarea when filled in correctly. The goal was to create a fluid and intuitive experience.",
    component: Crafts['animated-form'],
    date: "Aug, 2024"
  },
  {
    title: "Card Product",
    slug: "card-product",
    description: "An interactive card for product display, bringing a modern and fluid visual experience. Ideal for e-commerces and digital showcases.",
    component: Crafts['card-product'], 
    date: "Aug, 2024" 
  },
  {
    title: "Interactive button",
    slug: "button",
    description: "This component was from an incredible demo of Emil Kowalski's course. Since then, I've been thinking of ways to improve it even more. I love how it responds to user interactions, bringing a touch of fluidity and animation that makes all the difference. This is, without a doubt, one of my favorites.",
    component: Crafts['button'],
    date: "Out, 2024"
  },
]