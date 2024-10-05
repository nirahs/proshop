import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { IoIosArrowBack } from 'react-icons/io';
import { useParams, Link } from 'react-router-dom';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((product) => product._id === productId);

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        <div className="d-flex align-items-center">
          <IoIosArrowBack className="me-1" /> Back
        </div>
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </ListGroup.Item>
            <ListGroup.Item className="description">{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price: </Col>
                  <Col>
                    <strong>{product.price} $</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status: </Col>
                  <Col>
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
};

export default ProductScreen;
