import './form.css'

const Name = (props) => {
  const { handleChange, label, name, type, value, placeholder } = props;
  return (
    <div className="outside">
      <label htmlFor={name}>{label}</label>
      <input type={type} onChange={handleChange} value={value} name={name} placeholder={placeholder}required />
    </div>
  )
}

export default Name