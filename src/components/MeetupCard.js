import React from 'react'

class MeetupCard extends React.Component {
    render() {
        return (
            <div className="col">
                <div className="card mx-3 mb-3 bg-light">
                    <div className="card-body">
                        <h5 className="card-title">{ this.props.date }</h5>
                        <p className="card-text">
                            { this.props.content }<br /><br />
                            <strong>{ this.props.visitor }</strong> went
                        </p>
                        <a href="#" className="btn btn-primary">View</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MeetupCard