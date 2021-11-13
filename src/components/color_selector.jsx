import React, { Component } from 'react';
import Checkbox from "./checkbox"

class ColorSelector extends Component {
	constructor(props){
		super(props)
		this.state = {

		}

		this.checkColor = (color, ev) => {
			// console.log(color)
			this.props.selectColor(color)
		}
	}

	render() {
		return (
			<div className="color-selector checklist">
				<div style={{textAlign:"left"}}>
					<h2>Colors</h2>
					<ColorCheckbox onChange={this.checkColor} current={this.props.colorSelected} color="white"/>
					<ColorCheckbox onChange={this.checkColor} current={this.props.colorSelected} color="yellow"/>
					<ColorCheckbox onChange={this.checkColor} current={this.props.colorSelected} color="cyan"/>
					<ColorCheckbox onChange={this.checkColor} current={this.props.colorSelected} color="red"/>
					<ColorCheckbox onChange={this.checkColor} current={this.props.colorSelected} color="green"/>
					<ColorCheckbox onChange={this.checkColor} current={this.props.colorSelected} color="purple"/>
				</div>
				<div style={{marginLeft: "3em", "textAlign":"left"}}>
					<h2>Adv. Colors</h2>
					<ColorCheckbox onChange={this.checkColor} current={this.props.colorSelected} color="flash1"/>
					<ColorCheckbox onChange={this.checkColor} current={this.props.colorSelected} color="flash2"/>
					<ColorCheckbox onChange={this.checkColor} current={this.props.colorSelected} color="flash3"/>
					<ColorCheckbox onChange={this.checkColor} current={this.props.colorSelected} color="glow1"/>
					<ColorCheckbox onChange={this.checkColor} current={this.props.colorSelected} color="glow2"/>
					<ColorCheckbox onChange={this.checkColor} current={this.props.colorSelected} color="glow3"/>
				</div>
			</div>
		);
	}
}

class ColorCheckbox extends Component {
	constructor(props){
		super(props)
		this.pickMe = (ev)=>this.props.onChange(this.props.color, ev)
	}

	render() {
		return (
			<div className="checklist-row">
				{/*<input type="checkbox" checked={this.props.current===this.props.color} onChange={this.pickMe}/>*/}
				<Checkbox checked={this.props.current===this.props.color} onClick={this.pickMe} />
				<label onClick={this.pickMe}>{this.props.color}</label>
				<br/>
			</div>
		)
	}
}

ColorCheckbox.defaultProps = {
	onChange: (c,ev)=>{}
}
export default ColorSelector;