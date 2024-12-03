import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
  { id: 4, description: "Towel", quantity: 1, packed: false },
  { id: 5, description: "Polish", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      {/* <Item/> */}
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>🌳 Far Away 💼</h1>
    </div>
  );
}
function Form() {

  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(5);

  function handleSubmit(e){
    e.preventDefault(); 
  }

  return (
    <form className="add-form"  onSubmit={handleSubmit}> 
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={e=>setQuantity(e.target.value)} > 
        {Array.form({length: 20}, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}/>
        ))}
      </select >
      <input type="text" placeholder="Item..." value={description}  onChange={(e) => setDescription(e.target.value)}/>
        <button>Add</button> 
    </form>
  );
}



function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <div>
      <li>
        <span style={item.packed ? {textDecoration: "line-through"} : {}}>
          {item.quantity}
          {item.description}
        </span>
      </li>
      <button>❌</button> 
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em> 💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
