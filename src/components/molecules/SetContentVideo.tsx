import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default class SetContentVideo extends Component  {
  render () {
    return(
      <div>
        <h1>動画再生アプリ</h1>
        <ReactPlayer url='movie/sample.mp4' id="MainPlay" playing loop controls={true} width="160px" height="90px"/>
      </div>
    )
  }
}
