import React, { Component } from 'react';
import { HeadContainer } from '../Header/style';
import { HeadCategory } from '../Infobody/style';
import Navbar from '../Navbar/Index';
import { Jpg } from '../Infobody/style';
import { Leftside, Minidiv, Rightside, Bigdiv, Img, Infolist, Leftmini, Pt, Ht, Imgicon, Describe} from './style';
import { shopcards } from '../../utils/mock';
import { Imeg } from '../Navbar/style';
import search from '../../Assets/Icons/search.svg';
import Star from '../../Assets/Icons/Star.svg';
import Staryellow from '../../Assets/Icons/Staryellow.svg';



export default class SecondPage extends Component {
    constructor(props){
        super(props)
        this.state ={
            data: shopcards,
            selected: {},
        }
    };
      
    render() {
        const getSelect = (selected) =>(
           this.setState({selected})
        )
        return (
            <div >
                  <Navbar/>
                        <HeadCategory>
                           Home/Shop
                        </HeadCategory>
                    <HeadContainer>
                       <Leftside>
                          <Leftmini> {
                              shopcards.map((value)=>(
                                   <Minidiv key={value.id} onClick={()=>getSelect(value)}>
                                      <Img onClick={()=>this.setState({active: value.id})} src={value.src}/>
                                  </Minidiv> 
                                  
                                  ))
                               }
                           </Leftmini>
                           <Bigdiv>
                               <Jpg src={this.state.selected.src}></Jpg>
                               <Imgicon src={search}/>
                            </Bigdiv>   
                           
                       </Leftside>
                       <Rightside>
                           <Infolist>
                            <Ht>{this.state.selected.title}</Ht>
                            <Pt>${this.state.selected.price}</Pt>
                           </Infolist>
                           <Ht>Short Description:</Ht>
                           <Describe>
                               <h5>{this.state.selected.description}</h5>
                           </Describe>
                           <Ht>Size:</Ht>
                       </Rightside>
                    </HeadContainer>
            </div>
        );
    }
}