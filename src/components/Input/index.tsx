import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import {IconBaseProps} from 'react-icons';
import {useField} from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  icon?: React.ComponentType<IconBaseProps>
}
const Input: React.FC<InputProps> =({icon: Icon, name,...rest})=> {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled]= useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    fieldName,
    defaultValue,
    registerField,
    } = useField(name);

  const handleInputBlur = useCallback(()=>{
    setIsFocused(false);

    // if(inputRef.current?.value){
    //   setIsFilled(true);
    // }else{
    //   setIsFilled(false);
    // }

    setIsFilled(!!inputRef.current?.value)

  },[])

  const handleInputFocus = useCallback(()=>{
    setIsFocused(true)
  },[])
    useEffect(() => {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
      })
    },[fieldName, registerField ])
      
        
  return(
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input ref={inputRef}
       defaultValue={defaultValue}
       onFocus={handleInputFocus}
       onBlur={handleInputBlur}
        {...rest} />
    </Container>
  )
  }
export default Input;