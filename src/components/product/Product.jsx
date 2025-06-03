import "./Product.css";
function Product(props) {
  const {
    photoName: srcPhoto,
    name: nameTitle,
    description,
    price,
  } = props.product;
  return (
    <li className="product">
      <img src={srcPhoto} />
      <div>
        <h3>{nameTitle}</h3>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}

export default Product;
