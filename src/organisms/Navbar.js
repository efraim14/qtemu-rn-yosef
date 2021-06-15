import React from 'react'
import Link from '../atoms/Link'
import NavbarList from '../molecules/NavbarList'

class Navbar extends React.Component {
    state = {
        leftLinks: [
            { className: "nav-link", href: "#", content: "Create Meetup" },
            { className: "nav-link", href: "#", content: "Explore" },
        ],
        rightLinks: [
            { className: "nav-link", href: "#", content: "Login" },
        ]
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#" content="QTemu" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavbarList items={this.state.leftLinks} className="me-auto" />
                        <NavbarList items={this.state.rightLinks} className="ms-auto" />
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar