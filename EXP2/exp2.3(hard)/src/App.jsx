import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

const[user,setUser] = useState([])
  useEffect(() => {

    async function fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      console.log(response);
      const data = await response.json()
      setUser(data);
      console.log(data)

    }
    try {
      fetchUsers()
    }
    catch (error) {
      console.log(error.message
      )
    }
    fetchUsers()
  }, [])



  return (
    <div>
      <h1>User Details</h1>
      {user.map((usr) => (
        <div>
          <h2>{usr.name}</h2>
        
          <p><strong>Email:</strong> {usr.email}</p>
          <p><strong>Phone:</strong> {usr.phone}</p>
          <p><strong>Website:</strong> {usr.website}</p>
          <p><strong>Address:</strong> {usr.address.city}</p>
          <p><strong>Co-ordinates:</strong> {usr.address.geo.lat}</p>


        </div>
      ))}
    </div>
  )

  
// use for side rendering

const [counter, setcounter] = useState(0) 
 useEffect(()=> {
  console.log("hi")

  return () => {
    console.log("bye")
  }

 } ,[counter]) 


  return (
    <>
      {counter}
      <button onClick={()=>setcounter(counter+1)}>Increment</button>
    </>
  )
}

export default App












// function App() {
//   const [students, setStudents] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setStudents(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Error fetching data.");
//         setLoading(false);
//       });
//   }, []);

//   const filteredStudents = students.filter((student) =>
//     student.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Student Data Table</h1>

//       <input
//         type="text"
//         placeholder="Search by Name"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {loading && <h3>Loading...</h3>}

//       {error && <h3>{error}</h3>}

//       {!loading && !error && (
//         <table border="1" cellPadding="10">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>City</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredStudents.map((student) => (
//               <tr key={student.id}>
//                 <td>{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.email}</td>
//                 <td>{student.address.city}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default App;