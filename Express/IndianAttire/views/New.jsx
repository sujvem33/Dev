const React = require("react");
const DefaultLayout = require("./layouts/default");
class New extends React.Component {
  render() {
    const {type} = this.props;
    console.log(type);
    return (
      <DefaultLayout title={"New Product Page"}>
        <div>
          <form action={`/${type}`} method="POST">
            Name: <input type="text" name="Name" />
            <br />
            Description: <input type="text" name="Description" />
            <br />
            Price: <input type="text" name="Price" />
            <br />
            Image: <input type="text" name="Image" />
            <br />
            isProductAvailable <input type="checkbox" name="isProductAvailable" />
            <br />
            <input type="submit" name="" value="Create Product" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = New;