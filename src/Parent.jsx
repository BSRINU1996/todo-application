import React from 'react'
import PureCompo from './PureCompo';

export const Parent = (props) => {
    const {id,salary,age} = props;
    console.log("inside parent component")
  return (  
    <>
    <id>Id is :{id}</id>
    <PureCompo salary={salary} age={age}/>
    </>
  )
}


