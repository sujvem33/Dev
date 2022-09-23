const React = require("react");
const DefaultLayout = require("./layouts/default");
class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Log Page"}>
        <div >
          <form action="/captainlogs" method="POST">
            title: <input type="text" name="title" required />
            <br />
            entry: <input type="text" name="entry" required />
            <br />
            Ship is Broken<input type="checkbox" name="isShipBroken" />
            <br />
            <input type="submit" name="" value="Create Log" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = New;