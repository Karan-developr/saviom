import { Box, Container, Grid, Typography } from '@mui/material'

import react from 'react'


function Footer(){

    return(
        <Box sx ={{textAlign:'center',padding:'10px',marginTop:'auto' }}>
            <Typography variant='body2' color='text.secondary' > 
                2024 All Right Reserved
            </Typography>
        </Box>
    )
}

export default Footer