const React = require('react')


class Show extends React.Component {
    render () {
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
          };
        const pokemon = this.props.pokemon
        const {poke} = this.props
        const index = poke.findIndex((pokemonOne) =>{ return pokemonOne.name === pokemon.name})
         return (
           <div>
           <h1> Gotta Catch them all </h1>
             <h2 style={myStyle}>{pokemon.name}</h2>  
             <img src={pokemon.img + ".jpg"} alt="" />
             <a href="/pokemon">back</a>
             <form action={`/pokemon/${index}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/> {" "} {" "}  {" "} 
                          <a href={`/pokemon/${index}/edit`}>Edit Pokemon</a>
              </form>
           </div>
           );
          }
}
module.exports = Show;