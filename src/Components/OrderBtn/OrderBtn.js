import React from 'react'
import './OrderBtn.css'

export default function OrderBtn() {
  return (
    <>
      <div className="btn-holder">
        <div className="btn-wrapper">
          <button className="btn-order">
            <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
            </svg>
            <span>سفارش دهید</span>
          </button>
        </div>
      </div>
    </>
  )
}
