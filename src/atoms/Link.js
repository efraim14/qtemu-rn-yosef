import React from 'react'

class Link extends React.Component {
    render() {
        return (
            <a className={ this.props.className } href={ this.props.href }>{ this.props.content }</a>
        )
    }
}

export default Link