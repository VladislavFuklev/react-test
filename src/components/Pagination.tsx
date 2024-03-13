import React from 'react'
import ReactPaginate from 'react-paginate'

interface PaginationProps {
	pageCount: number
	onPageChange: (selectedPage: { selected: number }) => void
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange }) => {
	return (
		<ReactPaginate
			previousLabel={'← '}
			nextLabel={' →'}
			pageCount={pageCount}
			onPageChange={onPageChange}
			containerClassName={'pagination'}
			activeLinkClassName={'active'}
			previousClassName={'btn btn-primary'}
			nextClassName={'btn btn-primary'}
			disabledClassName={'disabled'}
			pageLinkClassName={'btn btn-secondary'}
		/>
	)
}

export default Pagination
