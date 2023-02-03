import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section>
      <h1>Product</h1>
      <ul>
        <Link to='/products/p1'>Product 1</Link>
        <Link to='/products/p2'>Product 2</Link>
        <Link to='/products/p3'>Product 3</Link>
      </ul>
    </section>
  );
};

export default Products;
