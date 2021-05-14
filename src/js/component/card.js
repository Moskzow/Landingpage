import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card h-100">
				<div className="card-body">
					<img src={props.src} className="img-fluid"></img>
					<h4 className="card-title">{props.title}</h4>
					<span className="badge rounded-pill bg-warning text-dark">
						€ {props.price}
					</span>
					<p className="card-text">{props.ingredients}</p>
				</div>
				<div className="card-footer text-center">
					<a href="#" className="btn btn-primary">
						Pídela
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	src: PropTypes.string,
	title: PropTypes.string,
	price: PropTypes.number,
	ingredients: PropTypes.string
};
