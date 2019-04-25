import React from 'react'
import AppBar from '../../components/AppBar/AppBar';
import BottomBar from '../../components/BottomBar/BottomBar';
import Cards from '../../components/Cards/Cards';
export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <AppBar />
                <BottomBar />
                <Cards />
                <Cards />
            </div>
        )
    }
}