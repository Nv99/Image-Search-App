import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import SearchImages from "./api" ;
import './App.css' ;

function App(){

    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
       const result = await  SearchImages(term);
       setImages(result);
    };

    return <div className="main-container"> 
             <SearchBar onSubmit = {handleSubmit}/>
             <ImageList images = {images}/>
         </div>
}
export default App;