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
          <label> Name :</label>
          <input type="text"name="Name" defaultValue={this.props.product.Name} required />
          
          <label>Description:</label>
          <input type="text" name="Description" defaultValue={this.props.product.Description}required />
          <br />
          <label>Price:</label>
          <input type="text" name="Price" defaultValue={this.props.product.Price} required />
          <br />
          <label>Image address:</label>
          <input type="text" name="Image" defaultValue={this.props.product.Image} required />
          <br />
          <label> Is Product Available: </label>
          {this.props.product.isProductAvailable ? (
            <input type="checkbox" name="isProductAvailable" defaultChecked />
          ) : (
            <input type="checkbox" name="isProductAvailable" />
          )}
          <br />
          <input type="submit" value="Submit Changes" className="submitBtn" />
        </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;