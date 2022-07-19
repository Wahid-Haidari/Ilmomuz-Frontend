import React from 'react';
import './Menu.css';
import Logo from '../../assets/Logo.png';
import Ilmomuz from '../../assets/Ilmomuz.png';

const Menu = ({selectMenuOption}) => {
    const onClickMenuOption = (option) => {
        selectMenuOption(option);
        console.log("selected" + option);
    }

    return(
        <div className="menu_container">
            <ul className="menu_options">
                <li><img src={Logo} alt="logo" className="logo"></img><img src={Ilmomuz} alt="ilmomuz" className="logo"></img></li>
                <li>Menu Logo</li>
                <li onClick={()=>onClickMenuOption('dashboard')}>Dashboard</li>
                <li onClick={()=>onClickMenuOption('students')}>Students</li>
                <li onClick={()=>onClickMenuOption('instructors')}>Instructors</li>
                <li onClick={()=>onClickMenuOption('groups')}>Groups</li>
                <li onClick={()=>onClickMenuOption('income')}>Income</li>
                <li onClick={()=>onClickMenuOption('financial')}>Financial</li>
                <li onClick={()=>onClickMenuOption('setting')}>Setting</li>
            </ul>
        </div>
    );
}

export default Menu;