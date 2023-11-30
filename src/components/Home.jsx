import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  return (

    <>
      <div>
        <h1>This is home page </h1>
        <h1>you will see more information about it in the home page  </h1>
        <button onClick={() => navigate('order-summary', {replace: true})}>Place Order</button>
      </div>
    </>
  )
}

export default Home