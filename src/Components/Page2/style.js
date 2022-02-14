import styled from "styled-components";

export const Leftside = styled.div`
 width: 573px;
 height: 450px;
 display: flex;
 gap: 13px;
padding-top: 3px;
 flex-direction: column;
 border: 1px solid gray;
`;

export const Rightside = styled.div`
 width: 574px;
 height: 450px;
 display: flex;
 border: 1px solid aqua;
`;
export const Minidiv = styled.div`
 width: 100px;
 height: 100px;
 background: #FBFBFB;
 border-radius: 6px;
 border: 1px solid black;
`;
export const Bigdiv = styled.div`
 width: 444px;
 position: absolute;
 height: 444px;
 background: #FBFBFB;
border-radius: 6px;
 margin-left: 110px ;
 border: 1px solid red;
`;
export const Img = styled.img`
 width: 100px;
 height: 100px;
 border-radius: inherit;
 cursor: pointer;
:hover{
    width: 98px;
    height: 98px;
}
`;
export const Infolist = styled.div`
width: 66px;
`;