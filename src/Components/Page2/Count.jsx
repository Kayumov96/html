import React, { Component } from 'react';
import { BtnDiv} from '../Generic/style';
import { shopcards } from '../../utils/mock';
import Page from './index';





export default class Second extends Component {
    constructor(props){
        super(props)
        this.state ={
            data: shopcards,
        }
    };
      
    render() {
        
        return (
         
              <BtnDiv>
                 {this.state.data.map((value)=>(
                 <Page value={value}/>
                 ))}
              </BtnDiv>
                
        );
    }
}