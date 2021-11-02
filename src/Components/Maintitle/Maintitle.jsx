import React, { Component } from 'react'

export default class Maintitle extends Component {
    render() {
        return (
            <div>
                <p className="fs-1 fw-lighter px-5">{this.props.title}</p>
            </div>
        )
    }
}
