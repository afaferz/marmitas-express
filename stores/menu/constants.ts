import { MenuItems } from "./types";

const ENTERPRISE_SUBMENU_ITEMS = [
  {
    name: "Quem Somos", // 1
    href: "/viva/quem-somos",
    nuxtLink: true,
    submenu:[]
  },
  {
    name: "Nossa História", // 2
    href: "/viva/nossa-historia",
    nuxtLink: true,
    submenu: []
  },
  {
    name: "Estrutura Organizacional", // 3
    href: "/viva/estrutura-organizacional",
    nuxtLink: true,
    submenu: []
  },
  {
    name: "Investimento, Patrimônio e Estatística", // 4
    href: "/viva/investimento-patrimonio-e-estatística",
    nuxtLink: true,
    submenu: []
  },
  {
    name: "Documentos Institucionais", // 5
    href: "/viva/documentos-institucionais",
    nuxtLink: true,
    submenu: []
  },
  {
    name: "Fique por dentro", // 6
    href: "/viva/fique-por-dentro",
    nuxtLink: true,
    submenu: []
  },
  {
    name: "Educação Financeira e Previdenciária", // 7
    href: "/viva/educacao-financeira-e-previdenciaria",
    nuxtLink: true,
    submenu: []
  },
];
const ADDICTION_SUBMENU_ITEMS = [
  {
    name: "Viva Empresarial", // 1
    href: "/adesao/viva-empresarial",
    nuxtLink: true,
    submenu: []
  },
  {
    name: "Viva Futuro", // 2
    href: "/adesao/viva-futuro",
    nuxtLink: true,
    submenu: []
  },
  {
    name: "ANAPARprev", // 3
    href: "/adesao/anaparprev",
    nuxtLink: true,
    submenu: []
  },
  {
    name: "IBAprev", // 4
    href: "/adesao/ibaprev",
    nuxtLink: true,
    submenu: []
  },
];
const PARTICIPANT_SUBMENU_ITEMS = [
  {
    name: "Viva Empresarial", // 1
    href: "/adesao/viva-empresarial",
    nuxtLink: true,
    submenu: []
  },
  {
    name: "Viva Futuro", // 2
    href: "/adesao/viva-futuro",
    nuxtLink: true,
    submenu: []
  },
  {
    name: "ANAPARprev", // 3
    href: "/adesao/anaparprev",
    nuxtLink: true,
    submenu: []
  },
  {
    name: "IBAprev", // 4
    href: "/adesao/ibaprev",
    nuxtLink: true,
    submenu: []
  },
];
const MAIN_MENU_ITEMS = [
  {
    name: "Viva Prev", // 1
    href: "/viva",
    nuxtLink: false,
    submenu: ENTERPRISE_SUBMENU_ITEMS,
  },
  {
    name: "Adesão", // 2
    href: "/adesao",
    nuxtLink: false,
    submenu: ADDICTION_SUBMENU_ITEMS,
  },
  {
    name: "Soluções", // 3
    href: "/solucoes",
    nuxtLink: true,
    submenu: []
  },
  {
    name: "Parceiros", // 4
    href: "/parceiros",
    nuxtLink: true,
    submenu: []
  },
  {
    name: "Área do Participante", // 5
    href: "/participante",
    nuxtLink: false,
    submenu: PARTICIPANT_SUBMENU_ITEMS,
  },
] satisfies MenuItems[];

export { MAIN_MENU_ITEMS };
