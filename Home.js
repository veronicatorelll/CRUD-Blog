import Bloglist from "./Bloglist";
import useFetch from "./useFetch";


const Home = () => {
  const {data: blogs, isPending, error} = useFetch("http://localhost:3000/blogs");



    return (
        <div className="home">
            { error && <div> {error} </div>}
            {isPending && <div>Laddar...</div>}
       {blogs && <Bloglist blogs ={blogs} title="Alla bloggar!"/>}
       </div>
      );
}
 
export default Home;