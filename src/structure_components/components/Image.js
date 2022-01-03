import Logo from '../../logo.svg';
const Image = ({src, alt, title}) => {
    return (
        <picture>
            <img src={src} alt={alt} title={title}/>
        </picture>
    )
}

Image.defaultProps = {
    src: Logo,
    alt: '',
    title: ''
}
export default Image
