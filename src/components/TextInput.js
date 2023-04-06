import '../styles/components/TextInput.css'

const TextInput = ({ value, onChange }) => {
    return (
        <input className="input" value={value} onChange={(e) => onChange(e.target.value)}/>
    );
}
 
export default TextInput;