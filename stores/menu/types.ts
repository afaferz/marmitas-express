export interface MenuItems {
  name: string;
  href: string;
  submenu: MenuItems[];
  nuxtLink?: boolean;
}
