import React, { useState } from 'react';
import MyList, { Item } from './MyList';

const MyContainer: React.FC = () => {
    const [items, setItems] = useState<Item[]>([
        {id: "1", text: "Semmonen"},
        {id: "2", text: "Tämmönen"},
        {id: "3", text: "Tuommonen"},
    ]);

    const [newItemText, setNewItemText] = useState<string>("");

    const addItem = () => {
        if (newItemText.trim() !== "") {
            const newItem: Item = {
                id: (items.length + 1).toString(),
                text: newItemText,
            };
            setItems([...items, newItem]);
            setNewItemText("");
        }
    };

    return (

    <div className="my-container">
        <textarea 
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
            placeholder='Enter new item text'
        />
        <button onClick={addItem}>Add item</button>
        <MyList header="My List" items={items}/>
    </div>
    );
};

export default MyContainer;