import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


function Header(){

    return(
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' sx={{flexGrow:1}}>
                    Saviom
                </Typography>

                <Button color='inherit' component={Link} to="/aboutus">About us</Button>

                <Button color='inherit' component={Link} to="/contactus">Contact us</Button>

            </Toolbar>
        </AppBar>
    )
}

export default Header