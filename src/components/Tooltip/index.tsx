import React from 'react';

import {Container} from './styles'
interface TooltipProp{
  title: string;
  className?:string;
}

export const Tooltip:React.FC<TooltipProp>=({title, children, className})=>{
  return(
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  )
}