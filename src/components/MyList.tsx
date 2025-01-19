
export type Item = {
    id: string,
    text: string,
    clicked: boolean
}

interface ListProps {
    header: string
    items: Item[]
    updateList: (id: string) => void
}

function MyList( {header, items, updateList}: ListProps ) {
  return (
    <ol>
        <h2>{header}</h2>
        {items.map((item) => (
            <li 
                key={item.id}
                onClick={() => updateList(item.id)}
                style={{textDecoration: item.clicked ? 'line-through' : ''}}
            >
                {item.text}
            </li>
        ))}
    </ol>
  )
}

export default MyList;