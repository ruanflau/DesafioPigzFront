import { useId } from 'react'
import './Field.css'

export function Field({ label, type = 'text', placeholder }) {
  const id = useId()
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} />
    </div>
  )
}

export function SelectField({ label, placeholder, options = [] }) {
  const id = useId()
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <select id={id} defaultValue="">
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  )
}

export function PhoneField({ label, placeholder }) {
  const id = useId()
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <div className="phone">
        <span className="phone__ddi">
          {/* bandeira do Brasil.svg */}
          <span className="phone__flag" />
          +55 <small>▾</small>
        </span>
        <input id={id} type="tel" placeholder={placeholder} />
      </div>
    </div>
  )
}
