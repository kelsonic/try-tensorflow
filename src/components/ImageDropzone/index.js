// Node modules.
import React from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
// Relative imports.
import imageIcon from 'assets/image.svg';
import { Wrapper } from './styles';

const ImageDropzone = ({ onDrop, onDropRejected, onFileDialogCancel }) => {
  // Use Dropzone with options.
  const options = {
    accept: ['image/jpeg', 'image/png', 'image/svg+xml'],
    maxSize: 10485760,
    multiple: false,
    onDrop,
    onDropRejected,
    onFileDialogCancel,
  };
  const { getRootProps, getInputProps } = useDropzone(options);

  return (
    <Wrapper className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      <img alt="upload icon" src={imageIcon} />
      <h3>Drag & drop or click to add an image.</h3>
    </Wrapper>
  );
};

ImageDropzone.propTypes = {
  onDrop: PropTypes.func,
  onDropRejected: PropTypes.func,
  onFileDialogCancel: PropTypes.func,
};

ImageDropzone.defaultProps = {
  onDrop: () => {},
  onDropRejected: () => {},
  onFileDialogCancel: () => {},
};

export default ImageDropzone;
