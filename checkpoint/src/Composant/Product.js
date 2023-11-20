import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card ,CardGroup} from 'react-bootstrap';
import user from './user1.png';
import user2 from './user2.png';
import user3 from './user3.png';



const products ={name :"Faicel Sdiri" , price: 9999 , description : " FULL-STACK Devoloper",  image: user}
const products2 ={name :"DEV 02" , price: 9999 , description : " FRONT-END DEVOLOPER",  image: user2}
const products3 ={name :"DEV 03" , price: 9999 , description : "BACK-END DEVOLOPER",  image: user3}


function Product() {
    return (
            <>     
        {/* heading */}
        <h1> DEVOLOPER </h1>
{/* card */}
<CardGroup>
            <Card>

                    {!products.name && (
                    <Card.Img variant="top" src = {products.images} alt="photo de foulen" />
                    )}
                    {products.name && (
                    <Card.Img variant="top" src = {products.image} alt="logo" />
                    )}
                    <Card.Body>
                    {!products.name && (
                    <Card.Title>{ "Hello, there!"}</Card.Title>
                    )}
                    {products.name && (
                    <Card.Title>{ "Hello  "+products.name}</Card.Title>
                    )}
                    <Card.Text>
                    {products.description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">{products.price}</small>
                    </Card.Footer>
            </Card>


            <Card>
                    {!products2.name && (
                    <Card.Img variant="top" src = {products2.images} alt="photo de foulen" />
                    )}
                    {products2.name && (
                    <Card.Img variant="top" src = {products2.image} alt="logo" />
                    )}
                    <Card.Body>
                    {!products2.name && (
                    <Card.Title>{ "Hello, there!"}</Card.Title>
                    )}
                    {products2.name && (
                    <Card.Title>{ "Hello  "+products2.name}</Card.Title>
                    )}
                    <Card.Text>
                        {products2.description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">{products2.price}</small>
                    </Card.Footer>
            </Card>

            <Card>
                    {!products3.name && (
                    <Card.Img variant="top" src = {products3.images} alt="photo de foulen" />
                    )}
                    {products3.name && (
                    <Card.Img variant="top" src = {products3.image} alt="logo" />
                    )}
                    <Card.Body>
                    {!products3.name && (
                    <Card.Title>{ "Hello, there!"}</Card.Title>
                    )}
                    {products3.name && (
                    <Card.Title>{ "Hello  "+products3.name}</Card.Title>
                    )}
                    <Card.Text>
                        {products3.description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">{products3.price}</small>
                    </Card.Footer>
            </Card>
    </CardGroup>
            </>




        


    );
}
export default Product;