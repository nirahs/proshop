import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3">
      {/* Link component allows to perform client-side routing which updates the URL without requesting another document from the server */}
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body className="">
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div" className="mb-1">
          <Rating rating={product.rating} numReviews={product.numReviews} />
        </Card.Text>

        <Card.Text as="h3">{product.price}$</Card.Text>
      </Card.Body>
    </Card>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    brand: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    countInStock: PropTypes.number,
    rating: PropTypes.number,
    numReviews: PropTypes.number,
  }),
};

export default Product