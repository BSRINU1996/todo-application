import React from 'react'

const PureCompo = ({salary,age}) => {
    console.log('inside pure component')
  return (
    <>
    <p>Inside Pure Component</p>
    <h1>salary:{salary}</h1>
    <h1>age:{age}</h1>
    </>
  )
}

export default React.memo(PureCompo);
// there is no point in re-rendering of the Pure component here because
// the props getting used in this component are not getting changed .
//so we have to make this component a Pure component.