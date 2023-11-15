import React from 'react'

export default function Input({id,type,name,titel,getUser,cust,errors,value}) {
  return (
    <div className="mb-3">
    <label htmlFor={id} className={`form-label ${cust}`}>{titel}</label>
    <input type={type} className="form-control" id={id} name={name} onChange={getUser} value={value}/>
    {errors&&<p className='text-danger'>{errors[name]}</p>}
  </div>
  )
}
