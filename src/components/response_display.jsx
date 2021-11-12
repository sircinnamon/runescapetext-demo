import React, { Component } from 'react';

class ResponseDisplay extends Component {
	constructor(props){
		super(props)
		this.state = {
			show_enlarged: true
		}

		this.toggleEnlarged = (ev) => {
			this.setState({show_enlarged: !!!this.state.show_enlarged})
		}

	}

	render() {
		let outImg = ""
		let img_class = ""
		let header = "Output (Actual Size -Click to see enlarged)"
		if(this.state.show_enlarged){
			header = "Output (Enlarged -Click to see actual size)"
			img_class = "enlarged"
		}
		if(this.props.currentUrl){
			outImg=(
				<img
					className={img_class}
					alt="Output"
					src={this.props.currentUrl}
					onClick={this.toggleEnlarged}
				/>
			)
		}
		return (
			<div className="response-display">
				<h3 onClick={this.toggleEnlarged}>{header}</h3>
				{outImg}
			</div>
		);
	}
}

export default ResponseDisplay;