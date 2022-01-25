import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Input, Label, Col, Form, Row } from 'reactstrap';
import '../App.css';
// mi componente principal <Lista>
const Lista = () => {
  // guardo el estado list de valor inicial la lista que tengo
  const [list, setList] = useState([
    { id: 1, Nombre: "Alvaro Sanchez Monteagudo", Ciudad: "Valencia", Pais: "España", Telefono: " + 34 657 85 25 46", email: "smonteagudo@.com ", Etiquetas: "HTML" },
    { id: 2, Nombre: "Amparo Herrera Climent", Ciudad: "Sevilla", Pais: "España", Telefono: " +34 689 25 48 65", email: "hcliment@gmail.com ", Etiquetas: "ANGULAR" },
    { id: 3, Nombre: "Ana Gutierrez Lozano", Ciudad: "Valencia", Pais: "España", Telefono: " +34 925 65 87 65", email: "glozano@gmail.com ", Etiquetas: "HTML" },
    { id: 4, Nombre: "Antonio Miguel Lacunza", Ciudad: "Madrid", Pais: "España", Telefono: " +34 658 95 24 56", email: "mlacunza@gmail... ", Etiquetas: "REACT" },
    { id: 5, Nombre: "Antonio Delgado Jimeno", Ciudad: "Gijón", Pais: "España", Telefono: " +34 925 65 54 25", email: "djimeno@gmail.com ", Etiquetas: "HTML" },
    { id: 6, Nombre: "Belén Jerez Rivera", Ciudad: "Barcelona", Pais: "España", Telefono: " +34 697 82 95 24", email: "jrivera@gmail.com ", Etiquetas: "HTML" },
    { id: 7, Nombre: "Carlos Yuste Guerrero", Ciudad: "Oviedo", Pais: "España", Telefono: " +34 697 82 95 65", email: "yguerrero@gmail.com ", Etiquetas: "HTML" },
    { id: 8, Nombre: "Carmina Pérez López", Ciudad: "Lugo", Pais: "España", Telefono: "  +34 695 84 62 54", email: "plopez@gmail.com ", Etiquetas: "HTML" },
    { id: 9, Nombre: "Carlos Yuste Guerrero", Ciudad: "Jaén", Pais: "España", Telefono: " +34 695 69 35 62", email: "yguerrero@gmail... ", Etiquetas: "HTML" },
    { id: 10, Nombre: "Belén Jerez Rivera", Ciudad: "Barcelona", Pais: "España", Telefono: " +34 697 82 95 24", email: "jrivera@gmail.com ", Etiquetas: "HTML&css" },
  ])

  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);


  // utilizo useEffect para ejecutar este código sólo una vez
  useEffect(() => {
    // copio la lista con [...list] y la ordeno con sort()
    const sortedList = [...list].sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
    // actualizo el estado con la nueva lista ya ordenada
    setList(sortedList)
  }, [])

  useEffect(() => {
    setFilteredList(
      list.filter((li) =>
        li.Nombre.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, list]);

  // vuelco el contenido del estado `list`
  return (
    <>
      <div className="Alumnos-search">
        <Label
          for="exampleEmail"
          sm={2}
        >
          Alumnos
            </Label>

        <Input
          className="Alumnos-search"
          id="exampleEmail"
          name="email"
          placeholder="Buscar por Nombre, Email o Ciudad"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>


      <Table borderless>
        <thead>
          <tr className="th-format">
            {/* <th> Id</th> */}
            <th className="th-format-v2" >
              <div>
                Nombre
                <button className="th-button"
                  onClick={() => {
                    let newSortedList = [...list].sort((a, b) => (a.Nombre > b.Nombre ? 1 : a.Nombre < b.Nombre ? -1 : 0))
                    // si la lista después de ordenarla tiene el mismo primer elemento, lo repito a la inversa
                    // (claro que esto es ineficiente, lo suyo sería habilitar otro estado para guardar el tipo de ordenamiento que hemos hecho)
                    if (newSortedList[0] === list[0])
                      newSortedList = [...list].sort((b, a) => (a.Nombre > b.Nombre ? 1 : a.Nombre < b.Nombre ? -1 : 0))
                    setList(newSortedList)
                  }}
                >
                  ⮁
              </button>
              </div>
            </th>
            <th> <div>
              Ciudad
                <button className="th-button"
                onClick={() => {
                  let newSortedList = [...list].sort((a, b) => (a.Ciudad > b.Ciudad ? 1 : a.Ciudad < b.Ciudad ? -1 : 0))
                  // si la lista después de ordenarla tiene el mismo primer elemento, lo repito a la inversa
                  // (claro que esto es ineficiente, lo suyo sería habilitar otro estado para guardar el tipo de ordenamiento que hemos hecho)
                  if (newSortedList[0] === list[0])
                    newSortedList = [...list].sort((b, a) => (a.Ciudad > b.Ciudad ? 1 : a.Ciudad < b.Ciudad ? -1 : 0))
                  setList(newSortedList)
                }}
              >
                ⮁
              </button>
            </div> </th>
            <th> <div>
              Pais
                <button className="th-button"
                onClick={() => {
                  let newSortedList = [...list].sort((a, b) => (a.Pais > b.Pais ? 1 : a.Pais < b.Pais ? -1 : 0))
                  // si la lista después de ordenarla tiene el mismo primer elemento, lo repito a la inversa
                  // (claro que esto es ineficiente, lo suyo sería habilitar otro estado para guardar el tipo de ordenamiento que hemos hecho)
                  if (newSortedList[0] === list[0])
                    newSortedList = [...list].sort((b, a) => (a.Pais > b.Pais ? 1 : a.Pais < b.Pais ? -1 : 0))
                  setList(newSortedList)
                }}
              >
                ⮁
              </button>
            </div> </th>
            <th> <div>
              Telefono
                <button className="th-button"
                onClick={() => {
                  let newSortedList = [...list].sort((a, b) => (a.Telefono > b.Telefono ? 1 : a.Telefono < b.Telefono ? -1 : 0))
                  // si la lista después de ordenarla tiene el mismo primer elemento, lo repito a la inversa
                  // (claro que esto es ineficiente, lo suyo sería habilitar otro estado para guardar el tipo de ordenamiento que hemos hecho)
                  if (newSortedList[0] === list[0])
                    newSortedList = [...list].sort((b, a) => (a.Telefono > b.Telefono ? 1 : a.Telefono < b.Telefono ? -1 : 0))
                  setList(newSortedList)
                }}
              >
                ⮁
              </button>
            </div></th>
            <th> <div>
              Correo Electrónico
                <button className="th-button"
                onClick={() => {
                  let newSortedList = [...list].sort((a, b) => (a.email > b.email ? 1 : a.email < b.email ? -1 : 0))
                  // si la lista después de ordenarla tiene el mismo primer elemento, lo repito a la inversa
                  // (claro que esto es ineficiente, lo suyo sería habilitar otro estado para guardar el tipo de ordenamiento que hemos hecho)
                  if (newSortedList[0] === list[0])
                    newSortedList = [...list].sort((b, a) => (a.email > b.email ? 1 : a.email < b.email ? -1 : 0))
                  setList(newSortedList)
                }}
              >
                ⮁
              </button>
            </div> </th>
            <th className="etiquetas-skill"> <div>
              Eqtiquetas
                <button className="th-button"
                onClick={() => {
                  let newSortedList = [...list].sort((a, b) => (a.Etiquetas > b.Etiquetas ? 1 : a.Etiquetas < b.Etiquetas ? -1 : 0))
                  // si la lista después de ordenarla tiene el mismo primer elemento, lo repito a la inversa
                  // (claro que esto es ineficiente, lo suyo sería habilitar otro estado para guardar el tipo de ordenamiento que hemos hecho)
                  if (newSortedList[0] === list[0])
                    newSortedList = [...list].sort((b, a) => (a.Etiquetas > b.Etiquetas ? 1 : a.Etiquetas < b.Etiquetas ? -1 : 0))
                  setList(newSortedList)
                }}
              >
                ⮁
              </button>
            </div> </th>
            {/* <th> Acciones</th> */}
          </tr>
        </thead>
        {filteredList.map(({ id, ...ListDetail }) => (
          <tbody key={id}>
            <tr className="th-details">
              <th >
                {ListDetail.Nombre}
              </th>
              <th >
                {ListDetail.Ciudad}
              </th>
              <th >
                {ListDetail.Pais}
              </th>
              <th >
                {ListDetail.Telefono}
              </th>
              <th >
                {ListDetail.email}
              </th>
              <th >
                <p className="labels-format">
                  {ListDetail.Etiquetas}
                </p>

              </th>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  )
}


export default Lista;