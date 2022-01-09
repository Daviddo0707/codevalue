import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
const Sort = ({setSortBy,sortBy}) => {

    return (
        <Select className= "sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)} name="sortBy">
            <MenuItem value="creationDate">Recently added</MenuItem>
            <MenuItem value="name">Name</MenuItem>
        </Select>
    )
}

export default Sort;
