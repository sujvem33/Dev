const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component {
  render() {
      const {captainlogs} = this.props;
      console.log(captainlogs);
      return (
              <DefaultLayout title = {"Captain's Logs"} >
               <nav>
                 <button class="ButtonOnpage">   <a href="/captainlogs/new">Add New Log</a> </button>
                </nav>
                <ul>
                    {captainlogs.map((captainlog,i) =>{
                        return <li key={i}>
                            <a href={`/captainlogs/${captainlog.id}`}>
                                {captainlog.title}</a>  
                                <br/>   <br/>
                               <button class="ButtonOnpage"> <a href={`captainlogs/${captainlog._id}/edit`}>Edit Log</a> </button> {" "} 
                               <form action={`/captainlogs/${captainlog._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE" class="ButtonOnpage"/>
                                </form>
                                <br/>
                        </li>
                })}
                </ul>
              </DefaultLayout>
      );
  }
}
module.exports = Index;