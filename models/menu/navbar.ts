export namespace Navbar {
  export interface Root {
    name: string;
    href: string;
    submenu: Root[];
    nuxtLink?: boolean;
  }
}
