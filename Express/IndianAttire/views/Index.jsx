const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component {
  render() {
      const {products} = this.props;
      const {type} = this.props;
      console.log(products);
      console.log(type);
      return (
              <DefaultLayout>
                
               <nav>
                  <a href={`/${type}/new`} className="AddProductButton">Add New Product</a>
                </nav>
                <br />
                <div className='Indexpage'>
                <div className="allProducts">
                    {products.map((product,i) =>{
                        return <div key={i} className="eachProduct">
                            <a href={`/${type}/${product.id}`}>
                            <img src={`${product.Image}`} className="productImage"></img> </a>  <br />  
                                {product.Name} <br /> 
                                Price  : {product.Price} 
                        </div>
                })}      
                </div>  
                </div> 
                {/* <a href="/user/logout"><button>Logout</button></a> */}
              </DefaultLayout>  
      );
  }
}
module.exports = Index;