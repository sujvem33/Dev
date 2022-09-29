const React = require("react");
const DefaultLayout = require("./layouts/default");

class Edit extends React.Component {
  render() {
    const {type} = this.props;
    return (
      <DefaultLayout title="Edit Product Page">
         <form
          action={`/${type}/${this.props.product._id}?_method=PUT`}
          method="POST">
          Name:{" "}
          <input
            type="text"
            name="Name"
            defaultValue={this.props.product.Name}
          />
          <br />
          Description:{" "}
          <input type="text" name="Description" defaultValue={this.props.product.Description} />
          <br />
          Price:{" "}
          <input type="text" name="Price" defaultValue={this.props.product.Price} />
          <br />
          Image:{" "}
          <input type="text" name="Image" defaultValue={this.props.product.Image} />
          <br />
          Is Product Available: 
          {this.props.product.isProductAvailable ? (
            <input type="checkbox" name="isProductAvailable" defaultChecked />
          ) : (
            <input type="checkbox" name="isProductAvailable" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;