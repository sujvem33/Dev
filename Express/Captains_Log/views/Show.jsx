const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show extends React.Component {
  render() {
    const {captainlog}= this.props;
      return (
        
      <DefaultLayout title={"Log Details"}>
        
        <div class="logbox">

          {captainlog.title} <br />   {captainlog.entry}
          <br /> 
          {captainlog.isShipBroken ? "Ship is Broken":"Ship is not Broken"} <br />Date created:
          {captainlog.createdAt.toString()} <br /> Date updated:
          {captainlog.updatedAt.toString()}
        <br/>
        <br/>
        <nav>
        <a href="/captainlogs" class="ButtonOnpage"> Back to Logs Dashboard</a>
        </nav>
        
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;