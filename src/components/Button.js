import '../styles/components/Button.css'

const Button = ({ onClick }) => {
    return (
        <div className="button" onClick={onClick}>
            ADD TODO
        </div>
    );
}
 
export default Button;