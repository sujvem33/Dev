const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component {
  render() {
      const {products} = this.props;
      const {type} = this.props;
      

      
      console.log(products);
      console.log(type);
     
      return (
              <DefaultLayout title = {"Products Page"} >
               <nav>
                 <button className="ButtonOnpage">   <a href={`/${type}/new`}>Add New Product</a> </button>
                </nav>
                <ul>
                    {products.map((product,i) =>{
                        return <li key={i}>
                            <a href={`/${type}/${product.id}`}>
                                {product.Name}</a>  
                                <br/>   <br/>
                               <button class="ButtonOnpage"> <a href={`/${type}/${product._id}/edit`}>Edit Product</a> </button> {" "} 
                               <form action={`/${type}/${product._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE" class="ButtonOnpage"/>
                                </form>
                                <br/>
                        </li>
                })}      
                </ul>   
              </DefaultLayout>  
      );
  }
}
module.exports = Index;