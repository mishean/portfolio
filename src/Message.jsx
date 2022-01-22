const Message = (props) => {
  const { handleChange, label, name, type, value, placeholder } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea type={type} onChange={handleChange} value={value} name={name} placeholder={placeholder} required />
    </div>
  )
}

export default Message
