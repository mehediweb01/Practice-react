import './Card.css'
import student from './jsonData/JSONData.json'

function StudentInfo() {
  // const {fName, lName,gender,age,number} = props;
  const cardInfo = {
    // object style
    backgroundColor: '#173754',
    margin: '10px auto',
    width: 'max-content',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    fontSize: '22px',
  }
  return (
    <>
      {student.people.map(studentInfo => (
        <div style={cardInfo} key={studentInfo.id}>
          <p
            style={{ borderBottom: '1px solid black' }}
          >{`First Name : ${studentInfo.firstName}`}</p>
          <p style={{ borderBottom: '1px solid black' }}>
            Last Name: {studentInfo.lastName}
          </p>
          <p style={{ borderBottom: '1px solid black' }}>
            gender : {studentInfo.gender}
          </p>
          <p style={{ borderBottom: '1px solid black' }}>
            age : {studentInfo.age}
          </p>
          <p style={{ borderBottom: '1px solid black' }}>
            Number : {studentInfo.number}
          </p>
        </div>
      ))}
    </>
  )
}
export default StudentInfo
