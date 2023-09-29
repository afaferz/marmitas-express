import { Menu } from "~/models/menu";
import { Products } from "~/models/products";
import { v4 as uuid } from 'uuid'
import { Product } from "~/models/products/products";
export const STEAK_PRODUCTS = [
    {

        id: uuid(),
        title: 'Prato 1',
        description: 'Prato feito com amor e carinho',
        linkImage: '/images/product/',
        category: Product.Categories,
        ctaLink: '',
        linkUrl: '',
        show: false,
    }
] satisfies Products.SingleProduct[]
export const CHICKEN_PRODUCTS = [{

    id: uuid(),
    title: 'Prato 1',
    description: 'Prato feito com amor e carinho',
    linkImage: '/images/product/',
    category: Product.Categories,
    ctaLink: '',
    linkUrl: '',
    show: false,
}] satisfies Products.SingleProduct[]
export const BRAZILIAN_PRODUCTS = [{

    id: uuid(),
    title: 'Prato 1',
    description: 'Prato feito com amor e carinho',
    linkImage: '/images/product/',
    category: Product.Categories,
    ctaLink: '',
    linkUrl: '',
    show: false,
}] satisfies Products.SingleProduct[]
export const DRINKS_PRODUCTS = [{

    id: uuid(),
    title: 'Prato 1',
    description: 'Prato feito com amor e carinho',
    linkImage: '/images/product/',
    category: Product.Categories,
    ctaLink: '',
    linkUrl: '',
    show: false,
}] satisfies Products.SingleProduct[]
export const SIDE_DISH_PRODUCTS = [{

    id: uuid(),
    title: 'Prato 1',
    description: 'Prato feito com amor e carinho',
    linkImage: '/images/product/',
    category: Product.Categories,
    ctaLink: '',
    linkUrl: '',
    show: false,
}] satisfies Products.SingleProduct[]
export const DESERTS_PRODUCTS = [{

    id: uuid(),
    title: 'Prato 1',
    description: 'Prato feito com amor e carinho',
    linkImage: '/images/product/',
    category: Product.Categories,
    ctaLink: '',
    linkUrl: '',
    show: false,
}] satisfies Products.SingleProduct[]

