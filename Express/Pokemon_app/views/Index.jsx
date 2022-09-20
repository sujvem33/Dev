const React = require('react')


class Index extends React.Component {
    render(){
        const { pokemon } = this.props;
        return (
          <div>
            <h1>See All The Pokemon!</h1>
            <ul>
            {this.props.pokemon.map((pokemon,i) => {
                  return <li key={i}>
                     <a href={`/pokemon/${i}`}>
                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                        </a> {' '}
                        <br />
                        <form action={`/pokemon/pokemon.id?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/>
                      </form>
                  </li>
  
              })}
            </ul>
          </div>
        );
      }
    }
module.exports = Index;
