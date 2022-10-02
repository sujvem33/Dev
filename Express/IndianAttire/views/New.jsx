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
            Name: <input type="text" name="Name" required/>
            <br />
            Description: <input type="text" name="Description" required/>
            <br />
            Price: <input type="text" name="Price" required/>
            <br />
            Image: <input type="text" name="Image" required/>
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