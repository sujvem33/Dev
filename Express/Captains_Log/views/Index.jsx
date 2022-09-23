const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component {
  render() {
      const {captainlogs} = this.props;
      console.log(captainlogs);
      return (
              <DefaultLayout title = {"Captain's Logs"}>
               <nav>
                    <a href="/captainlogs/new">Add New Log</a>
                </nav>
                <ul>
                    {captainlogs.map((captainlog,i) =>{
                        return <li key={i}>
                            <a href={`/captainlogs/${captainlog.id}`}>
                                {captainlog.title}</a>  {captainlog.entry} <br/>
                                {captainlog.isShipBroken ? "Ship is Broken":"Ship is not Broken"}
                                <br/>
                                <a href={`captainlogs/${captainlog._id}/edit`}>Edit Log</a> 
                                <form action={`/captainlogs/${captainlog._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE"/>
                                </form>
                        </li>
                })}
                </ul>
              </DefaultLayout>
      );
  }
}
module.exports = Index;