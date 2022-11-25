import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { BsEnvelopeOpenFill, BsFillTelephoneFill, BsGeoAltFill } from "react-icons/bs";

const UserCard = ({el}) => {
  return (
    <div>
            <Card style={{ width: '18rem',marginTop:'100px',marginBottom:'20px' }}>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
        <BsGeoAltFill/> {` ${el.address.street},${el.address.suite}-${el.address.city}-`}
        </Card.Text>
        <BsEnvelopeOpenFill/>{el.email}
        <br />
        <BsFillTelephoneFill/>{el.phone}
        <br />
        <Button variant="primary" >Go for details</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard