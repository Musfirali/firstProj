function Button({text}){
    if(!text){
        text = "XaXaXa"
    }
    return <button className="mt-3">{text}</button>
}

export default Button