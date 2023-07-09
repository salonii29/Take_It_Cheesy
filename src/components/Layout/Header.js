import React , {useState} from 'react';
import { Divider, AppBar, Box, Drawer, IconButton, Toolbar, Typography} from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import '../../styles/HeaderStyles.css';


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  // menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography 
             color={'goldenrod'} 
             variant='h6' 
             component='div' 
             sx={{flexGrow: 1 }}
            > 
                 <FastfoodIcon />
                Take It Cheesy!!
                <Divider />
            </Typography>

           
               <ul className='mobile-navigation'>
                <li>
                  <NavLink aactiveClassName="active" to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={'/About'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'/Contact '}>Contact</NavLink>
                </li>
               </ul>
  

    </Box>
  )
  return (
    <>
       <Box>
          <AppBar component={"nav"} sx={{bgcolor:"black"}}>
            <Toolbar>
               <IconButton 
                 color="inherit" 
                 aria-label="open drawer"
                 edge="start" 
                 sx={{
                  mr:2, 
                  display: { sm: "none" },
                  }}
                  onClick={handleDrawerToggle}
                >
                 <MenuIcon />
               </IconButton>
            <Typography 
             color={'goldenrod'} 
             variant='h6' 
             component='div' 
             sx={{flexGrow: 1 , my: 2}}

            > 
                 <FastfoodIcon />
                Take It Cheesy!!
            </Typography>

            <Box sx={{display:{ xs:'none',sm:'block'}}}>
               <ul className='navigation-menu'>
                <li>
                  <NavLink aactiveClassName="active" to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={'/About'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'/Contact '}>Contact</NavLink>
                </li>
               </ul>
            </Box>
            </Toolbar>
          </AppBar>
          <Box component='nav'>
                <Drawer variant='temporary' open={mobileOpen} 
                onClose={handleDrawerToggle}
                sx={{display:{xs:'block' , sm:'none'}, 
                "& .MuiDrawer-paper": {
                   boxSizing:'border-box',
                   width:'240px',
                },
                }}
              >
                  {drawer}
                </Drawer>

          </Box>
          <Box>
            <Toolbar />
          </Box>
       </Box>
    </>
  )
}

export default Header