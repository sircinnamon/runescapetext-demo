import React, { Component } from 'react';
import ColorSelector from "./components/color_selector"
import EffectSelector from "./components/effect_selector"
import TextInput from "./components/text_input"
import ResponseDisplay from "./components/response_display"

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			color_selected: "yellow",
			effect_selected: "none",
			text: "",
			throttleSubmit: false,
			displayUrl: undefined
		}

		this.triggerSubmit = () =>{
			if(this.state.throttleSubmit){return}
			if(this.state.text===""){return}
			this.setState({
				displayUrl: this.generateUrl(),
				throttleSubmit: true
			})
			setTimeout(()=>{this.setState({throttleSubmit: false})}, 4000)

		}

		this.generateUrl = () => {
			let base = "https://mimir.sircinnamon.ca/rst/convert"
			let text = encodeURIComponent(this.state.text)
			let qp = `?${this.state.color_selected}&${this.state.effect_selected}&text=${text}`
			return base+qp

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
				<div>
					<TextInput
						currentText={this.state.text}
						updateText={(t)=>{this.setState({text: t})}}
						triggerSubmit={this.triggerSubmit}
					/>
				</div>
				<div>
					<ResponseDisplay
						currentUrl={this.state.displayUrl}
					/>
				</div>
			</div>
		);
	}
}

export default App;
