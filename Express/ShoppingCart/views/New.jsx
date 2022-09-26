const React = require("react");
const DefaultLayout = require("./layouts/default");
class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Product Page"}>
        <div>
          <form action="/clothes" method="POST">
            Name: <input type="text" name="Name" />
            <br />
            Description: <input type="text" name="Description" />
            <br />
            Price: <input type="text" name="Price" />
            <br />
            Category <select name="Category" >
               <option value="Clothes">Clothes</option>
                 <option value="Shoes">Shoes</option>
                    </select>
            <br />
            isAvailable <input type="checkbox" name="isAvailable" />
            <br />
            <input type="submit" name="" value="Create Product" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = New;