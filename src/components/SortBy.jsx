import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSortType } from './redux/reducers/sortReducer'

const SortBy = () => {

	const dispatch = useDispatch()

	const currentSortType = useSelector((it) => it.sortingType.sort_type)

	const setNewSortType = () => {
		dispatch(changeSortType({sort_type: currentSortType === 'name' ? 'price' : 'name' }))
	}

	return (
		<div className='sort__type__select'>
			<div className='sort_type_label'>сортировать по</div>
			<div className='sort_type_selector'>
				<select className='type_selector' onChange={() => setNewSortType()}>
					<option value="name" className='sort_value'>имени</option>
					<option value="price" className='sort_value'>цене</option>
				</select>
			</div>
		</div>
	)
}

export default SortBy