import {useSelector} from "react-redux";
import {Button, Grid, TextField} from "@mui/material";
import * as Styled from '../list/ItemsList.Style';

const DisplayedItem = () => {
    const {selectedItem} = useSelector(state => state.items);
    return (
        <Styled.Div>
            <Grid container direction="column">
                <img src="fdffdfddf" alt=""/>
                <TextField label="name" value={selectedItem?.name || ""} sx={{marginBottom: "10px"}}/>
                <TextField multiline label="description" value={selectedItem?.description || ""} sx={{marginBottom: "10px"}}/>
                <TextField label="price" value={selectedItem.price || "" } sx={{marginBottom: "10px"}}/>
                <Button variant="contained" >Save</Button>
            </Grid>
        </Styled.Div>
    );
};

export default DisplayedItem;
