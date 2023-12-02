import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {

  const params = useParams()
  const userId = params.userId

  return (
    <div>
        <h1>All the details about the user {userId}</h1>
    </div>
  )
}

export default UserDetails