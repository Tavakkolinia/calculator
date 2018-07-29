import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
    
        <div>
          <input
            type="button"
            className="butoni"
            onClick={props.handleClick}
            value={props.label}
          />
        </div>
    );
}


Button.propTypes = {
    type: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default Button;