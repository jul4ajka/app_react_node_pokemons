import React from 'react';
import './Item.css';
import Types from './Types/Types'

function Item (props) {
	return (
		<div className="Item">
				<img className="Item_img" src={props.img} alt="pokemon"/>
				<p className="Item_name">{props.name}</p>
				<div className="Type_wrapper"> 
						{props.types ? 
										props.types.map((type, index) => {
											return(
												<Types key={index} type={type.type.name}  />
												)
							}): null
						}
				</div>
		</div>
	);
}

export default Item;