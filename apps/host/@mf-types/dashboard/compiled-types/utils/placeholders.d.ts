/**
 * Utility functions for generating placeholder product images
 * Using reliable services that actually work
 */
export declare const getProductImage: (width?: number, height?: number, seed?: string) => string;
export declare const getDummyProductImage: (productId?: number) => string;
export declare const getElectronicsImage: (width?: number, height?: number) => string;
export declare const getFashionImage: (width?: number, height?: number) => string;
export declare const getHomeImage: (width?: number, height?: number) => string;
export declare const getPicsumImage: (width?: number, height?: number, id?: number) => string;
export declare const PRODUCT_CATEGORIES: {
    readonly ELECTRONICS: readonly [1, 2, 3, 4, 5];
    readonly FASHION: readonly [6, 7, 8, 9, 10];
    readonly HOME: readonly [11, 12, 13, 14, 15];
    readonly SPORTS: readonly [16, 17, 18, 19, 20];
    readonly BOOKS: readonly [21, 22, 23, 24, 25];
    readonly BEAUTY: readonly [26, 27, 28, 29, 30];
    readonly FOOD: readonly [31, 32, 33, 34, 35];
    readonly AUTOMOTIVE: readonly [36, 37, 38, 39, 40];
};
export declare const getCategoryImage: (category: keyof typeof PRODUCT_CATEGORIES, width?: number, height?: number) => string;
export declare const getReliableProductImage: (width?: number, height?: number, type?: "electronics" | "fashion" | "home" | "random") => string;
