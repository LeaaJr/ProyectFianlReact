import styled from 'styled-components';

export const Main = styled.main`
    font-family: 'open sans';
    font-size: 16px;    
`
;

export const Section = styled.section`
   

`
;

export const Contenedor = styled.div`
    width: 90%;
    max-width: 1000px;
    margin: auto;
    overflow: hidden;
    padding: 52px 0;

`
;

export const SecGaleria = styled.section`
    width: 100%;
    height: 500px;
    overflow: hidden;
    display: flex;
    position: relative;
    flex-wrap: wrap;
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



export const Sesgoarriba = styled.div`
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    border-width: 35vh 100vw 0 0;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
`
;

export const ImgNone = styled.div`
    width: 20%;
    height: 500px;
    overflow: hidden;
    position: relative;

`
;

export const Imagenes = styled.div`
    width: 20%;
    height: 500px;
    overflow: hidden;
    position: relative;
`
;

export const Encima = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(52, 73, 94, 0.815);
`
;

export const EncimaDiv = styled.div`
    position: relative;
    display: block;
    top: 46%;
    width: 40px;
    height: 5px;
    background: #fff;
    margin: auto;
`
;

export const Miembros = styled.section`

`
;

export const Cards = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
;

export const Card = styled.div`
    margin: 20px 0;
    width: 30%;
    height: 250px;
    text-align: center;
    padding: 20px;
    box-shadow: 0px 0px 4px 0 rgba(52, 73, 94, 0.849);
`
;

export const Fondo = styled.section`
    height: 900px;
    position: relative;
    background-image: url(https://www.aciprensa.com/imagespp/UniversoJamesWebb_NASA_140722.jpg);
    overflow: hidden;
    background-attachment: fixed;
    background-position: center;
    padding-top: 130px;
    background-repeat: no-repeat;
    background-size: cover;
`
;

export const Clientes = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 64px;
    width: 100%;
    justify-content: space-between;
`
;

export const Cliente = styled.div`
    width: 30%;
`
;

export const SesgoabajoUnico = styled.div`
    z-index: 10;
    position: absolute;
    bottom: 0;
    left: 0;
    border-width: 0 0 35vh 100vw;
    border-style: solid;
    border-color: transparent transparent #2c3e50 transparent;
`
;







