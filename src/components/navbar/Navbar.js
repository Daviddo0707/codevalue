import {AppBar, Box, Toolbar, Typography} from '@mui/material';

const Navbar = () => {
    return (
        <Box sx={{marginBottom: "10px"}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{flexGrow: 1}}>
                        CodeValue task
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
