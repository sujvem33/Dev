const React = require("react");

class DefaultLayout extends React.Component {
  render() {
    return (
      <>
        <html>
          <head>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="/css/app.css"></link>

            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
          </head>
          <body>
            <h1>{this.props.title}</h1>
            
            <nav className="navbar"> 
                    <div className="nav">
                        <img src="/images/logo.png" alt="logo" className="logo" />
                        <div className="nav-items">
                            <div className="search">
                                <input type="text" class="search-box" placeholder="search products" />
                                <button className="searchbtn">search</button>
                            </div>
                            <a href="#"><img src="/images/userimage.png"></img></a>
                            <a href="#"><img src="/images/carticon.png"></img></a>
                        </div>
                    </div>

                    <ul className="linksContainer">
                          <li className="link-item"><a href="/" className="link"> Home</a></li>
                          <li className="link-item"><a href="/coords" className="link"> Coords</a></li>
                          <li className="link-item"><a href="/dresses" className="link"> Dresses</a></li>
                          <li className="link-item"><a href="/lehengas" className="link"> Lehengas</a></li>
                          <li className="link-item"><a href="/sarees" className="link"> Sarees</a> </li>
                          <li className="link-item"><a href="/suits" className="link"> Suits</a></li>
                    </ul>
            </nav>

            


            {this.props.children}
          </body>
          <script src="/js/main.js"></script>
        </html>
      </>
    );
  }
}
module.exports = DefaultLayout;