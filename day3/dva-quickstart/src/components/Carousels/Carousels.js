import {
    Component
} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import './Carousels.css'
export default class Carousels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
        }
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: [
                    'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1900933280,2139434160&fm=173&app=49&f=JPEG?w=218&h=146&s=71B58F744CEBA72C78903DD30300E0BE',
                    'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2915932043,1671112287&fm=173&app=49&f=JPEG?w=218&h=146&s=57B687640CEA25285C3020D60300C0BD',
                    'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2987777570,4137202578&fm=173&app=49&f=JPEG?w=218&h=146&s=5E06176404F016321595FC870300A0E9'],
            });
        }, 100);
    }
    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={false}
                    infinite
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}