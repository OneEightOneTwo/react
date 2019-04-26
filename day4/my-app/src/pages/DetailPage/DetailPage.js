import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
export default connect((state) => {
    console.log(state)
    return { ...state }
})(class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                detail页面
                <Header />
                <Footer />
            </div>
        )
    }
})