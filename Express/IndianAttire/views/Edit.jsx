const React = require("react");
const DefaultLayout = require("./layouts/default");

class Edit extends React.Component {
  render() {
    const {type} = this.props;
    return (
      <DefaultLayout>
        <h3 className="editPageTitle"> Edit {`${this.props.product.Name}`} </h3> <br />
        <div className="editPage">
         <form
          action={`/${type}/${this.props.product._id}?_method=PUT`}
          method="POST" className="editForm">
          Name :{" "}
          <input
            type="text"
            name="Name"
            defaultValue={this.props.product.Name}
            required />
          <br />
          Description:{" "}
          <input type="text" name="Description" defaultValue={this.props.product.Description}required />
          <br />
          Price:{" "}
          <input type="text" name="Price" defaultValue={this.props.product.Price} required />
          <br />
          Image:{" "}
          <input type="text" name="Image" defaultValue={this.props.product.Image} required />
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
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;