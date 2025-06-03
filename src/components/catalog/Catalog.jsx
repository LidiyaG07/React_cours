import "./Catalog.css";

function Catalog(props) {
  return (
    <main className="catalog">
      <ul className="products">{props.children}</ul>
    </main>
  );
}

export default Catalog;
