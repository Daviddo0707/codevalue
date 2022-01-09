import TextField from '@mui/material/TextField';

const SearchBar = ({setSearchTerm,filteredList}) => {
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);

    }
    return <TextField  label="Search products.."  onChange={(e) => handleSearch(e)}/>
}

export  default  SearchBar;
