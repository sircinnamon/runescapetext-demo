import React, { Component } from 'react';

class TextInput extends Component {
	constructor(props){
		super(props)
		this.state = {

		}

		this.updateText = (ev) => {
			// console.log(color)
			this.props.updateText(ev.target.value)
		}

		this.handleKeyPress = (ev) => {
			if(ev.key === 'Enter'){
				this.props.triggerSubmit()
			}
		}


	}

	render() {
		return (
			<div className="text-input">
				<input
					type="text"
					onChange={this.updateText}
					onKeyUp={this.handleKeyPress}
					value={this.props.currentText}
					placeholder="Your message here..."
				/>
			</div>
		);
	}
}

export default TextInput;