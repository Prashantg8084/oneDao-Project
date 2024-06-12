import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "../assets/css/dashboard.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTableColumns,faCar,faBars,faHandsClapping,faRightFromBracket,
    faUsers,faIdCard,faEarthAmericas,faCarOn,faCodeBranch,faUsersLine,faSliders,faCircleDollarToSlot,faFolderClosed,faArrowRight }
 from '@fortawesome/free-solid-svg-icons';
import myImage from '../assets/images/userss.jpg';

const Dashboard = () => {
    const[data, setData] = useState([]);
    const [tableData, setTableData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('https://reqres.in/api/users?page=1')
        .then(response=>response.json())
        .then(result=>setData(result.data))

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(result=>setTableData(result))
    },[])
    
    const handleLogout = (e) => {
        e.preventDefault();
        navigate('/login?loggedout')
    }

  return (
    <div className='main-dashboard dashboard adminPanel'>
        <div className='left'>
            <div className='profile-section'>
                <Card >
                     <Card.Img variant="top" src={myImage} />
                     <div className='profile-detail'>
                        <Card.Title className='title-name'>Prashant Garg</Card.Title>
                        <Card.Title className='title-contact'>123456789</Card.Title>
                    </div>
                </Card>
            </div>
            <h3>Main Menu</h3>
            <nav className="navbar-bar ">
                <ul className="navbar">
                    <li className="nav-item active"><a className="nav-link" href="#"><FontAwesomeIcon icon={faTableColumns}  />Dashboard</a><div className='angleBorderTop'></div><div className='angleBorderBottom'></div></li>
                    <li className="nav-item"><a className="nav-link" href="#"><FontAwesomeIcon icon={faCar} />Orders</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><FontAwesomeIcon icon={faUsers} />Clients</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><FontAwesomeIcon icon={faIdCard} />Drivers</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><FontAwesomeIcon icon={faCircleDollarToSlot} />Shift</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><FontAwesomeIcon icon={faEarthAmericas} />Live Map</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><FontAwesomeIcon icon={faCarOn} />Car Classes</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><FontAwesomeIcon icon={faCodeBranch} />Branches</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><FontAwesomeIcon icon={faUsersLine} />Moderators</a></li>
                    <li className="nav-item"><a className="nav-link" href="#"><FontAwesomeIcon icon={faSliders} />Settings</a></li>
                </ul>
            </nav>
        </div>
        
        <div className='right content'>
            <div className='top'>
                <div className='header-section'>
                    <div className='left-header col-md-10'>
                        <FontAwesomeIcon icon={faBars} />
                        <h5>Good Morning , Prashant</h5>
                        <FontAwesomeIcon icon={faHandsClapping} />
                        <p>You have <span className='highlights'>1 new message</span></p>
                    </div>
                    <div className='log-out col-md-2'>
                        <FontAwesomeIcon icon={faRightFromBracket} onClick={(e)=>handleLogout(e)} />
                    </div>
                </div>
                <div className='knowledgebase col-md-8'>
                    <h5>Knowledge Base</h5>
                    <div className='infoCards'>
                        <Card
                            bg="danger"
                            key="danger"
                            text="dark"
                            style={{ width: '18rem' }}
                            className="mb-2"
                        >
                            <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={faFolderClosed} />Total Orders<FontAwesomeIcon icon={faArrowRight} /></Card.Title>
                                
                            </Card.Body>
                        </Card>
                        <Card
                            bg="warning"
                            key="warning"
                            text="dark"
                            style={{ width: '18rem' }}
                            className="mb-2"
                        >
                            <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={faFolderClosed} />Total Earnings<FontAwesomeIcon icon={faArrowRight} /></Card.Title>
                                
                            </Card.Body>
                        </Card>
                        <Card
                            bg="info"
                            key="info"
                            text="dark"
                            style={{ width: '18rem' }}
                            className="mb-2"
                        >
                            <Card.Body>
                                <Card.Title><FontAwesomeIcon icon={faFolderClosed} />Profits<FontAwesomeIcon icon={faArrowRight} /></Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='chart'>
                        
                    </div>
                </div>
                <div className='topDrivers col-md-4'>
                    <h5>Top Drivers</h5>
                    {(data.length >= 1) &&
                        data.map(item => 
                            <Card key={item.id}>
                                <Card.Img variant="top" src={item.avatar} />
                                <div className='detail'>
                                    <Card.Title>{item.first_name} {item.last_name}</Card.Title>
                                    <Card.Title className='email'>{item.email}</Card.Title>
                                </div>
                                <div className='orders'>
                                    <Card.Title>Orders: 5</Card.Title>
                                    <Card.Title>Income: $10</Card.Title>
                                </div>
                            </Card>
                        )
                    }
                </div>
            </div>
            <div className='table col-md-12'>
                {tableData &&
                    <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>
                            <Form.Check
                                type="checkbox"
                                id={`default-checkbox`}
                            />
                        </th>
                        <th>User</th>
                        <th>Car Comfort</th>
                        <th>Ordered Time</th>
                        <th>Start Location</th>
                        <th>Finish Location</th>
                        <th>Income</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map(item => 
                                <tr key={item.id}>
                                    <td>
                                        <Form.Check
                                            type="checkbox"
                                            id={item.id}
                                        />
                                    </td>
                                    <td><b>{item.name}</b> <span>{item.phone}</span></td>
                                    <td>---</td>
                                    <td>-</td>
                                    <td>{item.address.street}, {item.address.city}</td>
                                    <td>{item.address.street}, {item.address.city}</td>
                                    <td>-</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                }
            </div>
        </div>
    </div>
  )
}

export default Dashboard
