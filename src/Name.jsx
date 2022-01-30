import './form.css'

const Name = (props) => {
  const { handleChange, name, type, value, placeholder } = props;
  return (
    <div className="outside">
      <input type={type} onChange={handleChange} value={value} name={name} placeholder={placeholder}required />
    </div>
  )
}

export default Name