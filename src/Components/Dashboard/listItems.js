import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
   <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon sx={{ color: 'icon.color' }}/>
      </ListItemIcon>
      <ListItemText primary="Dashboard"  />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon sx={{ color: 'icon.color' }}/>
      </ListItemIcon>
      <ListItemText primary="Orders"  sx={{ color:'drawerMenuText.color'} }/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon  sx={{ color: 'icon.color' }}/>
      </ListItemIcon>
      <ListItemText primary="Customers" sx={{ color:'drawerMenuText.color'} }/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon sx={{ color: 'icon.color' }} />
      </ListItemIcon>
      <ListItemText primary="Reports" sx={{ color:'drawerMenuText.color'} } />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon  sx={{ color: 'icon.color' }}/>
      </ListItemIcon>
      <ListItemText primary="Integrations" sx={{ color:'drawerMenuText.color'} }/>
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon sx={{ color: 'icon.color' }}/>
      </ListItemIcon>
      <ListItemText primary="Current month" sx={{ color:'drawerMenuText.color'} } />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon sx={{ color: 'icon.color' }}/>
      </ListItemIcon>
      <ListItemText primary="Last quarter" sx={{ color:'drawerMenuText.color'} }/>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon sx={{ color: 'icon.color' }} />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" sx={{ color:'drawerMenuText.color'} }/>
    </ListItemButton>
  </React.Fragment>
);