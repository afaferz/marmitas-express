import { Menu } from "~/models/menu";

const _ENTERPRISE_SUBMENU_ITEMS = [
  {
    name: "Quem Somos", // 1
    href: "/viva/quem-somos",
    nuxtLink: true,
    submenu: [],
  },
  {
    name: "Nossa História", // 2
    href: "/viva/nossa-historia",
    nuxtLink: true,
    submenu: [],
  },
  {
    name: "Estrutura Organizacional", // 3
    href: "/viva/estrutura-organizacional",
    nuxtLink: true,
    submenu: [],
  },
  {
    name: "Investimento, Patrimônio & Estatística", // 4
    href: "/viva/investimento-patrimonio-e-estatística",
    nuxtLink: true,
    submenu: [],
  },
  {
    name: "Documentos Institucionais", // 5
    href: "/viva/documentos-institucionais",
    nuxtLink: true,
    submenu: [],
  },
  {
    name: "Fique por dentro", // 6
    href: "/viva/fique-por-dentro",
    nuxtLink: true,
    submenu: [],
  },
  {
    name: "Educação Financeira & Previdenciária", // 7
    href: "/viva/educacao-financeira-e-previdenciaria",
    nuxtLink: true,
    submenu: [],
  },
];
const _ADDICTION_SUBMENU_ITEMS = [
  {
    name: "Viva Empresarial", // 1
    href: "/adesao/viva-empresarial",
    nuxtLink: true,
    submenu: [],
  },
  {
    name: "Viva Futuro", // 2
    href: "/adesao/viva-futuro",
    nuxtLink: true,
    submenu: [],
  },
  {
    name: "ANAPARprev", // 3
    href: "/adesao/anaparprev",
    nuxtLink: true,
    submenu: [],
  },
  {
    name: "IBAprev", // 4
    href: "/adesao/ibaprev",
    nuxtLink: true,
    submenu: [],
  },
];
const _PARTICIPANT_SUBMENU_ITEMS = [
  {
    name: "Viva Empresarial", // 1
    href: "/participante/viva-empresarial",
    nuxtLink: true,
    submenu: [],
  },
  {
    name: "Viva Futuro", // 2
    href: "/participante/viva-futuro",
    nuxtLink: true,
    submenu: [],
  },
  {
    name: "ANAPARprev", // 3
    href: "/participante/anaparprev",
    nuxtLink: true,
    submenu: [],
  },
  {
    name: "IBAprev", // 4
    href: "/participante/ibaprev",
    nuxtLink: true,
    submenu: [],
  },
];
export const MAIN_MENU_ITEMS = [
  {
    name: "Viva Prev", // 1
    href: "/viva",
    nuxtLink: false,
    submenu: _ENTERPRISE_SUBMENU_ITEMS,
  },
  {
    name: "Adesão", // 2
    href: "/adesao",
    nuxtLink: false,
    submenu: _ADDICTION_SUBMENU_ITEMS,
  },
  {
    name: "Soluções", // 3
    href: "/solucoes",
    nuxtLink: true,
    submenu: [],
  },
  {
    name: "Parceiros", // 4
    href: "/parceiros",
    nuxtLink: true,
    submenu: [],
  },
  {
    name: "Área do Participante", // 5
    href: "/participante",
    nuxtLink: false,
    submenu: _PARTICIPANT_SUBMENU_ITEMS,
  },
] satisfies Menu.Navbar[];

export const MAIN_MENU_LGPD_ITEMS = [
  {
    name: "Política de Privacidade", // 1
    href: "/lgpd/politica-de-privacidade",
    nuxtLink: true,
    submenu: [],
  },
  {
    name: "Política de Cookies", // 2
    href: "/lgpd/politica-de-cookies",
    nuxtLink: true,
    submenu: [],
  },
  {
    name: "Segurança", // 3
    href: "/lgpd/seguranca",
    nuxtLink: true,
    submenu: [],
  },
  {
    name: "Configuração de Cookies", // 4
    href: undefined!,
    nuxtLink: true,
    submenu: [],
  },
] satisfies Menu.Navbar[];
