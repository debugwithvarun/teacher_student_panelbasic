
import {   Drawer, IconButton, List, ListItem } from '@mui/material'
import { Link } from 'react-router-dom';

const Sidebar = ({show,sidebarmenu}:{show:boolean,sidebarmenu:{id:number,title:string,icon:JSX.Element}[]}) => {
    return (
        <Drawer variant="persistent" className='sidebar' open={show} anchor='bottom'>
            <List className='sidebar_list'>
                {sidebarmenu.map(item => (
                    <ListItem component={Link} to={`/${item.title.toLowerCase()}`} className='sidebar_item' key={item.id}>
                        <IconButton edge="start" color="inherit" aria-label="menu" size='large' className='sidebar_icon'>
                            {item.icon}
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default Sidebar;

           