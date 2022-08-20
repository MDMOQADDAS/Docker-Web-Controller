import React from 'react'
import ReactDOM from 'react-dom'

import {MyCard}  from './components/card.jsx'

import containerdb from  './components/db.js'

function cardBuilder(data){
  return(
    <MyCard
    status={data.status}
    terminal={data.terminal}
    logo = {data.logo}
    >

    </MyCard>
  )
}

ReactDOM.render(
  <div>
   {containerdb.map(cardBuilder)}
  </div>,
  // <div>
  // <MyCard 
  // status={containerdb[0].status} 
  // terminal={containerdb[0].terminal}  
  // logo={containerdb[0].logo}>

  // </MyCard>
  // <MyCard 
  // status={containerdb[1].status} 
  // terminal={containerdb[1].terminal}   
  // logo={containerdb[1].logo}>

  // </MyCard>
  // <MyCard 
  // status={containerdb[2].status} 
  // terminal={containerdb[2].terminal}  
  // logo={containerdb[2].logo}>

  // </MyCard>
  
  
  document.getElementById('root')
)