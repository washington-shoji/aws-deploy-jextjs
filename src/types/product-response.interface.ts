import { Product } from './product.interface';

export interface ProductResponse {
	products: Product[];
	total: number;
	skip: number;
	limit: number;
}

export interface ProductPagination {
	total: number;
	skip: number;
	limit: number;
}
