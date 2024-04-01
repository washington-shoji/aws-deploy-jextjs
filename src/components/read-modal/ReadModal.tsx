import { Product } from '@/types/product.interface';
import { Action } from '../table/Table';

interface Props {
	activeIndex: number;
	togglePreview: (
		id: number | null,
		action: Action | null,
		product: Product | undefined
	) => void;
	product: Product | undefined;
}

export default function ReadModal(props: Props) {
	const { activeIndex: preview, togglePreview, product } = props;
	return (
		<div className={preview ? '' : 'hidden'}>
			<div className='fixed inset-0 bg-gray-500 bg-opacity-5 transition-opacity'></div>
			<div
				id='readProductModal'
				tabIndex={-1}
				aria-hidden='true'
				className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
			>
				<div className='relative p-4 w-full max-w-xl max-h-full'>
					{/* <!-- Modal content --> */}
					<div className='relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5'>
						{/* <!-- Modal header --> */}
						<div className='flex justify-between mb-4 rounded-t sm:mb-5'>
							<div className='text-lg text-gray-900 md:text-xl dark:text-white'>
								<h3 className='font-semibold '>{product?.title}</h3>
								<p className='font-bold'>$ {product?.price}</p>
							</div>
							<div>
								<button
									type='button'
									className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white'
									data-modal-toggle='readProductModal'
									onClick={() => togglePreview(null, null, undefined)}
								>
									<svg
										aria-hidden='true'
										className='w-5 h-5'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
											clipRule='evenodd'
										/>
									</svg>
									<span className='sr-only'>Close modal</span>
								</button>
							</div>
						</div>
						<dl>
							<dt className='mb-2 font-semibold leading-none text-gray-900 dark:text-white'>
								Details
							</dt>
							<dd className='mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400'>
								{product?.description}
							</dd>
							<dt className='mb-2 font-semibold leading-none text-gray-900 dark:text-white'>
								Category
							</dt>
							<dd className='mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400'>
								{product?.category}
							</dd>
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}
