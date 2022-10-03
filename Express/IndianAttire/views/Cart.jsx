const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Cart extends React.Component {
  render() {
    const {product} = this.props;
      return (
              <DefaultLayout>
                   <div>
                   <form action="/product/<%= product._id %>/addCart" method="POST">
                      <label>Select Quantity</label>   <select name="quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                 <option value="3">3</option>
                        </select>
                               
                     </form>
                   </div>
              </DefaultLayout>  
      );
  }
}
module.exports = Cart;