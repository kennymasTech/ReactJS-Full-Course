
import { useContext } from "react";
import Feed  from "./Feed";
import DataContext from "./context/DataContext";



const Home = () => {

  const { searchResult, fetchError, isLoading } = useContext(DataContext)

  return (
    <main className="Home">
      { isLoading && <p className="statusMsg">Loading Posts...</p>}
      {!isLoading && fetchError && <p className="statusMsg" style={{color: "red"}}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResult.length ? <Feed posts={searchResult}/> : <p className="statusMsg">No Post To Display</p>)}
    </main>
  );
};

export default Home;