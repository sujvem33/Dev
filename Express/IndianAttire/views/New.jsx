const React = require("react");
const DefaultLayout = require("./layouts/default");
class New extends React.Component {
  render() {
    const {type} = this.props;
    console.log(type);
    return (
      <DefaultLayout >
        <h3 className="NewPageTitle"> Add New Product to {`${type}`}  </h3> <br />
        <div className="Newpage"> 
          <form action={`/${type}`} method="POST" className="newForm">
          <label> Name :</label> <input type="text" name="Name" required/>
            <br />
            <label>Description:</label> <input type="text" name="Description" required/>
            <br />
            <label>Price:</label> <input type="text" name="Price" required/>
            <br />
            <label>Image address:</label> <input type="text" name="Image" required/>
            <br />
            <label> Is Product Available: </label><input type="checkbox" name="isProductAvailable" />
            <br />
            <input type="submit" name="" value="Create Product" className="submitBtn"/>
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = New;