import MyData from '../Mydata'
import NewData from '../jsonData/NewData.json'

function Greetings({ IsLogins }) {
  if (IsLogins) {
    return (
      <>
        <MyData />
        <NewData />
      </>
    )
  }
}
export default Greetings
