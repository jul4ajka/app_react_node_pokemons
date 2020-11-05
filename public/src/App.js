import React, {Component} from 'react'
import './App.css'
import Header from './Header/Header'
import Item from './Item/Item'
import Pokemon from './Pokemon/Pokemon'
import Options from './Options/Options'


class App extends Component {
	state = {
			pokemonsArr: [],
			pokemonsMiddle: [],
			nextArr: 'https://pokeapi.co/api/v2/pokemon?limit=12',
			pokemonInfo: {},
			showPokemon: false,
			filtered: false,
			allTypes: []
	}

	getPokemons = (url) => {
		fetch(url)
		.then(response => response.json())
		.then(pokemons => {
			this.setState({
				pokemonsArr: pokemons.results,
				nextArr: pokemons.next
			})
			
			for (let i = 0; i < this.state.pokemonsArr.length; i++) {
				fetch(this.state.pokemonsArr[i].url)
				.then(response => response.json())
				.then(sprites => {
					let pokemonsCopy = this.state.pokemonsArr;
					
					pokemonsCopy[i].image = sprites.sprites.front_default;
					pokemonsCopy[i].types = sprites.types;
					
					this.setState({
						pokemonsArr: pokemonsCopy,
						filtered: pokemonsCopy
					})
				})
			}
		})
	}

	loadMore = () => {
	
			fetch(this.state.nextArr)
			.then(response => response.json())
			.then(pokemons => {
				this.setState({
					pokemonsMiddle: pokemons.results,
					nextArr: pokemons.next
				})
				
				for (let i = 0; i < this.state.pokemonsMiddle.length; i++) {
					fetch(this.state.pokemonsMiddle[i].url)
					.then(response => response.json())
					.then(sprites => {
						let pokemonsCopy = this.state.pokemonsMiddle;
						
						pokemonsCopy[i].image = sprites.sprites.front_default;
						pokemonsCopy[i].types = sprites.types;

						this.setState({
							pokemonsMiddle: pokemonsCopy
						})
					})
				}
				
				this.setState({
					filtered: this.state.filtered.concat(this.state.pokemonsMiddle),
					pokemonsArr: this.state.filtered.concat(this.state.pokemonsMiddle)
				})
		})
	}

	showItem = (url) =>  {
			fetch(url)
			.then(responce => responce.json())
			.then(pokemon => {
				this.setState({
					pokemonInfo: pokemon,
					showPokemon: true
				})
				
			})
	}

	filterItem = (event) => {
		let value = event.target.value
		
		if (value === 'Select all') {
			this.setState((previousState) => ({
				pokemonsArr: previousState.filtered
			}))
		} else if (this.state.filtered) {
			
			let filter = this.state.filtered.filter((pokemon) =>
			pokemon.types.length === 1 ? 
			pokemon.types[0].type.name === value.toLowerCase() : 
			pokemon.types[0].type.name === value.toLowerCase() 
			|| pokemon.types[1].type.name === value.toLowerCase())
			
			this.setState({
				pokemonsArr: filter
			})	

		} else {

			let filter = this.state.pokemonsArr.filter((pokemon) => 
			pokemon.types.length === 1 ? 
			pokemon.types[0].type.name === value.toLowerCase() : 
			pokemon.types[0].type.name === value.toLowerCase() 
			|| pokemon.types[1].type.name === value.toLowerCase())

			this.setState({
				pokemonsArr: filter
			})
		}	
	}

	getAllTypes = () => {
		fetch('https://pokeapi.co/api/v2/type/?limit=999')
		.then(response => response.json())
		.then(types => {
			this.setState({
				allTypes: types.results
			})
		})
	}
	
	componentDidMount() {
		this.getPokemons(this.state.nextArr)
		this.getAllTypes()
	}
		
	render() {
		return (
			<div className="App">
				<header className="Header_wraper">
						<Header />
						<select onChange={this.filterItem} className={'SelectPokemonsType'}>
							<option>Select all</option>
							{
								this.state.allTypes.map((type, index) => {
									return(
										<Options type={type.name} key={index}/>
									)
								})
							}
						</select>
				</header>
				<div className="Section_wrapper">
					<div className="Item_wrapper">
							{this.state.pokemonsArr.map((item, index) => { 
								return(
									<div onClick={this.showItem.bind(this, item.url)} key={index}>
										<Item name={item.name} img={item.image} types={item.types}  />	
									</div>
									)
								})	
						}
							<button className="Load_more" onClick={this.loadMore}>Load more</button>
						</div>
						<div className="Pokemon_wrapper">
							{this.state.showPokemon ? 
								<Pokemon 
								image={this.state.pokemonInfo.sprites.front_default} 
								types={this.state.pokemonInfo.types.length === 1 ? this.state.pokemonInfo.types[0].type.name 
									: this.state.pokemonInfo.types[0].type.name + " " + this.state.pokemonInfo.types[1].type.name}
								attack={(Math.random()*100).toFixed(0)}
								deffence={(Math.random()*100).toFixed(0)}
								hp={(Math.random()*100).toFixed(0)}
								sp_attack={(Math.random()*100).toFixed(0)}
								sp_deffence={(Math.random()*100).toFixed(0)}
								speed={(Math.random()*100).toFixed(0)}
								weight={(Math.random()*100).toFixed(0)}
								total_moves={(Math.random()*100).toFixed(0)}
								/> : null
							}
						</div>
				</div>	
			</div>
		);
	}
}

export default App;
