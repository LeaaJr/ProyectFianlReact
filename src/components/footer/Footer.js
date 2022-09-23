import React from 'react'
import { Contenedor, Form, Foter, Footerone } from './Footer-elements'

function Footer() {
  return (
    <> 
      <Footerone>
        <Contenedor>
            <h2 className="titulo-footer">Contactanos</h2>
            <h3 className="subtitulo-footer">Lo apreciariamos mucho</h3>
            <Foter>
              <Form>
                    <input type="text" name="" id="" placeholder="Nombre" />
                    <input type="email" name="" id="" placeholder="Email" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Ingrese su mensaje..."></textarea>
                    <input type="submit" value="Enviar" id="boton1" />
              </Form>
            </Foter>
        </Contenedor>
      </Footerone>
    </>
  )
}

export default Footer