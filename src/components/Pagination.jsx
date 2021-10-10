/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './pagination.css'

const Pagination = ({postsPerPage, totalPosts, changePage, pageNumber}) => {
    const pageNumbers = [];

    for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
        pageNumbers.push(index);
    }

    return (
        <ul class="pagination right">
        <li class='waves-effect'>
            {pageNumber !== 1 ? <a onClick={(e) => changePage(e, pageNumber - 1)}><i class="material-icons">chevron_left</i></a> : null}
        </li>
            {
                pageNumbers.map(number => (
                    <>
                        <li class='waves-effect'>
                            <a onClick={(e) => changePage(e, number)}>{number}</a>
                        </li>
                    </>
                ))
            }
        <li class='waves-effect'>
            {!(pageNumber === postsPerPage) ? <a onClick={(e) => changePage(e, pageNumber + 1)}><i class="material-icons">chevron_right</i></a> : null}
        </li>
        </ul>
    )
}

export default Pagination
