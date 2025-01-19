import React, { ReactNode } from 'react';



interface MyContainerProps {

  children: ReactNode;

}



const MyContainer: React.FC<MyContainerProps> = ({ children }) => {

  return (

    <div className="my-container">

      {children}

    </div>

  );

};



export default MyContainer;