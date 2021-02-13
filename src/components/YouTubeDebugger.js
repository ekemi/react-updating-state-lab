// Code YouTubeDebugger Component Here
import React, {Component} from 'react'
// 'core-js/library/fn/reflect/es7/metadata'

class YouTubeDebugger extends Component {

    constructor() {
        super()
        this.state = {
            errors: [],
  user: null,
  settings: {
    bitrate: 8,
    video: {
      resolution: '1080p'
    }
  }

        }
    }

    handleBitrateClick= ()=> {
        this.setState ({
            settings:{
                ...this.state.settings,
                bitrate:12
            }
        })
            
    }

handleResolutionClick =()=>{
    this.setState({
        settings: Object.assign({}, this.state.settings, {
          video: Object.assign({}, this.state.settings.video, {
            resolution:'720p'
          })
        })
      });
    
}
    render() {
        return(<div>
            <button className='bitrate' onClick={this.handleBitrateClick}>Click me!</button>
              <button className ='resolution' onClick={this.handleResolutionClick}>Click me!</button>  
            </div>)
    }
}

export default YouTubeDebugger;