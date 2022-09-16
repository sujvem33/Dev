const React = require('react')


class Show extends React.Component {
    render () {
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
          };
        const pokemon = this.props.pokemons
         return (
           <div>
           <h1> Gotta Catch them all </h1>
             <h2 style={myStyle}>{pokemon.name}</h2>  
             <img src={pokemon.img + ".jpg"} alt="" />
             <a href="/pokemon">back</a>
           </div>
           );
          }
}
module.exports = Show;