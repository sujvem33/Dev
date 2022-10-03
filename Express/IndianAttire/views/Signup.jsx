const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Signup extends React.Component {
  render() {
    
      return (
              <DefaultLayout>
                    <div className="Newpage">
                            <form action="/userlogin/signup" method="post" className="newForm">
                                <fieldset>
                                    <legend>New User</legend>
                                    <input type="text" name="Name" placeholder='Enter New UserName' required/>
                                    <input type="password" name="password"  placeholder='Set New Password' required />
                                    <input type="submit" value="Create Account" className="submitBtn" />
                                 </fieldset>
                            </form>
                    </div>
              </DefaultLayout>  
      );
  }
}
module.exports = Signup;