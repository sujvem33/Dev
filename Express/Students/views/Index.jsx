const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component {
  render() {
      const {students} = this.props;
      console.log(students);
      return (
              <DefaultLayout title = {"StudentsDashboard"}>
               <nav>
                    <a href="/students/new">Register New Student</a>
                </nav>
                <ul>
                    {students.map((student,i) =>{
                        return <li key={i}>
                            <a href={`/students/${student.id}`}>
                                {student.name}</a> has a GPA of {student.gpa} <br/>
                                {student.isPassing ? "And is Eligible to Graduate":"And is not Eligible to Graduate"}
                                <br/>
                                
                                <a href={`students/${student._id}/edit`}>Edit Student</a> 
                                <form action={`/students/${student._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE"/>


                                </form>
                        </li>
                })}
                </ul>

              </DefaultLayout>
      );
  }
}
module.exports = Index;