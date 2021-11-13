import React, { Component } from 'react';

class Checkbox extends Component {
	render() {
		let inner = ""
		if(this.props.checked){
			inner = "✖"
		}
		return (
			<div className="custom-checkbox" onClick={this.props.onClick}>
				<span>{inner}</span>
			</div>
		);
	}
}

export default Checkbox;