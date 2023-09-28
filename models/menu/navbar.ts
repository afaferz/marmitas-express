export namespace Navbar {
  export interface Root {
    name: string;
    href: string;
    submenu: Root[];
    icon?: Array<string>;
    nuxtLink?: boolean;
  }
}
