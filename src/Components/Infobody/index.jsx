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
                        </Categories>
                    </Leftinfo>
                </InfoContainer>
            </div>
        );
    }
}
