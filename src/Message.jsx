import './form.css'

const Message = (props) => {
  const { handleChange, name, type, value, placeholder } = props;
  return (
    <div className="outside">
      <textarea type={type} onChange={handleChange} value={value} name={name} placeholder={placeholder} required />
    </div>
  )
}

export default Message
