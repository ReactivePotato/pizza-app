import React, { useState } from 'react'

const SortBy = () => {
	const [sortType, setSortType] = useState('name')

	const onSelectSortType = () => {
		setSortType(sortType === 'name' ? 'price' : 'name')
	}

	return (
		<div className='sort__type__select'>
			<div className='sort_type_label'>сортировать по</div>
			<div className='sort_type_selector'>
				<select className='type_selector' onChange={() => onSelectSortType()}>
					<option value="name" className='sort_value'>имени</option>
					<option value="price" className='sort_value'>цене</option>
				</select>
			</div>
		</div>
	)
}

export default SortBy