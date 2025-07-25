import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp';
import type { Dispatch, SetStateAction } from 'react';


const Navbar = ({show,setShow,title}:{show:boolean,setShow:Dispatch<SetStateAction<boolean>>,title:string}) => {
    return (
        <AppBar position="fixed" className='navbar' >
            <Toolbar className='navbar_toolbar'>
                <IconButton edge="start" color="inherit"onClick={() => setShow(!show)}>
                    <MenuOpenSharpIcon fontSize='large' />
                </IconButton>
                <Typography variant="h6">{title}</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar