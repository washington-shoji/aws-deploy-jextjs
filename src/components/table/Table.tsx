'use client';

import { Product } from '@/types/product.interface';
import TableHeader from '../table-header/TableHeader';
import TableRow from '../table-row/TableRow';
import React, { useState } from 'react';
import ReadModal from '../read-modal/ReadModal';
import DeleteModal from '../delete-modal/DeleteModal';
import UpdateModal from '../update-modal/UpdateModal';

export enum Action {
	EDIT,
	PREVIEW,
	DELETE,
}

interface Props {
	products: Product[];
}

export default function Table(props: Props) {
	const { products } = props;
	const [openActions, setOpenActions] = useState<{
		id: number | null;
		isOpen: boolean;
	}>({ id: null, isOpen: false });
	const [action, setAction] = useState<Action | null>(null);
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [prevProduct, setPreviewProduct] = useState<Product | undefined>(
		undefined
	);

	function toggleOpenActions(index: number | null, isOpen: boolean) {
		if (index) {
			setOpenActions({ id: index, isOpen: !isOpen });
		} else {
			setOpenActions({ id: null, isOpen: false });
		}
	}

	function togglePreview(
		index: number | null,
		action: Action | null,
		product: Product | undefined
	) {
		if (index) {
			setActiveIndex(index);
			setAction(action);
			setPreviewProduct(product);
		} else {
			setActiveIndex(null);
			setAction(null);
			setPreviewProduct(undefined);
		}
	}
	return (
		<div className='overflow-x-auto'>
			<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
				<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
					<TableHeader />
				</thead>
				<tbody>
					{products.map((product) => {
						return (
							<TableRow
								key={product.id}
								openActions={openActions}
								data={product}
								activeIndex={activeIndex}
								toggleOpenActions={toggleOpenActions}
								togglePreview={togglePreview}
							/>
						);
					})}
				</tbody>
			</table>

			{activeIndex && action === Action.PREVIEW && prevProduct && (
				<ReadModal
					togglePreview={togglePreview}
					product={prevProduct}
					activeIndex={activeIndex}
				/>
			)}

			{activeIndex && action === Action.DELETE && prevProduct && (
				<DeleteModal
					togglePreview={togglePreview}
					product={prevProduct}
					activeIndex={activeIndex}
				/>
			)}

			{activeIndex && action === Action.EDIT && prevProduct && (
				<UpdateModal
					togglePreview={togglePreview}
					product={prevProduct}
					activeIndex={activeIndex}
				/>
			)}
		</div>
	);
}
