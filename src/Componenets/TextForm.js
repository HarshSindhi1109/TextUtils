import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const upClick = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to Uppercase!', 'success');
  };

  const upChange = (event) => {
    setText(event.target.value);
  };

  const downClick = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to Lowercase!', 'success');
  };

  const clearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert('Text cleared!', 'success');
  };

  const copyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Text copied!', 'success');
  };

  const spaceRemoveClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extra spaces removed!', 'success');
  };
  return (
    <div
      className="mb-3 container"
      style={{ color: props.theme === 'dark' ? 'white' : '#042743' }}
    >
      <div className="textArea">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label my-3"
        >
          <h3>{props.heading}</h3>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          style={{
            resize: 'none',
            backgroundColor: props.theme === 'dark' ? '#13466e' : 'white',
            color: props.theme === 'dark' ? 'white' : '#042743',
          }}
          value={text}
          onChange={upChange}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={upClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={downClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-3 mx-0" onClick={clearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={copyClick}>
          Copy Text
        </button>
        <button
          className="btn btn-primary my-3 mx-0"
          onClick={spaceRemoveClick}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="previewArea"
        style={{ color: props.theme === 'dark' ? 'white' : '#042743' }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words
          and {text.trim().length} characters
        </p>
        <p>{0.008 * text.trim().split(' ').length} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string,
};
