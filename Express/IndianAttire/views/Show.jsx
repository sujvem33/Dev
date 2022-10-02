const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show extends React.Component {
  render() {
    const {product}= this.props;
    const {type} = this.props;
      return (
      
      <DefaultLayout>
          <h3 className="showPageTitle"><a href={`/${type}`} className="showPageTitle"> {`${type}`} </a>{` /  ${product.Name}`} </h3> <br/>
          <div className="showPage">
              <div className="ShowpageImagebox"><img src={`${product.Image}`} className="ShowpageImage"></img></div>
         <div className="showpageDetails">
            <h2>{product.Name} </h2><br/>
            <h4>{product.Description}</h4><br/> 
            <h2 >{product.Price} inclusive of all taxes </h2> <br />
            Product is currently{" "} 
            {product.isProductAvailable
            ? "Available"
            : "Not Available"}
            <br/> <br/> <br/>            
            <button className="ButtonOnShowpage">Add to Cart</button> <br/>
            <button className="ButtonOnShowpage"> <a href={`/${type}/${product._id}/edit`} className="Editbutton" >Edit Product</a> </button> 
            <form action={`/${type}/${product._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" className="ButtonOnShowpage"/>
            </form>
        
        </div>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;