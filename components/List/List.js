import React, { Component } from 'react';
import './List.scss';
import Firebase from 'firebase';
import _ from 'lodash';
import YouTube from 'react-youtube';

const party = 1234;
var fb = new Firebase("https://cfa-dance-party.firebaseio.com/" + party);

export default class extends Component {
  constructor(props) {
    super();
    this.state = { videos: [] };
  }
  componentDidMount() {
    let videos;
    fb.on("value", function(snapshot) {
      videos = _.reverse(_.values(snapshot.val()));
      this.setState({ videos: videos });
    }.bind(this));
  }
  render() {
    let videoList = this.state.videos.map(function(video) {
      return(<YouTube
        videoId={video.id}
        opts={{height: 195, width: 320}}
        key={video.id}
      />)
    });

    console.log(videoList);
    return(<div>{videoList}</div>);
  }
}
