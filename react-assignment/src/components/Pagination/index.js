import React, { useState } from 'react'

const Pagination = ({ page, pageChange, totalItem, limit }) => {
    const totalPages = Math.ceil(totalItem / limit);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    return (
        <section className="paginate flex products">
            <div className="mx-auto mt-5 text-black">
                <button
                    className={`py-2 px-3 border rounded-l-md ${page <= 1 ? "bg-gray-400 cursor-not-allowed" : "bg-white"}`}
                    disabled={page <= 1}
                    onClick={() => pageChange(page - 1)}
                >
                    Prev
            </button>
                {
                    pageNumbers.map(number => (
                        <button className={`py-2 px-3 border ${number === page ? "bg-blue-500 text-white" : "bg-white"}`}
                            onClick={() => pageChange(number)}
                        >
                            {number}
                        </button>
                    ))
                }
                <button
                    className={`py-2 px-3 border rounded-r-md ${page >= totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-white"}`}
                    disabled={page >= totalPages}
                    onClick={() => pageChange(page + 1)}
                >
                    Next
            </button>
            </div>
        </section>
    );
}

export default Pagination;
