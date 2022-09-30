const React = require("react");
const DefaultLayout = require("./layouts/default");
class Home extends React.Component {
  render() {
    
    return (
      <DefaultLayout>
        <div>


            <header className="header">
                <div className="header-wrapper">
                    <div className="rleftpanel">left</div>
                    <div className="title"><h1>Indian Attire</h1></div>
                    <div className="rightpanel">right</div>
                </div>
            </header>

            <div className="pageNavigationBar">
                 <button> <a href="/coords"> Coords</a> </button> {""}
                 <button> <a href="/dresses"> Dresses</a>  </button> {""}
                 <button> <a href="/lehengas"> Lehengas</a>  </button> {""}
                 <button> <a href="/sarees"> Sarees</a> </button> {""}
                 <button> <a href="/suits"> Suits</a> </button> {""}
            </div>


            <footer className="footer">
            <div class="footer-wrapper">
                        <button>About Us</button>
                        <a href="https://www.instagram.com" >
                            <img src="https://www.pngkit.com/png/full/1-13187_instagram-logo-new-vector-eps-free-download-logo.png" className="instalogo"></img>
                        </a>
                        
                        <a href="https://www.facebook.com">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png" className="facebooklogo"></img>
                        </a> 
            </div>
        </footer>


        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Home;