const React = require('react');


class Edit extends React.Component{
  render() {
    const pokemon = this.props.pokemon
    const {poke} = this.props
    const index = poke.findIndex((pokemonOne) =>{ return pokemonOne.name === pokemon.name})
    return (
      <div> <h1>Edit Page</h1>     
     
     <form action={`/pokemon/${index}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={pokemon.name}/><br/>
          img: <input type="text" name="img" defaultValue={pokemon.img}/><br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </div>
    )
  }
}
module.exports= Edit;