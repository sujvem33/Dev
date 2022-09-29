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


        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Home;