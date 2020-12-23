import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import MultiSelect from "@kenshooui/react-multi-select";

function App() {
  const [items, setItems] = useState([
    { id: 0, label: "item 1" },
    { id: 2, label: "item 2", disabled: true },
    { id: 3, label: "item 3", disabled: false },
    { id: 4, label: "item 4" },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (selectedItems) => setSelectedItems(selectedItems);

  return (
    <>
      <MultiSelect
        items={items}
        selectedItems={selectedItems}
        onChange={handleChange}
      />
    </>
  );
}

export default App;
