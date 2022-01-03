import PropTypes from "prop-types";
const Button = ({  text, color, bg, onClick }) => {

    return (
        <button onClick={onClick} style={{color: color, backgroundColor: bg}}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: 'Button',
    color: '#fff',
    bg: '#2b4ede'
}
Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button
