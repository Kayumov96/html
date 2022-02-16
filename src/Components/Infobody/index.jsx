import React, { Component } from 'react';
import { categories } from '../../utils/mock';
import { Ptag } from '../Navbar/style';
import { Categories, HeadCategory, InfoContainer, Leftinfo, Plants } from './style';

export default class Infobody extends Component {
    constructor(props){
        super(props)
        this.state={
            data: categories,
            active: '',
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
                            <Plants style={{width: '226px',height:'135px', marginLeft:'4%', display:'block'}}>
                               <HeadCategory>Price Range:</HeadCategory>
                               <input type="range" style={{width:'245px',height: '3px'}} />
                               <Plants style={{fontSize:'15px', fontWeight:'400', display:'flex'}}>Price: <h4 className='active'>$39 - $1230</h4></Plants>
                            </Plants>
                        </Categories>
                    </Leftinfo>
                </InfoContainer>
            </div>
        );
    }
}
