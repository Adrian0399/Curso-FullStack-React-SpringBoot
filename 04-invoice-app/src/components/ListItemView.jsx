import PropTypes from 'prop-types';
import { RowItemView } from "./RowItemView"


export const ListItemView = ({ title, items }) => {

  return (
    <>
      <h4 className="card-header">
        { title }
      </h4>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
              { items.map(({ id, product, price, quantity }) => (
                  <RowItemView key={id} product={product} price={price} quantity={quantity} />
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

ListItemView.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}


