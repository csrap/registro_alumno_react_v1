import logo from './logo.svg';
import './App.css';
import React from 'react';
import Lista from './components/datosAlumnos';
import InputSearch from './components/filters';
// import pdf from './pages/pdf';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Input, Label, Col, Form, Row, FormText, CardImg } from 'reactstrap';
import { Select } from "semantic-ui-react";

// import VistaWeb from './pages/VistaWeb';
// import getPdf from './pages/pdf';

const data = [
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
]

const LabelsOptions = [
  { key: "HTML@CSS ", value: "HTML@CSS ", text: "HTML@CSS   " },
  { key: "REACT ", value: "REACT  ", text: "REACT  " },
  { key: "ANGULAR", value: "ANGULAR", text: "ANGULAR   " },
  { key: "JAVA", value: "JAVA ", text: "JAVA   " },
];


class App extends React.Component {
  state = {
    data: data,
    form: {
      id: '',
      Nombre: '',
      Ciudad: '',
      Pais: '',
      Telefono: '',
      email: '',
      Etiquetas: '',
    },
    modalInsert: false,
    modalEdit: false,
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })

  }

  showModalInsert = () => {
    this.setState({ modalInsert: true });
  }

  hideModalInsert = () => {
    this.setState({ modalInsert: false });

  }

  showModalEdit = () => {
    this.setState({ modalEdit: true });
  }

  hideModalEdit = () => {
    this.setState({ modalEditt: false });

  }

  insertData = () => {
    var valueNew = { ...this.state.form };
    valueNew.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valueNew);
    this.setState({ data: lista, modalInsert: false });

  }

  render() {
    return (
      <>
        <Container>
          <div className="UserName-header">
            <h2 className="layout-title "> OpenBootcamp <span className="Alumno"> | Alumnos</span></h2>
            <br />
            <div>
              <Input
                id="exampleSelect"
                name="select"
                type="select"

              >
                <option>
                  User Name
      </option>
                <option>
                  Alumno 1
      </option>
              </Input>
            </div>
          </div>

          <br />
          <div className="Alumnos-search">
            <div>
              <Label
                for="exampleEmail"
                sm={2}
              >

              </Label>
            </div>
            <div>


            </div>
            <div>
              <Button
                className="btn-add"
                color="primary"
                onClick={() => this.showModalInsert()}
              >
                +    Añadir alumnos
              </Button>
            </div>
          </div>
          <br /> <br />
          <div>
            <Lista>

            </Lista>

          </div>


          <div className="filters-layout">
            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">
                      Filters
        </Label>
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="select"
                    >
                      <option>
                        Eliga una Opción
                    </option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">
                      Pais
                  </Label>
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="select"
                    >
                      <option>
                        España
                    </option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleEmail">
                  Ciudad
        </Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                >
                  <option>
                    Valencia
                    </option>
                </Input>
              </FormGroup>
              <FormGroup
                row
                tag="fieldset"
              >
                <legend className="col-form-label col-sm-2">
                  Presencial / a distancia
    </legend>
                <Col sm={10}>
                  <FormGroup check>
                    <Input
                      name="radio2"
                      type="radio"
                    />
                    {' '}
                    <Label check>
                      Presencial
        </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      name="radio2"
                      type="radio"
                    />
                    {' '}
                    <Label check>
                      En remoto
                  </Label>
                  </FormGroup>
                </Col>
              </FormGroup>

              <FormGroup
                row
                tag="fieldset"
              >
                <legend className="col-form-label col-sm-2">
                  Posibilidad traslado
    </legend>
                <Col sm={10}>
                  <FormGroup check>
                    <Input
                      name="radio2"
                      type="radio"
                    />
                    {' '}
                    <Label check>
                      Si
                </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      name="radio2"
                      type="radio"
                    />
                    {' '}
                    <Label check>
                      No
                  </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <Button>
                Filters
            </Button>
              {' '}
              <Button>
                Clear
            </Button>
            </Form>
          </div>



        </Container>

        <Modal
          isOpen={this.state.modalInsert}
          className="modal-format-card"

        >
          <ModalHeader >
            <div className="img-perfil">
              <div className="img-perfil-a">
                <img src="./img/cv.jpg" alt="" />
              </div>
              <div className="img-perfil-b">
                <h4>  Nuevo Alumno </h4>
              </div>
            </div>




          </ModalHeader>


          <ModalBody
            className="modal-content-format">
            <div className="div1">
              <FormGroup>
                <label className="name-surname" >
                  Nombre y Apellidos
            </label>
                <br />
                <input
                  name="Nombre"
                  type="text"
                  className="form-control-name"
                  onChange={this.handleChange}
                  placeholder=" Nombre Alumno"
                />
              </FormGroup>

              <FormGroup>
                <label>
                  N° de Teléfono
            </label>

                <input
                  name="Ciudad"
                  type="text"
                  className="form-control-v1"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>
                  Email
            </label>
                <input
                  name="Pais"
                  type="text"
                  className="form-control-v1"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect">
                  Pais
    </Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                >
                  <option>
                    España
      </option>
                  <option>
                    Italia
      </option>
                  <option>
                    Alemania
      </option>
                  <option>
                    UK
      </option>
                  <option>
                    Portugal
      </option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect">
                  Ciudad
    </Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                >
                  <option>
                    Valencia
      </option>
                  <option>
                    Madrid
      </option>
                  <option>
                    Sevilla
      </option>
                  <option>
                    Barcelona
      </option>
                  <option>
                    Alicante
      </option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect">
                  Traslado
    </Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                >
                  <option>
                    No
      </option>
                  <option>
                    Si
      </option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect">
                  Presencial
    </Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                >
                  <option>
                    En remoto
      </option>
                  <option>
                    Presencial
      </option>
                </Input>
              </FormGroup>
            </div>



            <div class="div2">

              <FormGroup>
                <Label for="exampleFile">
                  Documento CV
    </Label>
                <Input
                  id="exampleFile"
                  name="file"
                  type="file"
                />
                <FormText>
                  Archivos soportados: .pdf Tamaño de archivo máximo: 20 MB
    </FormText>
                <br />
                <Button outline>
                  Borrar
  </Button>
              </FormGroup>

              <FormGroup>



              </FormGroup>



              <div >
                <Select
                  className="Select-labels"
                  multiple
                  name="labels"
                  placeholder="Etiquetas"
                  // value={state.tags}
                  // onChange={(e, { value }) =>
                  //   setState({
                  //     ...state,
                  //     [Object.keys(state)[3]]: value,
                  //   })
                  // }
                  options={LabelsOptions}
                />

              </div>


            </div>

          </ModalBody>



          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertData()}
            >
              Insertar
            </Button>

            <Button
              color="danger"
              onClick={() => this.hideModalInsert()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalEdit}>
          <ModalHeader>
            <div> <h3>  Editar Registro </h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id:
            </label>
              <input
                type="text"
                className="form-control"
                readOnly
              />
            </FormGroup>

            <FormGroup>
              <label>
                Nombre
            </label>
              <input
                name="Nombre"
                type="text"
                className="form-control"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Ciudad
            </label>
              <input
                name="Ciudad"
                type="text"
                className="form-control"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Pais
            </label>
              <input
                name="Pais"
                type="text"
                className="form-control"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Teléfono
            </label>
              <input
                name="Telefono"
                type="text"
                className="form-control"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Correo Electrónico
            </label>
              <input
                name="Email"
                type="text"
                className="form-control"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Etiquetas
            </label>
              <input
                name="Etiquetas"
                type="text"
                className="form-control"
                onChange={this.handleChange}
              />
            </FormGroup>
            {/* <Pdf>

            </Pdf> */}
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
            >
              Editar
            </Button>

            <Button
              color="danger"
              onClick={() => this.hideModalEdit}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>)
  }
}

export default App;
