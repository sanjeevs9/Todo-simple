export function Todo({todos, onStatusChange}){

   return  <div>

    {todos.map((todo ,  index)=>{
        return  <div key ={index}>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <button onClick={()=>onStatusChange(index)}>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
    </div>
    })}

    </div>  
}