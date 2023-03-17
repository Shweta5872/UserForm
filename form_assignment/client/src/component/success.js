import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Success() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/success')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user._id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.age}</p>
        </div>
      ))}
    </div>
  );
}

export default Success;
