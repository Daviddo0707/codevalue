import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import {useDispatch} from "react-redux";
import {setSelectedItem} from "../../redux/productsSlice";

const AddItem = () => {
    const dispach = useDispatch()
    return (
        <Tooltip title="Add Item">
        <IconButton onClick={() => dispach(setSelectedItem({}))}>
            <AddCircleOutlineIcon sx={{ fontSize: 40 }}/>
        </IconButton>
        </Tooltip>
    )
}
export default AddItem;
