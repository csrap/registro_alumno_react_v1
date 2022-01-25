import React, { useState, useEffect } from 'react';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Input, Label, Col, Form, Row } from 'reactstrap';
import '../App.css';


const InputSearch = () => {
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

  useEffect(() => {
    setFilteredList(
      list.filter((li) =>
        li.Nombre.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, list]);

  return (
    <>
      <div>
        <Col sm={10}>
          <Input
            className="Alumnos-search"
            id="exampleEmail"
            name="email"
            placeholder="Buscar por Nombre, Email o Ciudad"
            type="search"
            onChange={(e) => setSearch(e.target.value)}
          // onChange={event => {
          //   console.log(event.target.value);
          // }}
          />
          {filteredList.map((list, idx) => (
            <ListDetail key={idx} {...list} />
          ))}
        </Col>
      </div>
    </>
  )
}

const ListDetail = (props) => {
  const { Nombre, Ciudad, Pais, Telefono, email, Etiquetas } = props;

  return (
    <>
      <Table>
        <tbody>
          <tr>
            {/* <td>{elemento.id} </td> */}
            <td>{Nombre} </td>
            <td>{Ciudad} </td>
            <td> {Pais}</td>
            <td> {Telefono}</td>
            <td> {email}</td>
            <td> {Etiquetas}</td>
            {/* <td>  <Button
                    color="primary"
                    onClick={() => this.showModalEdit}
                  > Editar</Button> {" "}
                    <Button
                      color="danger"
                    >Eliminar </Button>
                  </td> */}
          </tr>
        </tbody>


      </Table>
      {/* <p>{Nombre}</p>
      <p>{Ciudad}</p> */}
    </>
  );
};

export default InputSearch;