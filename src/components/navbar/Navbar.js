import React from 'react'
import { Header, Dropdown, DropdownConten, Textos, Sesgoabajo} from './Navbar-elements'


const Navbar = () => {
  return (
    <>
    <Header>
      <Dropdown >
        <DropdownConten>
        </DropdownConten>
      </Dropdown>
      <Textos>
            <h1 className="titulo">Space-Cod</h1>
            <h3 className="subtitulo">Espacio | Tiempo | Imagenes </h3>
      </Textos>
      <Sesgoabajo />
    </Header>
    </>
  )
}

export default Navbar