import TableActionHeader from '@/components/table-action-header/TableActionHeader';
import TableFooter from '@/components/table-footer/TableFooter';
import Table from '@/components/table/Table';
import {
	ProductPagination,
	ProductResponse,
} from '@/types/product-response.interface';
import { Product } from '@/types/product.interface';

async function getProducts(): Promise<ProductResponse> {
	const url: string = 'https://dummyjson.com/products?limit=10';
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error('Could not fetch products');
	}

	return res.json();
}

export default async function Home() {
	const productResponse: ProductResponse = await getProducts();
	const products: Product[] = productResponse.products;
	const productPagination: ProductPagination = {
		total: productResponse.total,
		skip: productResponse.skip,
		limit: productResponse.limit,
	};
	return (
		<main className=''>
			<section className=' min-h-screen bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased'>
				<div className='mx-auto max-w-screen-xl px-4 lg:px-12'>
					<div className='bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden'>
						<TableActionHeader />
						<Table products={products} />
						<TableFooter pagination={productPagination} />
					</div>
				</div>
			</section>
		</main>
	);
}
