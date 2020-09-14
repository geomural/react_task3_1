import React from 'react';
import Star from './Star';
import PropTypes from 'prop-types';
import shortid from 'shortid';

function Stars(props) {
    const {count} = props;

    let stars = [];
    if ((count > 0) && (count <= 5)) {
        for (let i = 0; i < count; i++) {
            stars.push(<Star key={shortid.generate()}/>);
        }
    }

    return (
        <ul className="card-body-stars u-clearfix">
            {stars}
        </ul>
    )
}

Stars.propTypes = {
    count: PropTypes.number.isRequired
}
export default Stars;