import {  useEffect, useRef , useState} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth , db } from "./config";
auth
// import { useNavigate } from "react-router-dom";
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";

function App() {
  const [todo , setTodo] = useState([]);
  const todoVal = useRef()
//  const navigate = useNavigate() ; 
 
 

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("logged in h");
        // const uid = user.uid;
 //func getData from fire base
 async function getData() {
  const q = query(collection(db, "todos"),orderBy('postTime' , 'asc'))
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
      if(doc.data().uid == auth.currentUser.uid){
        todo.push(doc.data().Todo)
        setTodo([...todo])
        console.log(todo);
      } 
  });
} //..getData func ended ..//
getData()
      }else {
        console.log("user ni h");
        // navigate("/login")
      }
    });
   
    
  } , [])

  const saveData = async ()=> {
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        Todo : todoVal.current.value,
        postTime: serverTimestamp() ,
        uid: auth.currentUser.uid
      });  
      console.log(todoVal.current.value + " pushed " + "Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }
  

const addTodo = (event)=>{
  event.preventDefault();
  todo.push(todoVal.current.value);
  setTodo([...todo]); 
  console.log(todo);
  saveData()
  todoVal.current.value = [ ] ;
}
const dltTodo = (index)=>{
  todo.splice(index,1) ;
  setTodo([...todo]); 
}
const editTodo = (index)=>{
  const newVal = prompt("Enter your new value..")
  if(0<newVal.length){
    todo.splice(index,1 , newVal) ;
    setTodo([...todo]); 
  }else{
    alert("Unable to find your edited value. :)")
    setTodo([...todo]); 
  }
}





  return (
    <>
<div className="py-5 h-auto min-h-screen bg-cover bg-gradient-to-r from-indigo-950 via-slate-400 to-teal-600 ...">



    <div className="w-3/4 mx-auto text-center">
  <h1 className="text-4xl  text-center font-bold dark:text-slate-900 leading-tight mb-2 border-t-4 border-b-4 border-slate-700 py-4">
    To-Do App
  </h1>
  <p className="lg:text-lg md:text-lg sm:text-md text-slate-950 mb-8">Stay on top of your day with our intuitive to-do app.</p>
</div>
    <div className="max-w-md m-auto mt-5">
    <div className="border-3 border-gray-300 border-t-2 m-3 mt-9 border-b-2 rounded-xl p-5 bg-slate-950">

{/* <button onClick={logout} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Logout</button> */}

      <form onSubmit={addTodo}>
      <div className="relative gap-9 flex z-0 w-74 mb-4 mt-2 group">
      <input ref={todoVal} type="text"  className="block text-center w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-400 peer" placeholder=" " required />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Text Here..</label>
      <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-1">ADD</button>
  </div>
      </form>
      <ul className="todo-list text-center border rounded-md mt-6 bg-slate-900">
    {todo.length > 0 ? todo.map((item , index)=>{
      return (<div key={index}>
        <li className="text-gray-100 border-b pr-2 p-1 pl-2 border-slate-500 border-t m-3 flex justify-between rounded-lg">{item}<span><button onClick={()=>dltTodo(index)} className="text-red-500 me-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</button>
        <button onClick={()=>editTodo(index)} className="align-self-end text-cyan-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
</button></span> </li>
      </div>
      )
    }) : <h1 className="text-zinc-400 p-2 font-mono font-semi-bold">No Todos Found!</h1> }
                </ul>
    </div>
    
    </div>



    </div>
    </>
  )
}

export default App
