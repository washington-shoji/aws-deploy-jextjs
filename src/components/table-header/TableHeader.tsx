export default function TableHeader() {
	return (
		<tr>
			<th scope='col' className='px-4 py-4'>
				Product name
			</th>
			<th scope='col' className='px-4 py-3'>
				Category
			</th>
			<th scope='col' className='px-4 py-3'>
				Brand
			</th>
			<th scope='col' className='px-4 py-3'>
				Description
			</th>
			<th scope='col' className='px-4 py-3'>
				Price
			</th>
			<th scope='col' className='px-4 py-3'>
				<span className='sr-only'>Actions</span>
			</th>
		</tr>
	);
}
