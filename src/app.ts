import Taro from '@tarojs/taro'
import { Component } from 'react'

import './app.less'
import bootstrap from './utils/bootstrap'

class App extends Component {

  componentDidMount (){
    bootstrap(Taro)
    console.log('挂载到Taro上的一些全局属性',Taro.$events)
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
