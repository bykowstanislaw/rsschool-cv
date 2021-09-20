import React from "react";
import './menu.css'
const MENU_ITEMS=['skills','projects','self-intro','languages','education',];

const Menu = () =>{

    
    return (<>
        <nav className='cv-menu'>
            {MENU_ITEMS.map((el,id)=>{
                
                return <div className='menu-item'>{el.toUpperCase()}</div>
            })}
        </nav>
            </>)
}

export default Menu