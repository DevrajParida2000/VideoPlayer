//modifications yet to be done
import React from "react";

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      showVideo: false
    }
  }
handleVideo=()=> {
  this.setState({
    showVideo: !this.state.showVideo
  });
};
	render(){
		return (
      <div>
        <h1>Devraj's Anime Playlist</h1>
        {this.state.showVideo== false && (
        <div
          onClick={this.handleVideo}
          style={{
            backgroundColor: "grey",
            display :"inline-block",
            color: "white",
            padding: 20,
            margin: 40,
            borderRadius: 10
          }}>
          RADWIMPS - We'll Be Alright
        </div>
      )}  
      {this.state.showVideo == true && (
        <span>
        <iframe
          style={{
            width: "100%", 
            height: "100vh"
          }} 
           
          src="https://www.youtube.com/embed/O0ynFEiwLbY?autoplay=true" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
        <button
          onClick={this.handleVideo}
          style={{
            position: "absolute",
            left: 10,
            top: 100
          }}
        >
          back
        </button>
        </span>
      )}
      </div>
    );
	}
}


