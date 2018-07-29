import React from 'react';
import PropTypes from 'prop-types';
import ScreenRow from './screenRow';

const Screen = (props) => {
    return (
        <div className="screen">
          <ScreenRow className="input-screen" value={props.question} />
          <ScreenRow className="output-screen" value={props.answer} />
        </div>
    );
}

Screen.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
}

export default Screen;