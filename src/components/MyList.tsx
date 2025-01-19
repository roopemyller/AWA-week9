import React from 'react';

type Item = {
    id: string,
    text: string
};



interface ListProps {

  list:{
    header: string;
    items: Item[];
  };

}

const MyList: React.FC<ListProps> = ( {list} ) => {
  return (
    <ol>
        <h2>{list.header}</h2>
        {list.items.map((item) => (
            <li key={item.id}>{item.text}</li>
        ))}
    </ol>
  );
};

export default MyList;