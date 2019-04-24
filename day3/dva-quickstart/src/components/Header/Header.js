import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
// import styles from './Header.css'
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "头部"
        }
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >NavBar</NavBar>
            </div>
        )
    }
}

export default Header