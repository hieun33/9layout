import React from 'react';
import { NavLink } from "react-router-dom";

//라우터는 기존의html방식으로 만들어주는역할
//브라우저 라우터 써야함/ 깃허브배포때문에 우리는 해쉬라우터를씀

export default function Header(props){
    const active = { color: 'aqua' };
    return(
        <header className='{props.type}'>
            <div className="inner">
                <h1>
                    <NavLink exact to='/' activeStyle={active}>
                      LOGO
                    </NavLink>
                </h1>

                <ul id="gnb">
                    <li>
                        <NavLink to='/department' activeStyle={active}>
                            Department
                        </NavLink>                        
                    </li>
                    <li>
                        <NavLink to='/Community' activeStyle={active}>
                            Community
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink to='/Gallary' activeStyle={active}>
                            Gallary
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink to='/Youtube' activeStyle={active}>
                           Youtube
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink to='/Location' activeStyle={active}>
                            Location
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink to='/Member' activeStyle={active}>
                           Member  
                        </NavLink> 
                    </li>
                </ul>
            </div>
        </header>
    )
}