import React, {Component} from 'react';
import './Types.css';


class Types extends Component {
	render() {
		return(
			<div className="Types">
				{ this.props.type === "grass" ? 
				<span className={"Types_item_grass"}>{this.props.type}</span> 
				: this.props.type === "poison" ? 
				<span className="Types_item_poison">{this.props.type}</span>
				: this.props.type === "fire" ?
				<span className="Types_item_fire">{this.props.type}</span>
				: this.props.type === "normal" ?
				<span className="Types_item_normal">{this.props.type}</span> 
				: this.props.type === "fighting" ?
				<span className="Types_item_fighting">{this.props.type}</span>
				: this.props.type === "flying" ?
				<span className="Types_item_flying">{this.props.type}</span>
				: this.props.type === "ground" ? 
				<span className="Types_item_ground">{this.props.type}</span>
				: this.props.type === "rock" ?
				<span className="Types_item_rock">{this.props.type}</span> 
				: this.props.type === "bug" ? 
				<span className="Types_item_bug">{this.props.type}</span>
				: this.props.type === "ghost" ?
				<span className="Types_item_ghost">{this.props.type}</span>
				: this.props.type === "steel" ?
				<span className="Types_item_steel">{this.props.type}</span>
				: <span className="Types_item_default">{this.props.type}</span>
				}
			</div>
		) 
	}
}

export default Types;