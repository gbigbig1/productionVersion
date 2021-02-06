import React, {useState} from "react";
import {connect} from 'react-redux';

import Pagination from "./pagination";


const PaginationContainer = ({ pageSize, totalTaskCount, currentPage, onPageChange, stepSizes = 10}) => {
    // подсчет общего количества страниц
    let pagesCount = Math.ceil(totalTaskCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    //подсчет общего количество шагов по 10 страниц
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
    return (
        <Pagination
            pages={pages}
            stepCount={stepCount}
            stepNumber={stepNumber}
            setStepNumber={setStepNumber}
            leftStepPageNumber={leftStepPageNumber}
            rightStepPageNumber={rightStepPageNumber}
            currentPage={currentPage}
            onPageChange={onPageChange}
        />
    )

}

export default connect(
    (store) => ({
        pageSize: store.taskReducer.pageSize,
        totalTaskCount: store.taskReducer.totalTaskCount,
    })
)(PaginationContainer);
