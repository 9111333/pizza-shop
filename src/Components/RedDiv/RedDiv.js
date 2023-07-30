import React from 'react'
import './RedDiv.css'
import Buttons from '../Buttons/Buttons'

export default function RedDiv() {
    return (
        <>
            <div className='svg-holder'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 1908 531.53"
                    viewBox="0 0 1908 531.53"
                    className='red-svg'
                >
                    <path
                        fill="#d12927"
                        d="M1908 531.53s-640.94-72.71-961.41-72.71S0 531.53 0 531.53V0s593.65 79.06 945.18 77.65S1908 0 1908 0v531.53z"
                    ></path>
                </svg>
                <div className="g">
                    <Buttons className='four-B' />
                </div>
            </div>
        </>
    )
}
