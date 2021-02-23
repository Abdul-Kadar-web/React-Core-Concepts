import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


// javascript file er moddhe amra HTML lihkbo
function App() {
  const nayoks = ['Anwar', 'Salman', 'Razzak', 'shakib']
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' },
    { name: 'premier EL', price: '$249.99' }
  ]
  // koi ekbar na likhe map er madhome ek bar a kora jai
  const productNames = products.map(product => product.name)



  var person = {
    name: "Dr. mahfuz",
    job: "singer"
  }
  var person2 = {
    name: "Eva Rahman",
    job: "kokil kondi"
  }
  var style = {
    color: 'red',
    backgroundColor: 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <p>I Am a React Person</p>
        <h1>My heading</h1>
        <h2>plus:{2 + 4}</h2>
        <h3 style={style}>singer: {person.name + " " + person.job} </h3>
        <h3 style={{ backgroundColor: 'cyan', color: 'green' }}>singer: {person2.name + " " + person2.job}</h3>
        <p>My first react Paragraph</p>

        <Counter></Counter>

        <Users></Users>

        <ul>
          {/* li ekadhik bar na likhe map er maddhome ek bar lihkle hoe jai */}
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        {/* ek line a  */}
        {
          products.map(product => <Product product={product}></Product>)
        }

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

        {
          nayoks.map(nayok => <Person nayok={nayok}></Person>)
        }
        <Person name={nayoks[0]} nayika="moushumi"></Person>
        <Person name="Jashim" nayika="Shabana"></Person>
        <Person name="BappaRaz" nayika="Cheka"></Person>
        <Person name="Elias K" nayika="Bobita"></Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  // koi ek vabe increase kora jai
  // const handleIncrease = () =>  setCount(count + 1);

  // const handleIncrease = () => {
  //     setCount(count + 1);
  //   };

  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() =>  setCount(count + 1)}>Increase</button>
      {/* <button onClick={handleIncrease}>Increase</button> */}
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}= {user.phone} :- {user.email}</li>)
        }
      </ul>
    </div>
  )
}


function Product(props) {
  const ProductStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightGray',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '10px'
  }
  const { name, price } = props.product;
  return (
    <div style={ProductStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )

}


function Person(props) {
  // 2 vabe style dewa jai and etar name ta {personStyle} ei vabe dia dite hobe
  const personStyle = {
    border: '2px solid red',
    margin: '10px'
  }
  return (
    <div style={{ border: '2px solid red', margin: '10px', width: '400px' }}>
      <h1>Nayok: {props.name}</h1>
      <h3>Hero of {props.nayika}</h3>
    </div>
  )
}

export default App;
