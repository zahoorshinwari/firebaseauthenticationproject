import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummary() {
    const NavigateBack = useNavigate()

  return (
    <>
    <div>OrderSummary Confirmed!</div>
    <button onClick={() => NavigateBack(-1)}>Go Back</button>
    </>
  )
}

export default OrderSummary