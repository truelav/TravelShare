import React from 'react';

import UsersList from '../components/UsersList'

export default function Users(){
  const USERS = [
    {id: '1', name: 'Vasile', image: 'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg', placeCount: 12},
    {id: '2', name: 'Andreica', image: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102' , placeCount: '7'}
  ]

  return(
    <UsersList items={USERS}/>
  )
}