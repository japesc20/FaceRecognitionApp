import React, { Component, component } from 'react'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import './App.css';


const app = new Clarifai.App({
  apiKey: '546030d8a6d54de5b5bd7ebe1b417f09'
})


const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onSubmit = () => {
    console.log('click');
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then( 
    function(response) {
      console.log(response)
    },
    function(err) {

    }
    );
  }

  render() { 
  return (
    <div className="App">
      <Particles className='particles'
        params={particlesOptions} />
      <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onSubmit={this.onSubmit} 
        />
        <FaceRecognition />
    </div>
  )};
}

export default App;
