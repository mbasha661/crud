import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Profile() {
  return <>
<div>
<h1>Profile</h1>
<h3>The sub components are:</h3>
<ul>
  <Link to='details'>  <li>Profile Details</li></Link>
    <Link to='reset-password'><li>Reset password</li></Link>
</ul>
<Outlet/>
</div>
  </>
}

export default Profile