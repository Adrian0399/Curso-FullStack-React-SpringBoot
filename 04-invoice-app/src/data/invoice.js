
export const invoice = {
    id: 10,
    name: 'Componentes PC',
    client: {
        name: 'Adrian',
        lastName: 'Olvera',
        address: {
            country: 'MEX',
            city: 'Ixtapaluca',
            street: 'One Street',
            number: 269,
        },
    },
    company: {
        name: 'Kaibil S.A. de C.V.',
        fiscalNumber: 57030899,
    },
    items: [
        {
            id: 1,
            product: 'PlayStation 5',
            price: 13999,
            quantity: 200,
        },
        {
            id: 2,
            product: 'Mac Book Pro M2',
            price: 49999,
            quantity: 50,
        },
        {
            id: 3,
            product: 'Monitor Asus 165hz',
            price: 3999,
            quantity: 120,
        },
        {
            id: 4,
            product: 'Dell G7 RTX 2060 Super',
            price: 22000,
            quantity: 25,
        },
        {
            id: 5,
            product: 'PS-VITA',
            price:6500,
            quantity: 80,
        },
        {
            id: 6,
            product: 'Mouse Logitech G PRO X',
            price: 1.300,
            quantity: 700,
        },
    ]
}