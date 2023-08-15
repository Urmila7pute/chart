import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
// import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import { mainListItems, secondaryListItems } from '../Dashboard/listItems';
import { Avatar, Drawer, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ListItems } from './ListItems';


const drawerWidth = 191;

const settings = [//'Profile', 'Account', 'Dashboard',
    'Logout'];


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => (
    {
        boxShadow: "none",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

const DrawerStatic = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

// TODO remove, this demo shouldn't need to reset the theme.

export default function Layout() {
    const path = window.location.pathname
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [selectedNav, setSelectedNav] = React.useState(false);

    const [anchorElUser, setAnchorElUser] = React.useState(false);

    React.useEffect(() => { const pathArray = path.split("/"); setSelectedNav(pathArray[1]) }, [path])

    const toggleDrawer = () => {
        setOpen(!open);
    };
    const handleOpenUserMenu = () => {
        setAnchorElUser(!anchorElUser);
    };
    const handleCloseUserMenu = (e, setting) => {
        console.log(e.target.innerHTML, setting)
        if (e.target.innerHTML === 'Logout'){
            localStorage.clear();
            navigate('/signIn')
    }
        setAnchorElUser(false);
    };

    const onClickNav = (url)=>{
        navigate(`/${url}`)
    }

    return (
        <>
            <CssBaseline />
            <AppBar position="absolute" open={open}>
                <Toolbar
                    sx={{
                        pr: '24px', // keep rtheme.AppBar.
                        color: '#9c9fa6',
                        backgroundColor: "#fff",

                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        // color="inherit"
                        noWrap
                        sx={{
                            flexGrow: 1, color: 'black',
                            fontWeight: 600
                        }}
                    >
                        Dashboard
                    </Typography>
                    <IconButton color="inherit" sx={{ paddingRight: 5 }}>
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit" onClick={() => { handleOpenUserMenu() }} >
                        <Avatar alt="C" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} //onClick={(e,setting)=>handleCloseUserMenu(e,setting)}
                            >
                                <Typography textAlign="center" onClick={(e, setting) => handleCloseUserMenu(e, setting)}>{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
            {console.log('open', open)}
            <DrawerStatic variant="permanent"
                open={false}
                onClose={toggleDrawer}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <Typography variant="h4" component="h1"
                        sx={{
                            color: 'primary.main', fontWeight: '600 important',
                        }}>
                        Codeza
                    </Typography>
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    {/* {mainListItems} */}
                    <ListItems selectedNav={selectedNav} onClickNav={onClickNav}/>
                    {/* <Divider sx={{ my: 1 }} />
          {secondaryListItems} */}
                </List>
            </DrawerStatic>
            <Drawer //variant="permanent" open={open}
                // anchor={'left'}
                open={open}
                onClose={toggleDrawer}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <Typography variant="h4" component="div"
                        sx={{
                            color: 'primary.main', fontWeight: 600,
                            background: "-webkit-linear-gradient(45deg, #B100B3 30%, #B26BB3 90%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                        Codeza
                    </Typography>
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    {/* {mainListItems} */}
                    <ListItems selectedNav={selectedNav} onClickNav={onClickNav} />
                    {/* <Divider sx={{ my: 1 }} />
          {secondaryListItems} */}
                </List>
            </Drawer>

        </>
    );
}