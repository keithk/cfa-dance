import React, { Component } from 'react';
import './Submit.scss';
import Firebase from 'firebase';

const party = 1234; // set the value of the party we are in!
var fb = new Firebase("https://cfa-dance-party.firebaseio.com/"+party);
function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
} // http://stackoverflow.com/questions/3452546/javascript-regex-how-to-get-youtube-video-id-from-url

export default class extends Component {
  constructor(props) {
    super();
  }
  submitSong(e) {
    e.preventDefault();
    let song = e.target.song.value; // The URL of the song
    let id = youtube_parser(song);
    if (id) {
      fb.push({
        title: "Youtube Video",
        id: youtube_parser(song)
      });
      e.target.song.value = '';
    }
    e.target.song.value = 'Invalid Song URL?';
    return;
  }
  render() {
    return (
      <div className='songContainer'>
        <form id="song" name="song" onSubmit={this.submitSong}>
          <input type='text' id='song' ref='song' placeholder="youtube url goes here" />
          <button type='submit' className='icon' id='submit'>🎉</button>
        </form>
      </div>
    );
  }
}
