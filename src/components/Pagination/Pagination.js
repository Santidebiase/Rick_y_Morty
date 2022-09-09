import { React, useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {

    let [width, setWidth] = useState(window.innerWidth);


    let updateDimentios = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimentios);
        return () => window.removeEventListener("resize", updateDimentios);
    }, []);



    return (
        <>
            <style jsx>
                {`
            @media (max-width: 768px){
                .next, .previous {
                    display: none
                }

            .pagination {
                font-size: 14px
            }
       
            `}
            </style>
            <ReactPaginate
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
                className="pagination justify-content-center gap-4 my-4 x"
                nextLabel="Next"
                previousLabel="Prev"
                nextClassName="btn btn-primary next"
                previousClassName="btn btn-primary previous"
                pageClassName="page-item"
                marginPagesDisplayed={width < 576 ? 1 : 2}
                pageRangeDisplayed={width < 576 ? 1 : 2}
                pageLinkClassName="page-link"
                activeClassName="active"
                onPageChange={(data) => { setPageNumber(data.selected + 1) }}
                pageCount={info?.pages}
            />
        </>
    )
}

export default Pagination





/* Forma de Hacerlo sin usar librerias
    let next = () => {   (x= previous value)
        if (pageNumber === 42) return
        setPageNumber(x => x + 1);
    };

    let prev = () => {
        if (pageNumber === 1) return
        setPageNumber(x => x - 1);
    };

    return (
        <div className="container d-flex justify-content-center gap-5 my-5">
            <button onClick={prev} className="btn btn-primary">Prev</button>
            <button onClick={next} className="btn btn-primary">Next</button>
        </div>
    )*/

