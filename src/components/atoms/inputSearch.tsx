import React, { Fragment, ChangeEvent } from 'react'

export default ({ label, placeholder, handleChange } : { label: string, placeholder: string, handleChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
  <Fragment>
    <label>{label}</label>
    <input type='search' placeholder={placeholder} onChange={e => handleChange(e)} />
  </Fragment>
)