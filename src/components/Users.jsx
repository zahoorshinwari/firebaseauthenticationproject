import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function Users() {

  const [SearchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = SearchParams.get('filter') === 'active'

  return (
    <div>
        <h1>User 1</h1>
        <h1>User 2</h1>
        <h1>User 3</h1>
        <Outlet />
        <div>
          <button onClick={() => setSearchParams({ filter: 'active'})}>Active Users</button>
          <button onClick={() => setSearchParams({})}>Reset Filter</button>
        </div>
        { showActiveUsers ? (<h2>Showing active users</h2>) : (<h2>showing all users</h2>)}
    </div>
  )
}

export default Users 