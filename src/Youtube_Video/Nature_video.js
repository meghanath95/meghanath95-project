import React, {Component} from 'react';

const API = 'AIzaSyChIlYuL09kE2wGOXsRJMGBULTfoe5Ma-U'
const channelID = 'UCyb8niqIlrSZY5EIdX-DMJA'
const result = 2;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

class Youtube extends Component {

  constructor(props){
    super(props);

    this.state = {
      resultyt: []
    };
    this.clicked = this.clicked.bind(this);
  }
clicked(){
  fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultyt});
      })
      .catch((error) => {
        console.error(error);
      });
}

  render(){
    console.log(this.state.resultyt);

    return(
      < div>
        <button onClick={this.clicked}>Get youtube videos</button>
          {
            this.state.resultyt.map((link, i) => {
              console.log(link);
              var frame = <div key={i} className="youtube">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/vq9m5oa6mVs" frameborder="0" allowfullscreen></iframe></div>
                  return frame;
            })
          }
          {this.frame}
    </div>
    );
  }
}

export default Youtube;