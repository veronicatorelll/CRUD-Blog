import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
const [title, setTitle] = useState(``);
const [body, setBody] = useState(``);
const [author, setAuthor] = useState(`Veronica`);
const [isPending, setIsPending] = useState(false);
const history = useHistory();


const handleSubmit = (e) => {
e.preventDefault();
const blog = { title, body, author};


fetch ('http://localhost:3000/blogs' , {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(blog)
}).then (() => {
    console.log("added")
    setIsPending(false);
    history.push(`/`);


})


}

    return ( 
        <div className="create">
            <h2>Skapa en ny blogg</h2>
            <form onSubmit={handleSubmit}>  
                <label>Bloggtitel:</label>
                <input 
                type="text"
                required
                value={title}
                onChange = {(e) => setTitle (e.target.value)}
                />
             <label>Innehåll:</label>
             <textarea
                 required
                 value={body}
                onChange = {(e) => setBody (e.target.value)}
             ></textarea>
          <label>Författare:</label>
          <select
          value = {author}
          onChange={(e) => setAuthor (e.target.value)}
          >
              <option value="Veronica">Veronica</option>
              <option value="Niklas">Niklas</option>
              <option value="Dobby">Dobby</option>
          </select>
          {!isPending && <button>Skapa Blogg</button>}
          {isPending && <button disabled>Skapat!</button>}



            </form>
        </div>
     );
}
 
export default Create;