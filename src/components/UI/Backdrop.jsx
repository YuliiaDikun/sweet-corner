import React from 'react'
import { BackdropWrapper } from './UI.styled';
const Backdrop = ({ children, ...props }) => {
  return (
       <BackdropWrapper {...props}>{children}</BackdropWrapper>
  )
}

export default Backdrop