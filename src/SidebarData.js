import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
    title:'Perfil',
    path:"/Home",
    icon:<AiIcons.AiFillHome/>,
    cName: 'nav-text'
    },
    {
    title:'Produtos',
    path:"/Products",
    icon:<IoIcons.IoIosPaper />,
    cName: 'nav-text'
    },
    {
    title:'Reports',
    path:"/Reports",
    icon:<FaIcons.FaCartPlus />,
    cName:'nav-text'
    }

]

export default SidebarData;