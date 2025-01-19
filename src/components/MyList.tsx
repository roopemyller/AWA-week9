
export type Item = {
    id: string,
    text: string
}

interface ListProps {
    header: string
    items: Item[]
}

function MyList( {header, items}: ListProps ) {
  return (
    <ol>
        <h2>{header}</h2>
        {items.map((item) => (
            <li key={item.id}>{item.text}</li>
        ))}
    </ol>
  )
}

export default MyList;