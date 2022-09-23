import React from 'react'
import { Contenedor, Section, SecGaleria, Sesgoarriba, ImgNone, Imagenes, Sesgoabajo, Encima, EncimaDiv, Miembros, Card, Cards, Fondo, Clientes, Cliente, SesgoabajoUnico  } from './Page-elements'
import { Link } from 'react-router-dom'

function Page() {
  return (
    <>
        <Section>
            <Contenedor>
                <h2 className="sobre-nosotros">Nuevas Imagenes</h2>
                <h3 className="slogan">Capturadas por el telescopio James Webb</h3>
                <p className="parrafo">El telescopio infrarrojo, que demandó 9.000 millones de dólares,
                    se lanzó el 25 de diciembre de 2021 y fue construido por el gigante aeroespacial Northrop Grumman Corp.
                    por encargo de la NASA. El observatorio llegó a su destino en la órbita solar a 1,5 millones de kilómetros de la Tierra
                    un mes después. </p>
                <p className="parrafo">La NASA seleccionó una primera tanda de fotos, que tardó semanas en ser procesada a partir de los datos en bruto recogidos por el Webb,
                    para mostrar las capacidades del telescopio.
                    La imagen más destacada, que fue presentada el lunes por el presidente Biden en la Casa Blanca,
                    la visión más detallada del universo primitivo registrada hasta la fecha</p>
            </Contenedor>
        </Section>
            <SecGaleria>
                <Sesgoarriba />
                    <ImgNone>
                        <img src='https://www.nationalgeographic.com.es/medio/2018/02/27/marte1_732790e5_800x800_2.JPG' />
                    </ImgNone>
                    <Imagenes>
                        <img src='https://cloudfront-us-east-1.images.arcpublishing.com/infobae/G6LPPHUPOVAEFNGHR6TMPHRHBQ.png' />
                    </Imagenes>
                    <Imagenes>
                        <img src='https://estaticos-cdn.sport.es/clip/0c4bbc9b-6184-41a4-9b51-23dc6868d452_source-aspect-ratio_default_0.jpg' />
                    </Imagenes>
                        <Encima>
                            <h2 className='Encimahdos'> James Webb </h2>
                            <EncimaDiv />
                        </Encima>
                    <Imagenes>
                        <img src='https://static.dw.com/image/62569106_303.jpg' />'
                    </Imagenes>
                    <Imagenes>
                        <img src='https://cdni.russiatoday.com/actualidad/public_images/2022.07/article/62c8610959bf5b01e5125cec.jpg' />
                    </Imagenes>
                <Sesgoabajo />
            </SecGaleria>
            <Miembros>
                <Contenedor>
                <h2 className="sobre-nosotros">Imagenes</h2>
                <h3 className="slogan">Conoce algunas de las Imagenes</h3>
                    <Cards>
                        <Card>
                            <img className='cardimg' src='https://cloudfront-us-east-1.images.arcpublishing.com/infobae/6QJGCEDDCZDPPAD6ASEFX6SAVY.jpg' alt='' />
                            <a href="https://www.infobae.com/tag/james-webb/"><h4>James Webb</h4></a>
                            <p>El telescopio infrarrojo.</p>
                        </Card>
                        <Card>
                            <img className='cardimg' src="https://imagenes.elpais.com/resizer/zQRyPJW3FXmGYtLGhJjEOT1ip6c=/414x0/filters:focal(486x506:496x516)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/WDKQCEMKMJ5U6Z6EHVNGA23OHM.jpg" alt="" />
                            <a href="https://www.infobae.com/america/ciencia-america/2022/08/22/asi-son-las-impresionantes-auroras-del-planeta-jupiter-que-capturo-el-telescopio-james-webb/"><h4>Júpiter</h4></a>
                            <p>imágenes inéditas del planeta.</p>
                        </Card>
                        <Card>
                            <img className='cardimg' src="https://www.laizquierdadiario.com/IMG/jpg/rsz_1stsci-01g786e1pw9rmk51ep0dzsm03b.jpg" alt="" />
                            <a href="https://www.infobae.com/america/agencias/2022/07/12/la-nebulosa-del-anillo-del-sur-protagoniza-una-nueva-imagen-del-james-webb-2/"><h4>Anillo sur</h4></a>
                            <p>nebulosa del Anillo Sur.</p>
                        </Card>
                    </Cards>
                </Contenedor>
            </Miembros>
            <Fondo>
                <Sesgoarriba />
                <Contenedor>
                <h2 className="titulo-patrocinadores">Exploracion</h2>
                <h3 className="subtitulo-patrocinadores">Creacion | Diseño | Configuracion</h3>
                    <Clientes>
                        <Cliente>
                                {/* <img src={image} /> */}
                        </Cliente>
                    </Clientes>
                        <h3 className="subtitulo-patrocinadores especial">y muchos más clientes...</h3>
                </Contenedor>
                <SesgoabajoUnico />
            </Fondo> 
    </>
  )
}

export default Page