import {useState} from "react";
import {useSelector} from "react-redux";
import {Grid} from "@mui/material";
import './App.css';
import SearchBar from './components/barActions/SearchBar';
import ItemsList from './components/list/ItemsList';
import Navbar from './components/navbar/Navbar';
import Sort from './components/barActions/Sort';
import AddItem from './components/barActions/AddItem';
import DisplayedItem from "./components/displayItem/DisplayedItem";


function App() {
    const {itemsList} = useSelector((state) => state.items);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("creationDate")

    return (
        <div className="App">
            <Navbar/>
            <AddItem/>
            <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
            <Sort sortBy={sortBy} setSortBy={setSortBy}/>
            <Grid container
                  spacing={2}
                  sx={{
                      margin: '20px auto',
                      maxWidth: "90vw",
                      width: "1500px"
                  }}>
                <Grid item xs={12} sm={6}>
                    <ItemsList itemsList={itemsList} searchTerm={searchTerm} sortBy={sortBy}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DisplayedItem/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
