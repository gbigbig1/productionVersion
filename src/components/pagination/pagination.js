import React from "react";

import navNext from '../../assets/images/nav_next.png'
import navBefore from '../../assets/images/nav_before.png'
import './pagination.css'


const Pagination = ({pages, stepNumber, setStepNumber, stepCount, leftStepPageNumber, rightStepPageNumber, currentPage, onPageChange}) => {

    return <div className="tasks__pagination">
        <div className='tasks__pagination__content'>
            {stepNumber > 1 &&
                <button className='tasks__pagination__btn' src={navBefore} onClick={() => {
                    setStepNumber(stepNumber - 1)
                }}>
                    <img src={navBefore} />
                </button>
            }
            {pages
                .filter(p => p >= leftStepPageNumber && p <= rightStepPageNumber)
                .map((p) => {
                    return <span
                        className={currentPage === p ? 'tasks_pagination_item selectedPage' : 'tasks_pagination_item'}
                        key={p}
                        onClick={() => {
                            onPageChange(p)
                        }}
                    >{p}</span>
                })
            }
            {stepCount > stepNumber &&
            <button className='tasks__pagination__btn' onClick={() => {
                setStepNumber(stepNumber + 1)
            }}>
                <img src={navNext}/>
            </button>
            }
        </div>
    </div>
}

export default Pagination;
