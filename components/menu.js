export default function Menu(props) {
    return (
        <a
        {...props}
        >
            {props.children}
        </a>
    );
}
