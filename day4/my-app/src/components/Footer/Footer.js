import React from 'react'
import { connect } from 'react-redux'
class Footer extends React.Component {
    render() {
        return (
            <div>{this.props.author}</div>
        )
    }
}

export default connect((state) => {
    return { ...state }
})(Footer)