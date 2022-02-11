import React, { Component } from 'react';
import { HeadContainer, Headdiv, Welcome, Bettertext, Span, WeAre, BBtn, Flower, Gul } from './style';
import Headimg from '../../Assets/Imgs/Headimg.png';

class Header extends Component {
    render() {
        return (
            <div>
                <HeadContainer>
                  <Headdiv>
                     <Welcome>WELCOME TO GREENSHOP</Welcome> 
                     <Bettertext>LET'S MAKE A BETTER <Span>PLANET</Span></Bettertext>
                     <WeAre>We are an online plant shop offering a wide range of cheap and trendy plants.
                          Use our plants to create an unique Urban Jungle. Order your favorite plants!</WeAre>
                     <BBtn>SHOP NOW</BBtn>  
                     <Flower>
                         <Gul className='gul' src={Headimg} alt='Flower'/>
                         <Gul className='gul1' src={Headimg} alt='Flower'/>
                         
                     </Flower>  
                  </Headdiv>
                </HeadContainer>
            </div>
        );
    }
}

export default Header;