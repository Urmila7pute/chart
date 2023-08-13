import React from "react"
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

const ListItemsArray = ['Dashboard', 'Orders', 'Customers', 'Reports', 'Integrations', 'Current Month']

export const ListItems = (props) => {
    return <React.Fragment>
        {ListItemsArray.map(ele => {
            const value =ele.split(" ").join("").toLocaleLowerCase();
            return <ListItemButton onClick={()=>props.onClickNav(value)}>
                <ListItemIcon>
                    {ele === 'Dashboard' && <DashboardIcon sx={{ color: props.selectedNav === value ? 'primary.main' : 'icon.color' }} />}
                    {ele === 'Orders' && <ShoppingCartIcon sx={{ color: props.selectedNav === value ? 'primary.main' : 'icon.color' }} />}
                    {ele === 'Customers' && <PeopleIcon sx={{ color: props.selectedNav === value ? 'primary.main' : 'icon.color' }} />}
                    {ele === 'Reports' && <BarChartIcon sx={{ color: props.selectedNav === value ? 'primary.main' : 'icon.color' }} />}
                    {ele === 'Integrations' && <LayersIcon sx={{ color: props.selectedNav === value ? 'primary.main' : 'icon.color' }} />}
                    {ele === 'Current Month' && <AssignmentIcon sx={{ color: props.selectedNav === value ? 'primary.main' : 'icon.color' }} />}

                </ListItemIcon>
                <ListItemText primary={ele} sx={{ color: props.selectedNav === value ? 'primary.main' : 'drawerMenuText.color' }} />
            </ListItemButton>
        })}
    </React.Fragment>

}