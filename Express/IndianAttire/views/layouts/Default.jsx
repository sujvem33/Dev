const React = require("react");

class DefaultLayout extends React.Component {
  render() {
    return (
      <>
        <html>
          <head>
          <title>{this.props.title}</title>
            <link rel="stylesheet" href="/css/app.css"></link>
          </head>
          <body>
            
          
            <nav className="navbar"> 
                    <div className="nav">
                    <a href="/" > <img src="/images/logo.png" alt="logo" className="logo" /> </a>
                        <div className="nav-items">
                        <form class="search">
                             <input class="search" type="search" placeholder="Search products"></input>
                        </form>
                            <a href="/userlogin"><img src="/images/userimage.png"></img></a>
                            <a href="/cart"><img src="/images/carticon.png"></img></a>
                        </div>
                    </div>

                    <ul className="linksContainer">
                          
                          <li className="link-item"><a href="/coords" className="link"> Coords</a></li>
                          <li className="link-item"><a href="/dresses" className="link"> Dresses</a></li>
                          <li className="link-item"><a href="/lehengas" className="link"> Lehengas</a></li>
                          <li className="link-item"><a href="/sarees" className="link"> Sarees</a> </li>
                          <li className="link-item"><a href="/suits" className="link"> Suits</a></li>
                    </ul>
            </nav>
            <br /> 
            <h1>{this.props.title}</h1>
            <br /> 
            {this.props.children}
          <br /> <br />
          <footer className="footer">
              <div className="footercontent">
                <img src="/images/logo.png" alt="" className="footerlogo" />
                
                      <div className="Termslinks">
                        <p>CUSTOMER POLICIES</p>
                        <a href="#" className="sociallink">Terms Of Use</a>
                        <a href="#" className="sociallink">Privacy Policy</a>
                        <a href="#" className="sociallink">Shipping</a>
                        <a href="#" className="sociallink">Refund & Returns</a>
                        <a href="#" className="sociallink">Contact Us</a>
                      </div>
                      <div className="sociallinks">   
                           
                        <a href="#" className="sociallink"><img src="/images/fbicon.png" className="sociallogo"></img></a>
                        <a href="#" className="sociallink"><img src="/images/instaicon.png" className="sociallogo"></img></a>
                        <a href="#" className="sociallink"><img src="/images/Twittericon.png" className="sociallogo"></img></a>
                        <a href="#" className="sociallink"><img src="/images/YouTubelogo.jpg" className="sociallogo"></img></a>
                      </div> 
              </div>
                      <p class="Aboutus">About Company</p>
                      <p className="info">
                            The Indian-e-fashion was established to honour our country’s local artisans and weavers and we dedicate our efforts towards keeping traditional arts and weaves alive by using only exquisite handloom/handmade materials. We also customise the product of your choice to suit your needs like modifying sleeve design, length, fit and other specifications.
                      </p>
          </footer>
         
          </body>
          <script src="/js/main.js"></script>
        </html>
      </>
    );
  }
}
module.exports = DefaultLayout;