import React from 'react';
import './Pokemon.css';


function Pokemon (props) {
	return(
		<div className="Pokemon">
				<img className="Pokemon_image" src={props.image} alt="pokemon"/>
				<div>
				<table className="Pokemon_table">
					<thead></thead>
					<tbody>
					<tr>
						<td>Types</td>
						<td>{props.types}</td>
					</tr>
					<tr>
						<td>Attack</td>
						<td>{props.attack}</td>
					</tr>
					<tr>
						<td>Deffence</td>
						<td>{props.deffence}</td>
					</tr>
					<tr>
						<td>HP</td>
						<td>{props.hp}</td>
					</tr>
					<tr>
						<td>SP Attack</td>
						<td>{props.sp_attack}</td>
					</tr>
					<tr>
						<td>SP Deffence</td>
						<td>{props.sp_deffence}</td>
					</tr>
					<tr>
						<td>Speed</td>
						<td>{props.speed}</td>
					</tr>
					<tr>
						<td>Weight</td>
						<td>{props.weight}</td>
					</tr>
					<tr>
						<td>Total moves</td>
						<td>{props.total_moves}</td>
					</tr>
					</tbody>
					<tfoot></tfoot>
				</table>
				</div>
		</div>
	)
}

export default Pokemon;