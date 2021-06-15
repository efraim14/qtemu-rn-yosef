import React from 'react'
import Link from '../atoms/Link'

class NavbarList extends React.Component {
    state = {
        links: this.props.items.map((item) => 
            <li className="nav-item">
                <Link className={item.className} href={item.href} content={item.content} />
            </li>
        )
    }
    render() {
        return (
            <ul className={`navbar-nav mb-2 mb-lg-0 ${this.props.className}`}>
                { this.state.links }
            </ul>
        )
    }
}

export default NavbarList