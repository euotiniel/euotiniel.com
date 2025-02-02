import { Crafts } from '@/components/crafts'

export type ComponentItem = {
  title: string;
  slug: keyof typeof Crafts;
  tags: string[];
  description?: string;
  component: typeof Crafts[keyof typeof Crafts];
  mdxPath?: string; 
}

export const components: ComponentItem[] = [
  {
    title: "Card de Produto",
    slug: "card-product",
    tags: ["nextjs", "tailwindcss", "framer-motion"],
    description: "Um cartão interativo para exibição de produtos, trazendo uma experiência visual moderna e fluida. Ideal para e-commerces e vitrines digitais.",
    component: Crafts['card-product'],  
  },
  {
    title: "Disco de Álbum",
    slug: "album-disk",
    tags: ["nextjs", "tailwindcss", "framer-motion"],
    description: "Um componente estilizado que simula a exibição de um disco de álbum, perfeito para sites musicais ou galerias de mídia.",
    component: Crafts['album-disk'],  
  },
  {
    title: "Cofre Virtual",
    slug: "vault",
    tags: ["nextjs", "tailwindcss", "framer-motion"],
    description: "Um layout seguro e dinâmico para armazenar informações sensíveis, simulando a interface de um cofre digital. Este componente ainda precisa de muitos ajustes, mas decidi compartilhá-lo assim mesmo. Ele foi inspirado no incrível trabalho de @Ibelick, especialmente no componente 'dcm'.",
    component: Crafts['vault'],
  },
  // {
  //   title: "Botão Interativo",
  //   slug: "button",
  //   tags: ["nextjs", "tailwindcss", "framer-motion"],
  //   description: "Um botão animado que reage às interações do usuário, trazendo feedback visual imediato para melhorar a experiência.",
  //   component: Crafts['button'],
  // },
]
