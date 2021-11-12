import React, { Component } from 'react';

class EffectSelector extends Component {
	constructor(props){
		super(props)
		this.state = {

		}

		this.checkEffect = (effect, ev) => {
			// console.log(color)
			this.props.selectEffect(effect)
		}
	}
	render() {
		return (
			<div className="effect-selector checklist">
				<div style={{textAlign:"left"}}>
					<h2>Effects</h2>
					<EffectCheckbox onChange={this.checkEffect} current={this.props.effectSelected} effect="none"/>
					<EffectCheckbox onChange={this.checkEffect} current={this.props.effectSelected} effect="scroll"/>
					<EffectCheckbox onChange={this.checkEffect} current={this.props.effectSelected} effect="slide"/>
					<EffectCheckbox onChange={this.checkEffect} current={this.props.effectSelected} effect="wave"/>
					<EffectCheckbox onChange={this.checkEffect} current={this.props.effectSelected} effect="wave2"/>
					<EffectCheckbox onChange={this.checkEffect} current={this.props.effectSelected} effect="shake"/>
				</div>
			</div>
		);
	}
}

class EffectCheckbox extends Component {
	constructor(props){
		super(props)
		this.pickMe = (ev)=>this.props.onChange(this.props.effect, ev)
	}

	render() {
		return (
			<>
				<input type="checkbox" checked={this.props.current===this.props.effect} onChange={this.pickMe}/>
				<label onClick={this.pickMe}>{this.props.effect}</label>
				<br/>
			</>
		)
	}
}
EffectCheckbox.defaultProps = {
	onChange: (c,ev)=>{}
}

export default EffectSelector;