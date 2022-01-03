const FooterItem = (props) => {
    return (
        <div className="footerItem">
            <span>{props.text}</span>
        </div>
    )
}

FooterItem.defaultProps = {
    text: "Footer Item"
}

export default FooterItem
