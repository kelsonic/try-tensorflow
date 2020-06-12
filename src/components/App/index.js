// Node modules.
import React, { Component } from 'react';
import get from 'lodash/get';
import map from 'lodash/map';
import multiply from 'lodash/multiply';
import isEmpty from 'lodash/isEmpty';
// Relative
import ImageDropzone from '../ImageDropzone';
import { Wrapper } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventImageError: '',
      imageURL: '',
      predictions: [],
    };
  }

  componentWillUnmount() {
    // Prevent memory leak.
    URL.revokeObjectURL(this.state.imageURL);
  }

  onImageDrop = (acceptedFiles) => {
    // Derive the imageURL.
    const file = get(acceptedFiles, '[0]');
    const imageURL = URL.createObjectURL(file);

    // Set the image in state.
    this.setState({ imageURL }, () => {
      // Load the model.
      window.mobilenet.load().then(model => {
        const image = document.getElementById('upload');

        // Classify the image.
        model.classify(image).then(predictions => {
          console.log('predictions', predictions);
          this.setState({ predictions });
        });
      });
    });
  };

  render() {
    const { onImageDrop } = this;
    const { eventImageError, imageURL, predictions } = this.state;

    return (
      <Wrapper>
        <img alt="logo" className="logo" src="https://www.gstatic.com/devrel-devsite/prod/v6d9a9c4ff910e26303d2496259d58a0deebff25b965fe32e6f4478e776a03445/tensorflow/images/lockup.svg" />
        {isEmpty(predictions) ? <p>How good is it at identifying things in images?<br /><br />Upload an image to find out...</p> : <p>Turns out not that great... lol</p>}

        {/* Error */}
        {eventImageError && <p className="error">{eventImageError}</p>}

        {/* Drag Image Area */}
        <ImageDropzone
          onDrop={onImageDrop}
          onDropRejected={(eventImageError) => this.setState({ eventImageError })}
        />

        {/* Uploaded Image */}
        {imageURL && (
          <div className="uploaded-image">
            <img alt="uploaded image" id="upload" src={imageURL} />
            {isEmpty(predictions) && <p>Gathering predictions...</p>}
            <ul>
              {map(predictions, (prediction) => (
                <li key={get(prediction, 'className')}>{multiply(get(prediction, 'probability'), 100).toFixed(2)}% - &quot;{get(prediction, 'className')}&quot;</li>
              ))}
            </ul>
          </div>
        )}
      </Wrapper>
    );
  }
}

export default App;
