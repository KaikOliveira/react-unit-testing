import { useState } from "react";

interface ListProps {
  initialItems: string[];
}

export const List = ({ initialItems }: ListProps) => {
  const [newItem, setNewItem] = useState("");
  const [arrList, setArrList] = useState(initialItems);

  function handleAddToList() {
    setTimeout(() => {
      setArrList((prevState) => [...prevState, newItem]);
    }, 500);
  }

  function handleRemoveFromList(item: string) {
    setTimeout(() => {
      setArrList((prevState) => prevState.filter((filter) => filter !== item));
    }, 500);
  }

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Novo item"
      />

      <button type="button" onClick={() => handleAddToList()}>
        Adicionar
      </button>

      <ul>
        {arrList.map((item) => (
          <li key={item}>
            {item}
            <button type="button" onClick={() => handleRemoveFromList(item)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
