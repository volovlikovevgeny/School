interface ProductItemImg {
    public_id: string;
    url: string;
}

export interface ProductItems {
    category: string;
    checked: boolean;
    content: string;
    description: string;
    images: ProductItemImg[];
    inStock: number;
    price: number;
    sold: number;
    title: string;
    _id: string;
}

export interface Product {
    Product: {
        products: ProductItems[],
        status: string;
        result: number;
        length: number;
        map: (e) => void;
    }
}
