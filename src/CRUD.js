import React, {useState, useEffect, Fragment} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CRUD = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Changes in new branch 

    const empData = [
        {
            id: 1,
            name: "Aleem",
            age: 29,
            isActive: 1
        },
        {
            id: 2,
            name: "Umer",
            age: 29,
            isActive: 1
        },
        {
            id: 3,
            name: "Saif",
            age: 29,
            isActive: 1
        },
        {
            id: 4,
            name: "Usman",
            age: 29,
            isActive: 0
        }
    ]

    const [data, setData] = useState([]);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [isActive, setIsActive] = useState(0);


    const [editId, setEditId] = useState('');
    const [editName, setEditName] = useState('');
    const [editAge, setEditAge] = useState('');
    const [isEditActive, setEditIsActive] = useState(0);



    useEffect(() => {
        setData(empData);
    }, []);


    const handleEdit = (id) => {
        //alert(id);
        handleShow();
    } 

    const handleDelete = (id) => {
        if(window.confirm("Are you sure to delete this employee.") === true){
            alert(id);
        }  
    } 

    const handleUpdate = () => {

    }

    return(
       <Fragment>

        <Container>
            <Row>
                <Col>
                    <input type="text" className="form-control" placeholder="Enter name" 
                    value={name} onChange={(e) => setName(e.target.value)}/>
                </Col>
                <Col>
                    <input type="text" className="form-control" placeholder="Enter name" 
                    value={age} onChange={(e) => setAge(e.target.value)}/>
                </Col>
                <Col>
                    <input type="checkbox" checked={isActive === 1 ? true : false}
                        onChange={(e) => setIsActive(e)} value={isActive} />
                    <label>IsActive</label>
                </Col>
                <Col>
                    <button className="btn btn-primary">Submit</button>
                </Col>
            </Row>
        </Container>


        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>IsActive</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.length > 0 ? 
                    data.map((item, index) => {
                        return(
                            <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.isActive}</td>
                            <td colSpan={2}>
                                <button className="btn btn-primary" onClick={() => handleEdit(item.id)}>Edit</button> &nbsp;
                                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                    : 'Loading...'
                }
            </tbody>
            </Table>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modify / Update Employee</Modal.Title>
                </Modal.Header>
                    <Row>
                        <Col>
                            <input type="text" className="form-control" placeholder="Enter name" 
                            value={editName} onChange={(e) => setEditName(e.target.value)}/>
                        </Col>
                        <Col>
                            <input type="text" className="form-control" placeholder="Enter name" 
                            value={editAge} onChange={(e) => setEditAge(e.target.value)}/>
                        </Col>
                        <Col>
                            <input type="checkbox" checked={isActive === 1 ? true : false}
                                onChange={(e) => setEditIsActive(e)} value={isEditActive} />
                            <label>IsActive</label>
                        </Col>
                    </Row>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleUpdate}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>


       </Fragment>



    )
}

export default CRUD;