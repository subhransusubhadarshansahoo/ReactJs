import React from 'react'

const RedBorder = ({children}) => {
    const redBOrder={
        border:"2px solid red",
        padding:"10px",
        margin:"10px 0px"
    }
  return (
    <div style={redBOrder}>{children}</div>
  )
}

export default RedBorder