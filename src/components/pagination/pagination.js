import React, {useState} from "react";

import navNext from '../../assets/images/nav_next.png'
import navBefore from '../../assets/images/nav_before.png'
import './pagination.css'


const Pagination = ({totalTaskCount, pageSize, currentPage, onPageChange, stepSizes = 10}) => {

    let pagesCount = Math.ceil(totalTaskCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let stepCount = Math.ceil(pagesCount / stepSizes)
    let [stepNumber, setStepNumber] = useState(1)
    let leftStepPageNumber = (stepNumber - 1) * stepSizes + 1
    let rightStepPageNumber = stepNumber * stepSizes

    let arrPage = {}
    for (let i = 1; i <= pagesCount; i++) {
        arrPage = {
            i: i,
        }

    }
    return <div className="tasks__pagination">
        <div className='tasks__pagination__content'>

            {stepNumber > 1 &&
            <button className='tasks__pagination__btn' src={navBefore} onClick={() => {
                setStepNumber(stepNumber - 1)
            }}>
                <img src={navBefore}/>
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


    // return <div className='tasks__pagination__content'>
    //     {stepNumber > 1 &&
    //       <button className='tasks__pagination__btn' onClick={() => { setStepNumber(stepNumber - 1)}}> ❮ </button>
    //     }
    //     {pages
    //         .filter(p => p >= leftStepPageNumber && p <= rightStepPageNumber)
    //         .map((p) => {
    //             return <span
    //                 className={currentPage === p ? 'tasks_pagination_item selectedPage' : 'tasks_pagination_item'}
    //                 key={p}
    //                 onClick={() => {
    //                     onPageChange(p)
    //                 }}
    //             >{p}</span>
    //         })
    //     }
    //     {stepCount > stepNumber &&
    //
    //
    //     <button className='tasks__pagination__btn' onClick={() => { setStepNumber(stepNumber + 1)}}> ❯ </button>
    //     }
    // </div>

}

export default Pagination;
