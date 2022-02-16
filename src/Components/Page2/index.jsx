import React, { Component } from 'react';
import { BBtn, HeadContainer } from '../Header/style';
import { HeadCategory, Plants } from '../Infobody/style';
import Navbar from '../Navbar/Index';
import { Jpg } from '../Infobody/style';
import { Leftside, Minidiv, Rightside, Bigdiv, Img, Infolist, Leftmini, Pt, Ht, Imgicon, Describe, BtnDiv, Hinfo} from './style';
import { shopcards } from '../../utils/mock';
import { Addremove, Circle } from '../Generic/style';
import search from '../../Assets/Icons/search.svg';
import heart from '../../Assets/Icons/heart.svg'
import Star from '../../Assets/Icons/Star.svg';
import Staryellow from '../../Assets/Icons/Staryellow.svg';
import { Imeg } from '../Navbar/style';
import Facebook from '../../Assets/Icons/Facebook.svg';
import Twitter from '../../Assets/Icons/Twitter.svg';
import Linkedin from '../../Assets/Icons/Linkedin.svg';
import Email from '../../Assets/Icons/Email.svg'




export default class SecondPage extends Component {
    constructor(props){
        super(props)
        this.state ={
            data: shopcards,
            selected: {},
            count: 0,
            active: '',
        }
    };
      
    render() {
        const { value } = this.props; 
        const getSelect = (selected) =>(
           this.setState({selected, count:0})
        ) 
        // const getSize = (selectsize)=>(
        //     this.setState({active: selectsize})
        // )
        return (
            <div >
                  <Navbar/>
                        <HeadCategory >
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
                                    <Describe>
                                        <Circle>S</Circle>
                                        <Circle>M</Circle>
                                        <Circle>L</Circle>
                                        <Circle>XL</Circle>
                                    </Describe>
                             <BtnDiv>
                                 <Addremove onClick={()=>{this.setState({count: this.state.count -1})}}>--</Addremove>
                                {this.state.count}
                                 <Addremove onClick={()=>{this.setState({count:this.state.count +1})}}>+</Addremove>
                                 <BBtn style={{width:'130px'}}>BUY NOW</BBtn>
                                 <BBtn style={{background: 'white', color:'#46A358', border:'1px solid #46A358'}}>ADD TO CARD</BBtn>
                                 <BBtn style={{background:'white', width:'40px', border:'1px solid #46A358'}}><Imeg src={heart} alt='like' style={{width:'100%'}}></Imeg></BBtn>
                             </BtnDiv>
                            <div style={{height:'130px'}}>
                               <div style={{height:'15px',width:'80%', marginLeft:'4%',marginBottom:'2%',}}>SKU: 1995751877966 </div>
                               <div style={{width:'80%', marginBottom:'2%', marginLeft:'4%'}}>Categories: {this.state.selected.categories}</div>
                               <div style={{width:'80%', marginBottom:'2%', marginLeft:'4%'}}>Tags: {this.state.selected.tags}</div>
                               <div style={{width:'80%', marginBottom:'2%', marginLeft:'4%', display:'flex'}}>
                                   Share this products: <a href='https://www.facebook.com'> <Imgicon style={{marginLeft:'24%'}} src={Facebook} alt='facebook'/></a>
                                                    <a href='https://www.twitter.com'> <Imgicon src={Twitter} alt='twitter'/></a>
                                                    <a href='https://linkedin.com'><Imgicon src={Linkedin} alt='linkedin'/></a>
                                                    <a href='https://www.gmail.com'><Imgicon src={Email} alt='email'/></a>
                               </div>
                            </div>
                            
                       </Rightside>
                    </HeadContainer>
                    <HeadContainer style={{marginTop:'110px',textAlign:'start', height:'500px', display:'block'}}>
                        <BtnDiv style={{height:'46px', borderBottom: '0.3px solid rgba(70, 163, 88, 0.5)'}}>
                            <HeadCategory onClick={()=>this.setState({active: value})} className={`Links
                        ${this.state.active===value && 'active'}`}>Product Description</HeadCategory>
                            <HeadCategory onClick={()=>this.setState({active: value})} className={`Links
                        ${this.state.active===value && 'active'}`}>Reviews</HeadCategory>
                        </BtnDiv>
                        <HeadContainer style={{height:'190px',width:'1180px', lineHeight:'24px', padding:'8px 8px', color:'#acacac'}}>{this.state.selected.productDescription}</HeadContainer>
                            <HeadCategory style={{marginLeft:'2%', fontSize:'14px'}}>Living Room:</HeadCategory>
                        <HeadContainer style={{height:'50px',width:'1180px', lineHeight:'24px',padding:'8px 8px', color:'#acacac'}}>{this.state.selected.livingroom}</HeadContainer>
                            <HeadCategory style={{marginLeft:'2%', fontSize:'14px'}}>Dinning Room:</HeadCategory>
                        <HeadContainer style={{height:'50px',width:'1180px', lineHeight:'24px',padding:'8px 8px', color:'#acacac'}}>{this.state.selected.dinningroom}</HeadContainer>
                            <HeadCategory style={{marginLeft:'2%', fontSize:'14px'}}>Office:</HeadCategory>
                        <HeadContainer style={{height:'50px',width:'1180px', lineHeight:'24px',padding:'8px 8px', color:'#acacac'}}>{this.state.selected.office}</HeadContainer>
                    </HeadContainer>
                    <BtnDiv style={{height:'46px',marginTop:'127px', borderBottom: '0.3px solid rgba(70, 163, 88, 0.5)'}}>
                        <Ht onClick={()=>this.setState({active: value})} className={`Links
                        ${this.state.active===value && 'active'}`}>Releted Products</Ht>
                    </BtnDiv>
            </div>
        );
    }
}