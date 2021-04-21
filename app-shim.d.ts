import Taro, { Component } from '@tarojs/taro'

declare module '@tarojs/taro' {
  // interface Component {
  //   $api: any
  // }
  const $events: any
}
