import React from 'react'
import { FieldError } from 'react-hook-form'

const InputError = ({errors} : {errors : FieldError | undefined}) => {
  return errors && <span className='text-red-400'>{errors.message}</span>
  
}

export default InputError
