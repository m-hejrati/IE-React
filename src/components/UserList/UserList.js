import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from '../User/User';
import logo from '../../Spin-load.gif'

function UserList() {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    setData(response.data)
    setLoading(false)
  }, []);


  return isLoading ? (
    <img src={logo} alt="loading..." />
  ) : (
    data.map((user) => {
      return <User key={user.id} phone={user.phone} email={user.email} name={user.name} website={user.website}></User>
    })
  )
}

export default UserList;