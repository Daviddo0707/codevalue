import {useDispatch} from "react-redux";
import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {Img, Wrapper, Text, Title, Description} from "./Item.Styled";
import {deleteItem,setSelectedItem} from '../../redux/productsSlice'

const Item = ({item}) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteItem(id))
    };


return (
    <Wrapper onClick={() => dispatch(setSelectedItem(item))}>
        <Img src="avatar.png" alt="Avatar"/>
        <Text>
            <Title>{item.name}</Title>
            <Description>{item.description}</Description>
        </Text>
        <IconButton aria-label="delete" onClick={() => handleDelete(item.id)}>
            <DeleteIcon/>
        </IconButton>
    </Wrapper>
);
}
export default Item;
