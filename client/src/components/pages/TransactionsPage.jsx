import { React, useState } from "react"
// import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"
import Button from '@mui/material/Button';
import "../../styles/Transactions.css"

const TransactionPage = () => {
    return (

        <header>Transactions
            <Button>Hello world </Button>
        </header>
        
    );
    // return (
    //     <>
    //         <header>Transactions</header>
    //         <body>
    //             <div>
    //                 <form>
    //                     <table>
    //                         <tr>
    //                             <td>
    //                                 <Card className = "my"> 
    //                                 <img
    //                                     alt="Sample"
    //                                     src="https://picsum.photos/300/200"
    //                                 />
    //                                 <Card
    //                                 className="my-2"
    //                                 style={{
    //                                     width: '18rem'
    //                                     }}
    //                                 >
    //                                 <CardBody>
    //                                     <CardTitle tag="h5">
    //                                     Card title
    //                                     </CardTitle>
    //                                     <CardSubtitle
    //                                     className="mb-2 text-muted"
    //                                     tag="h6"
    //                                     >
    //                                     Card subtitle
    //                                     </CardSubtitle>
    //                                     <CardText>
    //                                     Some quick example text to build on the card title and make up the bulk of the card‘s content.
    //                                     </CardText>
    //                                     <Button>
    //                                     Button
    //                                     </Button>
    //                                 </CardBody>
    //                                 </Card>
    //                                 </Card>
    //                             </td>
    //                             {/* <td>
    //                                 <Card
    //                                 className="my-2"
    //                                 color="success"
    //                                 inverse
    //                                 style={{
    //                                 width: '18rem'
    //                                 }}
    //                                 >
    //                                 <img
    //                                     alt="Sample"
    //                                     src="https://picsum.photos/300/200"
    //                                 />
    //                                 <CardBody>
    //                                     <CardTitle tag="h5">
    //                                     Card title
    //                                     </CardTitle>
    //                                     <CardSubtitle
    //                                     className="mb-2 text-muted"
    //                                     tag="h6"
    //                                     >
    //                                     Card subtitle
    //                                     </CardSubtitle>
    //                                     <CardText>
    //                                     Some quick example text to build on the card title and make up the bulk of the card‘s content.
    //                                     </CardText>
    //                                     <Button>
    //                                     Button
    //                                     </Button>
    //                                 </CardBody>
    //                                 </Card>
    //                             </td>
    //                             <td>
    //                                 <Card
    //                                 className="my-2"
    //                                 color="success"
    //                                 inverse
    //                                 style={{
    //                                 width: '18rem'
    //                                 }}
    //                                 >
    //                                 <img
    //                                     alt="Sample"
    //                                     src="https://picsum.photos/300/200"
    //                                 />
    //                                 <CardBody>
    //                                     <CardTitle tag="h5">
    //                                     Card title
    //                                     </CardTitle>
    //                                     <CardSubtitle
    //                                     className="mb-2 text-muted"
    //                                     tag="h6"
    //                                     >
    //                                     Card subtitle
    //                                     </CardSubtitle>
    //                                     <CardText>
    //                                     Some quick example text to build on the card title and make up the bulk of the card‘s content.
    //                                     </CardText>
    //                                     <Button>
    //                                     Button
    //                                     </Button>
    //                                 </CardBody>
    //                                 </Card>
    //                             </td> */}
    //                         </tr>
    //                         {/* <tr>
    //                             <td>
    //                                 <Card
    //                                 className="my-2"
    //                                 color="success"
    //                                 inverse
    //                                 style={{
    //                                 width: '18rem'
    //                                 }}
    //                                 >
    //                                 <img
    //                                     alt="Sample"
    //                                     src="https://picsum.photos/300/200"
    //                                 />
    //                                 <CardBody>
    //                                     <CardTitle tag="h5">
    //                                     Card title
    //                                     </CardTitle>
    //                                     <CardSubtitle
    //                                     className="mb-2 text-muted"
    //                                     tag="h6"
    //                                     >
    //                                     Card subtitle
    //                                     </CardSubtitle>
    //                                     <CardText>
    //                                     Some quick example text to build on the card title and make up the bulk of the card‘s content.
    //                                     </CardText>
    //                                     <Button>
    //                                     Button
    //                                     </Button>
    //                                 </CardBody>
    //                                 </Card>
    //                             </td>
    //                             <td>
    //                                 <Card
    //                                 className="my-2"
    //                                 color="success"
    //                                 inverse
    //                                 style={{
    //                                 width: '18rem'
    //                                 }}
    //                                 >
    //                                 <img
    //                                     alt="Sample"
    //                                     src="https://picsum.photos/300/200"
    //                                 />
    //                                 <CardBody>
    //                                     <CardTitle tag="h5">
    //                                     Card title
    //                                     </CardTitle>
    //                                     <CardSubtitle
    //                                     className="mb-2 text-muted"
    //                                     tag="h6"
    //                                     >
    //                                     Card subtitle
    //                                     </CardSubtitle>
    //                                     <CardText>
    //                                     Some quick example text to build on the card title and make up the bulk of the card‘s content.
    //                                     </CardText>
    //                                     <Button>
    //                                     Button
    //                                     </Button>
    //                                 </CardBody>
    //                                 </Card>
    //                             </td>
    //                             <td>
    //                                 <Card
    //                                 className="my-2"
    //                                 color="success"
    //                                 inverse
    //                                 style={{
    //                                 width: '18rem'
    //                                 }}
    //                                 >
    //                                 <img
    //                                     alt="Sample"
    //                                     src="https://picsum.photos/300/200"
    //                                 />
    //                                 <CardBody>
    //                                     <CardTitle tag="h5">
    //                                     Card title
    //                                     </CardTitle>
    //                                     <CardSubtitle
    //                                     className="mb-2 text-muted"
    //                                     tag="h6"
    //                                     >
    //                                     Card subtitle
    //                                     </CardSubtitle>
    //                                     <CardText>
    //                                     Some quick example text to build on the card title and make up the bulk of the card‘s content.
    //                                     </CardText>
    //                                     <Button>
    //                                     Button
    //                                     </Button>
    //                                 </CardBody>
    //                                 </Card>
    //                             </td>
    //                         </tr> */}
    //                     </table>
    //                 </form>
    //             </div>
    //         </body>
    //     </>
    // );
};

export default TransactionPage;