import React, { Component } from 'react';
import { categories, sizes } from '../../utils/mock';
import { BBtn } from '../Header/style';
import { Ptag } from '../Navbar/style';
import { Categories, HeadCategory, InfoContainer, Leftinfo, Plants } from './style';

export default class Infobody extends Component {
    constructor(props){
        super(props)
        this.state={
            data: categories,
            active: '',
            size: sizes,
            activ: ''
        }
    }
    render() {
        return (
            <div>
                <InfoContainer>
                    <Leftinfo>
                       
                        <Categories>
                            <HeadCategory>Categories</HeadCategory>
                            {
                                categories.map((value)=>(
                                 <Plants key={value.id}>
                                     <Ptag onClick={()=>this.setState({active: value.id})}
                                     className={`${this.state.active === value.id && 'active'}`}>{value.title}</Ptag>
                                     <Ptag onClick={()=>this.setState({active: value.id })}
                                     className={`${this.state.active === value.id && 'active'}`}>({value.amount})</Ptag>
                                 </Plants> 
                                ))
                            }  
                        </Categories>
                            <Plants style={{width: '226px',height:'135px', marginLeft:'4%', display:'block'}}>
                               <HeadCategory>Price Range:</HeadCategory>
                               <input type="range" style={{width:'245px',height: '3px'}} />
                               <Plants style={{fontSize:'15px', fontWeight:'400', display:'flex', alignItems:'center'}}>Price: <h4 className='active'>$39 - $1230</h4></Plants>
                               <BBtn style={{width:'90px',height:'35px'}}>Filter</BBtn>
                            </Plants>
                           <HeadCategory style={{paddingLeft:'2%'}}>Size</HeadCategory>
                           {
                              sizes.map((value)=>(
                                  <Plants key={value.id}>
                                      <Ptag onClick={()=>this.setState({activ: value.id})} 
                                      className={`${this.state.activ === value.id && 'active'}`}>{value.size}</Ptag>
                                      <Ptag onClick={()=>this.setState({activ: value.id})} 
                                  className={`${this.state.activ === value.id && 'active'}`}>({value.amount})</Ptag>
                                  </Plants>
                              ))
                           }
                      
                    </Leftinfo>
                </InfoContainer>
            </div>
        );
    }
}
