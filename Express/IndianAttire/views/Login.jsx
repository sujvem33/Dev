const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Login extends React.Component {
  render() {
    
      return (
              <DefaultLayout>
                    <div className="Newpage" >
                         <form action="/userlogin/login" method="post" className="newForm">
                            <fieldset>
                                <legend>Login Page</legend>
                                 <input type="text" name="username" placeholder='Enter your UserName' required /> 
                                 <input type="password" name="password" placeholder='Enter your Password' required />
                                <input type="submit" value="Login" className="submitBtn"  />
                             </fieldset>
                          </form>
                     </div>
              </DefaultLayout>  
      );
  }
}
module.exports = Login;