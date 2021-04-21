import { Events } from '@tarojs/taro'

export default (taro:any) => {
    taro.$events = new Events()
}