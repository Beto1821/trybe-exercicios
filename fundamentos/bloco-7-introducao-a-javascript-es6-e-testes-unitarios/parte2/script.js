const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// const customerInfo = ({
//   name,
//   phoneNumber,
//   address : {stree, number, apartment},
//   order: {
//     delivery: {deliveryPerson},
//   }
// }) => {return `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}`

// };

// console.log(customerInfo(order));

const orderModifier = ({
  name,
  order: {pizza, drinks },
  payment: {total},
}) => {
  name = 'Luiz Silva'
  return `Olá ${name}, o total do seu pedido de ${Object.keys(pizza).join(', ')} e ${Object.keys(drinks)} é R\$${total}`
};

console.log(orderModifier(order));



//1  Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

// Note que o parâmetro da função já está sendo passado na chamada da função.

//2 Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.