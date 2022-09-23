const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show extends React.Component {
  render() {
    const {captainlog}= this.props;
      return (
        
      <DefaultLayout title={"Log Details"}>
        
        <div>

          {captainlog.title} and  {captainlog.entry}
          <br /> 
          {captainlog.isShipBroken ? "Ship is Broken":"Ship is not Broken"}
        <br/>
        <br/>
        <nav>
        <a href="/captainlogs"> Back to Logs Dashboard</a>
        </nav>
        
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;