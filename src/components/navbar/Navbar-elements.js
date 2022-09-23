import styled from 'styled-components';



export const Header = styled.header`
width: 100%;
height: 650px;
background-image:url(https://ichef.bbci.co.uk/news/640/cpsprodpb/131AF/production/_125855287_5cb067a4b29c7291dacc5eb955ca0d439588fb01.jpg);
background-attachment: fixed;
background-position: center;
background-size: cover;
position: relative;
overflow: hidden;
color: #fff;
text-align: center;
`
;

export const Dropdown = styled.div`
    position: relative;
    display: inline-block;
`

;

export const DropdownConten = styled.div`
    box-sizing: border-box;
   /*  background-image: url(""); */
    background-position: 14px 12px;
    background-repeat: no-repeat;
    font-size: 16px;
    padding: 14px 20px 12px 45px;
    border: none;
    border-bottom: 1px solid #ddd;

`
;

export const Textos = styled.div`
     margin-top: 152px;
`
;

export const Sesgoabajo = styled.div`
    z-index: 10;
    position: absolute;
    bottom: 0;
    left: 0;
    border-width: 0 0 35vh 100vw;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
`
;