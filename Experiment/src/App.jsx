
// import { getDatabase, ref, set} from "firebase/database" // for firebase realtime 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"  // for firebase authentication
import { app } from "./firebase"

// const db = getDatabase(app); //it was the instance made to connect the firbase realtime database

const auth = getAuth(app) //instance creation to use app and connect with database for the authentication purpose

function App() {

  // **example to insert data in firebase realtime databse
  // const dataInsert=()=>{
  //   set(ref(db,'users/pinku'),{
  //     id:1,
  //     name:"Pinku Modi",
  //     profession: "developer",
  //     number: "+1294682987",
  //   });
  // }

  const signUpUser = () => {
    createUserWithEmailAndPassword
      (auth,
        "pinku123@gmai.com",
        "Pinku1234"
      ).then((value) => console.log(value))
      .catch((err)=>console.log(err))
  }

  return (
    <>
      <h1>Firebase React App</h1>
      {/* <button onClick={dataInsert}>Insert Data</button> */}
      <button onClick={signUpUser}>Create User</button>
    </>
  )
}

export default App
