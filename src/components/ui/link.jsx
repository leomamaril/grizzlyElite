
function NavbarLink(props){
    return(
        <li className="nav-items">
            <a className="nav-link text-white light-text mx-3" data-target={props.target} href={props.href}>{props.text}</a>
        </li>
    )
}

function FooterLink(props){
    return(
        <ul className="navbar-nav">
            <li className="nav-items">
                <a className="nav-link text-white light-text mx-3" data-target={props.target} href={props.href}>{props.text}</a>
            </li>
        </ul>
    )
}





export {NavbarLink, FooterLink};