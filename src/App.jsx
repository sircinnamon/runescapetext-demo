import React, { Component } from 'react';
import ColorSelector from "./components/color_selector"
import EffectSelector from "./components/effect_selector"
import TextInput from "./components/text_input"

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			color_selected: "yellow",
			effect_selected: "none",
			text: "",
			awaitingResponse: false
		}

		this.triggerSubmit = () =>{
			if(this.state.awaitingResponse){return}
			console.log(this.state)
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>
						Runescape Text Demo
					</p>
				</header>
				<div style={{display:"flex"}}>
					<ColorSelector
						colorSelected={this.state.color_selected}
						selectColor={(c)=>{this.setState({color_selected: c})}}
					/>
					<EffectSelector
						effectSelected={this.state.effect_selected}
						selectEffect={(e)=>{this.setState({effect_selected: e})}}
					/>
				</div>
				<div style={{display:"flex"}}>
					<TextInput
						currentText={this.state.text}
						updateText={(t)=>{this.setState({text: t})}}
						triggerSubmit={this.triggerSubmit}
					/>
				</div>
			</div>
		);
	}
}

export default App;
