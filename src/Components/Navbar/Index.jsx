import React, { Component } from 'react';
import { menunav } from '../../utils/mock';
import { Divcontainer, Span, Menu, Text, Img, Btn, Icons} from './style';
import logo from '../../Assets/Imgs/logo.png';
import search from '../../Assets/Icons/search.svg';
import basket from '../../Assets/Icons/basket.svg';
import Logout from '../../Assets/Icons/Logout.svg'

export default class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            data: menunav,
            active: 'Home',
        }
    }
    render() {
        return (
            <div>
                <Divcontainer>
                   <img className='logo' src={logo} alt='Logo'/>
                   <Span>GREENSHOP</Span>
                   <Menu>
                {
                    menunav.map((value)=>(
                        <Text key={value.id} onClick={()=>this.setState({active: value})} className={`Links
                        ${this.state.active===value && 'active'}`}>{value.title}</Text>
                    ))
                } 
                   </Menu>
                   <Icons>
                    <Img src={search} alt='search'/>  
                    <Img src={basket} alt='Basket'/>
                    <Btn><Img src={Logout} alt='Login'/> Login</Btn>
                    </Icons>
                </Divcontainer>
            </div>
        );
    }
}

