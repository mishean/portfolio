import './form.css'

const Message = (props) => {
  const { handleChange, name, type, value, placeholder } = props;
  return (
      <textarea type={type} onChange={handleChange} value={value} name={name} placeholder={placeholder} required />
  )
}

export default Message
