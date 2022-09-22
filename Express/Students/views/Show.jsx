const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show extends React.Component {
  render() {
    const {student}= this.props;
      return (
        
      <DefaultLayout title={"Student Profile"}>
        
        <div>

          {student.name}'s grade is  {student.gpa}
          <br /> Student{" "}
          {student.isPassing
            ? "Is Eligible to Graduate"
            : "Is NOT Eligible to Graduate"}
        <br/>
        <br/>
        <nav>
        <a href="/students"> Back to Dashboard</a>
        </nav>
        
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;