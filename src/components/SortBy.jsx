import React, { useState } from 'react'

const SortBy = () => {
	const [sortType, setSortType] = useState('name')

	const onSelectSortType = () => {
		setSortType(sortType === 'name' ? 'price' : 'name')
	}

	return (
		<div className='sort_type_select'>
			<div className='sort_type_label'>сортировать по</div>
			<div className='sort_type_selector'>
				<select className='type_selector' onChange={() => onSelectSortType()}>
					<option value="name">имени</option>
					<option value="price">цене</option>
				</select>
			</div>
		</div>
	)
}

export default SortBy