const React = require("react");
const DefaultLayout = require("./layouts/default");

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Log Page" >
         <form
          action={`/captainlogs/${this.props.captainlog._id}?_method=PUT`}
          method="POST"
        >
          Title:{" "}
          <input
            type="text"
            name="title"
            defaultValue={this.props.captainlog.title}
          />
          <br />
          Entry:{" "}
          <input type="text" name="entry" defaultValue={this.props.captainlog.entry} />
          <br />
          Is Ship Broken:
          {this.props.captainlog.isShipBroken ? (
            <input type="checkbox" name="isShipBroken" defaultChecked />
          ) : (
            <input type="checkbox" name="isShipBroken" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;