import {
    Component
} from 'react'
import { SearchBar } from 'antd-mobile';
import './Search.css'
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '美食',
        };
    }

    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    onChange = (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    }
    searchBar(type) {
        switch (type) {
            case '0':
                return <SearchBar placeholder="Search" maxLength={8} />
            case '1':
                return <SearchBar placeholder="自动获取光标" ref={ref => this.autoFocusInst = ref} />
            case '2':
                return <SearchBar placeholder="手动获取获取光标" ref={ref => this.manualFocusInst = ref} />
            case '3':
                return (
                    <SearchBar
                        value={this.state.value}
                        placeholder="Search"
                        onSubmit={value => console.log(value, 'onSubmit')}
                        onClear={value => console.log(value, 'onClear')}
                        onFocus={() => console.log('onFocus')}
                        onBlur={() => console.log('onBlur')}
                        onCancel={() => console.log('onCancel')}
                        showCancelButton
                        onChange={this.onChange}
                    />
                )
            default:
                return <SearchBar placeholder="Search" maxLength={8} />
        }
    }
    render() {
        // 父组件传过来的值
        let { type } = this.props
        return (
            <div>
                {/* v-if */}
                {this.searchBar(type)}
            </div>
        )
    }
}