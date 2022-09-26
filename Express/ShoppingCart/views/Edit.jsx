const React = require("react");
const DefaultLayout = require("./layouts/default");

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Product Page">
         <form
          action={`/clothes/${this.props.product._id}?_method=PUT`}
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
          Category:{" "}
          <select name="Category" >
               <option value="Clothes">Clothes</option>
                 <option value="Shoes">Shoes</option>
                    </select>
          <br />
          Is Available:
          {this.props.product.isAvailable ? (
            <input type="checkbox" name="isAvailable" defaultChecked />
          ) : (
            <input type="checkbox" name="isAvailable" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;