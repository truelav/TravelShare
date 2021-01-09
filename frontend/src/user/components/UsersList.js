import React from 'react';
import Users from '../pages/Users';

import UsersItem from './UsersItem';
import Card from '../../shared/components/UIElements/Card'

import './UsersList.css'

const UsersList = (props) => {
  if (props.items.length === 0){
    return (
      <div className="center">
        <Card>
          <h2>No Users Found</h2>
        </Card>
      </div>
    )
  }

  return( 
    <ul className="user-list">
      {props.items.map( (user) => (
        <UsersItem 
          key={user.id} 
          id={user.id} 
          image={user.image} 
          name={user.name} 
          placeCount={user.placeCount}
        />
      ))}
    </ul>
    )
}

export default  UsersList