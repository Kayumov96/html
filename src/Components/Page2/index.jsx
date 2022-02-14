import React, { Component } from 'react';
import { HeadContainer } from '../Header/style';
import { HeadCategory } from '../Infobody/style';
import Navbar from '../Navbar/Index';
import { Jpg } from '../Infobody/style';
import { Leftside, Minidiv, Rightside, Bigdiv, Img, Infolist } from './style';
import { shopcards } from '../../utils/mock';
import { getValue } from '@testing-library/user-event/dist/utils';


export default class SecondPage extends Component {
    constructor(props){
        super(props)
        this.state ={
            data: shopcards,
            active: '',
       
        }
    };

    render() {
        let Imgclick = this.props.Imgclick
        return (
            <div >
                  <Navbar/>
                        <HeadCategory>
                           Home/Shop
                        </HeadCategory>
                    <HeadContainer>
                       <Leftside>
                           {
                              shopcards.map((value)=>(
                               <Minidiv key={value.id}>
                                  <Img onClick={()=>this.setState({active: value.id})} src={value.src}
                                  className={`Links
                                  ${this.state.active===value && 'active'}`}/>
                                  </Minidiv> 
                                  
                               ))
                           }<Bigdiv>
                               <Jpg ></Jpg>
                            </Bigdiv>   
                           
                       </Leftside>
                       <Rightside>
                           <Infolist>
                            
                           </Infolist>

                           <p className='active'>$119.00</p>
                       </Rightside>
                    </HeadContainer>
            </div>
        );
    }
}