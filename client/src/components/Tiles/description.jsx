import React from 'react';
import PropTypes from 'prop-types';

const Description = (props)=> {
    const componentClasses = ["description"];
    if (props.show) { componentClasses.push("show"); }
    return(
      <p className={componentClasses.join(" ")}>{props.input}</p>
    )
}

Description.propTypes = {
  show: PropTypes.bool.isRequired
};

export default Description;