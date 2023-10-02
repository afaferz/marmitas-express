import { Menu } from "~/models/menu";

export const MAIN_MENU_ITEMS = [
    {
        name: "Cardápio", // 1
        href: "/cardapio",
        nuxtLink: true,
        submenu: [],
    },
    {
        name: "Delivery", // 3
        href: "/delivery",
        nuxtLink: true,
        submenu: [],
    },
    {
        name: "Onde Nos Encontrar", // 5
        href: "/onde-nos-encontrar",
        nuxtLink: true,
        submenu: [],
    },
    // {
    //     name: "Fale Conosco", // 4
    //     href: "/contato",
    //     nuxtLink: true,
    //     submenu: [],
    // },
] satisfies Menu.Navbar[];
export const MAIN_MENU_SOCIAL_ITEMS = [
    {
        name: 'WhatsApp',
        href: '',
        nuxtLink: true,
        icon: ['fab', 'whatsapp'],
        submenu: []
    },
    {
        name: 'Instagram',
        href: '',
        nuxtLink: true,
        icon: ['fab', 'instagram'],
        submenu: []
    },
    {
        name: 'Facebook',
        href: '',
        nuxtLink: true,
        icon: ['fab', 'facebook'],
        submenu: []
    },

] satisfies Menu.Navbar[]