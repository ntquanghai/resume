const Button = (props) => {
    return(
        <div className = "text-lg text-white font-semibold hover:text-gray-300 cursor-pointer">
            {props.text}
        </div>
    )
}

export default Button

