import { useState } from 'react'
import MyList, { Item } from './MyList'

function MyContainer() {
    const [items, setItems] = useState<Item[]>([
        {id: "1", text: "Semmonen", clicked: false},
    ])

    const [newItemText, setNewItemText] = useState<string>("")

    function addItem() {
        if (newItemText.trim() !== "") {
            const newItem: Item = {
                id: (items.length + 1).toString(),
                text: newItemText,
                clicked: false
            }
            setItems([...items, newItem])
            setNewItemText("")
        }
    }

    function updateList(id: string) {
        setItems(items.map(item =>
            item.id === id ? { ...item, clicked: !item.clicked } : item
        ))
    }

    return (
        <div className="my-container">
            <textarea 
                value={newItemText}
                onChange={(e) => setNewItemText(e.target.value)}
                placeholder='Enter new item text'
            />
            <button onClick={addItem}>Add item</button>
            <MyList header="My List" items={items} updateList={updateList}/>
        </div>
    )
}

export default MyContainer;