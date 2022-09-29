const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show extends React.Component {
  render() {
    const {product}= this.props;
    // const {type} = this.props;
      return (
        
      <DefaultLayout title={"Product Details"}>
        
        <div>

          {product.Name} <br/> Description : {product.Description} <br/> Price :  {product.Price} <br />
          <br />  <img src={`${product.Image}`}></img> <br />Product is currently{" "} 
          {product.isProductAvailable
            ? "Available"
            : "Not Available"}
        <br/>
        <br/>
        <nav>
        <a href={`/clothes`}> Back to Products Page</a>
        </nav>
        
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;