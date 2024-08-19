import React from 'react';
import PropTypes from 'prop-types';

export const Card = (props) => {
    return (
    <div className="card col-3 me-3">
        <img src={props.imageURL} className="card-img-top" alt={props.imageAlt}/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
        </div>
    </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    imageURL: PropTypes.string,
    imageAlt: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string
}

Card.defaultProps = {
    title: 'Card title',
    imageURL: 'https://via.placeholder.com/500x325',
    imageAlt: 'Not found',
    description: 'Something',
    buttonLabel: 'Find Out More!'
}


