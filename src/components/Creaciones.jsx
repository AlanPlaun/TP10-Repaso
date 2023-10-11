import React from "react";

const Creaciones = () => {
    let laburos = [
        {
            "titulo": "TP1",
            "descripcion": "Validaciones con funciones y manejo de DOM con JavaScript",
            "imagenes": "",
            "fecha": new Date('2023-03-13'),
            "url": "https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/1911884/tp1-validaciones-con-funciones-y-manejo-de-dom-con-javascript",
        },
        {
            "titulo": "TP2",
            "descripcion": "TODO List",
            "imagenes": "",
            "fecha": new Date('2023-03-27'),
            "url": "https://campus.ort.edu.ar/tp/1920024/tp-2-todo-list",
        },
        {
            "titulo": "TP3",
            "descripcion": "Productos",
            "imagenes": "",
            "fecha": new Date('2023-04-10'),
            "url": "https://campus.ort.edu.ar/tp/1928830/tp3-productos",
        },
        {
            "titulo": "TP4",
            "descripcion": "Citas (Parte 1)",
            "imagenes": "",
            "fecha": new Date('2023-05-08'),
            "url": "https://campus.ort.edu.ar/tp/1944955/tp-4-citas-parte-1-",
        },
        {
            "titulo": "TP5",
            "descripcion": "Citas (Parte 2)",
            "imagenes": "",
            "fecha": new Date('2023-05-22'),
            "url": "https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/1953544/tp-5-citas-parte-2-",
        },
        {
            "titulo": "TP6",
            "descripcion": "Flags Handling (Repaso)",
            "imagenes": "",
            "fecha": new Date('2023-06-07'),
            "url": "https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/1961903/tp-6-flags-handling-repaso-",
        },
        {
            "titulo": "TP7",
            "descripcion": "Flags Handling (PropTypes)",
            "imagenes": "",
            "fecha": new Date('2023-07-05'),
            "url": "https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/1976111/tp-7-flags-handling-proptypes-",
        },
    ]
    return (
        <React.Fragment>
            <h1>Mis Creaciones</h1>
            <ul>
                {
                    laburos.map((laburo, index) => (
                        <li key={index}>{laburo.titulo} - {laburo.descripcion}</li>
                    ))
                }
            </ul>
        </React.Fragment>
    )
}

export default Creaciones;