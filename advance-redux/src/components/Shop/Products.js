import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 6,
    title: "My first book",
    description: "First Book, I ever wrote!",
  },
  {
    id: "p2",
    price: 6,
    title: "Super Inspired",
    description: "Second Book, I ever wrote!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            title={product.title}
            price={product.price}
            key={product.id}
            id={product.id}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
