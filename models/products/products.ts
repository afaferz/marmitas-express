export namespace Product {
    export enum Categories {
        STEAK = 'carne',
        CHICKEN = 'frango',
        BRAZILIAN = 'típica',
        DRINK = 'bebida',
        SIDE_DISH = 'acompanhamento',
        DESERT = 'sobremesa'
    }
    export interface Root {
        id: string;
        title: string;
        description: string;
        linkImage: string;
        category: Categories;
        ctaLink: string,
        linkUrl?: string;
        show: boolean;
    }
}