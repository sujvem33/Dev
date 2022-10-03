const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Userlogin extends React.Component {
  render() {
    
      return (
              <DefaultLayout>
                 <div className="Newpage">
                            <form className="newForm">
                                <fieldset>
                                    <legend>User Login</legend>
                                    <br/> 
                                    <a href="./userlogin/Signup"><button><label>  New User? Create an account</label> </button></a>{""} {""} {""} {""}
                                    <a href="./userlogin/Login"><button><label>Have an account? Sign In</label> </button></a>
                                    <br/> <br/>
                                 </fieldset>
                            </form>
                    </div>
                    
              </DefaultLayout>  
      );
  }
}
module.exports = Userlogin;