import React, {Component} from 'react';
import './splash.css';
import getGif from './getGif'

var gif = getGif()
var gifUrl = gif[0]
var gifTime = gif[1]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function LoadingMessage() {
  return (
      <>
          <img src={gifUrl} className='splash-screen' alt=''/>
      </>
  );
}

function withSplashScreen(WrappedComponent) {
  var url = window.location.href
  var loading = true
  if(url.indexOf('verify-mail') >= 0) {
    loading = false
  } 
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: loading,
      };
    }

    componentDidMount() {
        sleep(gifTime)
        .then(() =>
            this.setState({
            loading: false,
            })
        )
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;