import React from 'react'

function Output({ cf }) {
    return (
        <div>
            <p>  {cf[4][0]} : {cf[4][1]} </p>
            <p>  {cf[3][0]} : {cf[3][1]}  </p>
            <p>  {cf[2][0]} : {cf[2][1]}  </p>
            <p>  {cf[1][0]} : {cf[1][1]}  </p>
            <p>  {cf[0][0]} : {cf[0][1]}  </p>
        </div>
    )
}

export default Output
