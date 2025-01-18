import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  // lifiting the state
  const [items, setItems] = useState([]);

  //to store item in array
  function handleAddItem(item) {
    setItems((items) => [...items, item]); //spread the items array and add item received in handleAddItem
  }

  //to delete item from array
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id)); //if id matches with item id than it will be deleted. If not matches than new array will be created including the item
  }

  //to toggle the item
  function handleToggleItem(id) {
    setItems(
      (items) =>
        items.map((item) =>
          item.id === id ? { ...item, packed: !item.packed } : item
        ) // if id matches than toggle the item
    );
  }

  //to clear list items
  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to delete?");

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
