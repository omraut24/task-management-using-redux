import React from 'react'

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className='flexContainer'>
      <label className='flexLabel'>{label}</label>
      <input
        className='flexInput'
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default TextField