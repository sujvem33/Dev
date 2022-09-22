const React = require('react')


class Index extends React.Component {
    render(){
        const { poke } = this.props;
        return (
          <div>
            <h1>See All The Pokemon!</h1>
            <ul>
            {poke.map((pokemon,i) => {
                  return <li key={i}>
                     <a href={`/pokemon/${i}`}>
                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                        </a> {' '}
                        <br />
                  </li>
              })}
            </ul>
          </div>
        );
      }
    }
module.exports = Index;
