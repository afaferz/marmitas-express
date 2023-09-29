export namespace Product {
    export enum Categories {
        STEAK = 'steak',
        CHICKEN = 'chicken',
        BRAZILIAN = 'brazilian',
        DRINK = 'drink',
        SIDE_DISH = 'side_dish',
        DESERT = 'desert'
    }
    export interface Root {
        id: string;
        title: string;
        description: string;
        linkImage: string;
        category: typeof Categories;
        ctaLink: string,
        linkUrl?: string;
        show: boolean;
    }
}