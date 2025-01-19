import React from 'react';

export type Item = {
    id: string,
    text: string
};

interface ListProps {
    header: string;
    items: Item[];
}

const MyList: React.FC<ListProps> = ( {header, items} ) => {
  return (
    <ol>
        <h2>{header}</h2>
        {items.map((item) => (
            <li key={item.id}>{item.text}</li>
        ))}
    </ol>
  );
};

export default MyList;