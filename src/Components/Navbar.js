/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import panda from '../Assets/panda.png'
import { BsCart2 } from 'react-icons/bs'
import { HiOutlineBars3 } from 'react-icons/hi2'

import {
Box,
List,
Drawer,
ListItem,
ListItemButton,
ListItemIcon,
ListItemText,
} from '@mui/material'

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import  PhoneRoundedIcon  from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: 'Home',
      icon: <HomeIcon />,
    },
    {
      text: 'About',
      icon: <InfoIcon />,
    },
    {
      text: 'Testimonials',
      icon: <CommentRoundedIcon />,
    },
    {
      text: 'Contact',
      icon: <PhoneRoundedIcon />,
    },
    {
      text: 'Cart',
      icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (
    <header>
    <nav>
      <div className='logo'>
        <img src={panda} alt="" />
      </div>
      <div className='navbar-links-container'>
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact</a>
        <a href="">
          <BsCart2 className='navbar-cart-icon' />
        </a>

        <button className='primary-button'>Bookings Now</button>

      </div>
      <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
    </header>

  );
};

export default Navbar;