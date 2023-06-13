import { useState } from "react";
import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemView } from "./components/ListItemView";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {

    const invoice = getInvoice();
    
    const { total, id, name, client, company, items: itemsInitial } = getInvoice();

    const [formItemsState, setFormItemsState] = useState({
      product: '',
      price: '',
      quantity: '',
    })

    const { product, price, quantity } = formItemsState;

    const [ items, setItems ] = useState(itemsInitial);

    const [counter, setCounter ] = useState(7);

    const onInputChange = ({ target: {name, value} }) => {
      console.log(value);
      console.log(name);
      setFormItemsState({
        ...formItemsState,
        [name]: value
      });
    }


  return (
    <>
    <div className="container">
      <div className="card my-3">
      <div className="card-header">
        Ejemplo Factura
      </div>
        <div className="card-body">
          <InvoiceView id={id} name={name} />
          <div className="row my-3">
            <div className="col">
              <ClientView title="Cliente" client={client}/>
            </div>
            <div className="col">
              <CompanyView title="Empresa" company={company} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="card my-3">
        <ListItemView title="Productos de la factura" items={items}/>
        <TotalView total = { total } />
        
        <form 
          className="m-3 w-50"
          onSubmit={ event => {
            event.preventDefault();

            if (product.trim().length <= 1) return;
            if (price.trim().length <= 1) return;
            if (isNaN(price.trim())) {
              alert('El precio no es valio!')
              return
            };;
            if (quantity.trim().length < 1) {
              alert('La cantidad no es valida!')
              return
            };
            if (isNaN(quantity.trim())) {
              alert('La cantidad no es valida!')
              return
            };

            setItems([...items, { 
              id: counter, 
              product: product.trim(), 
              price: +price.trim(), 
              quantity: parseInt(quantity.trim(), 10) 
            }]);
            setFormItemsState({
              product: '',
              price: '',
              quantity: '',
            });
            setCounter(counter + 1);
          }}
        >
          <input 
            type="text" 
            name="product"
            value={ product }
            placeholder="Producto"
            className="form-control mt-3"
            onChange={ onInputChange }
          />

          <input 
            type="text" 
            name="price"
            value={ price }
            placeholder="Precio"
            className="form-control mt-3"
            onChange={ onInputChange }
          />
          
          <input 
            type="text" 
            name="quantity"
            value={ quantity }
            placeholder="Cantidad"
            className="form-control mt-3"
            onChange={ onInputChange }
          />

          <button type="submit" className="btn btn-primary mt-3">
            Nuevo Item
          </button>

        </form>
      </div>
    </div>
    </>
  )
}
