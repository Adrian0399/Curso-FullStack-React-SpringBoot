
import { invoice } from "../data/invoice";

export const getInvoice = () => {
  // console.log(invoice);

  // let total = 0;
  // invoice.items.forEach(item => {
  //   total = total + item.price * item.quantity;
  // });

  const total = invoice.items
  .map( item => item.quantity )
  .reduce( (accumulator, currentValue) => accumulator + currentValue, 0 );

  return { ...invoice, total };

}
