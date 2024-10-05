
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { IoIosArrowBack } from 'react-icons/io';
import { useParams, Link } from 'react-router-dom';
import Rating from '../components/Rating';
import products from '../products'

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((product) => product._id === productId);

  console.log(product)

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        <div className="d-flex align-items-center">
          <IoIosArrowBack className="me-1" /> Back
        </div>
      </Link>
      <Row>
        <Col md={6} className="my-auto">
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item className="px-0">
              <h3 className="m-0">{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item className="px-0">
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </ListGroup.Item>
            <ListGroup.Item className="px-0">{product.description}</ListGroup.Item>
          </ListGroup>
          <Card>
            <ListGroup variant="flush" className="text-center">
              <ListGroup.Item>
                <Row>
                  <Col xs={6}>Price: </Col>
                  <Col xs={6}>
                    <strong>{product.price} $</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col xs={6}>Status: </Col>
                  <Col xs={6}>
                    <strong>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-grid">
                  <Button size="lg" disabled={product.countInStock === 0}>
                    Add To Cart
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ProductScreen