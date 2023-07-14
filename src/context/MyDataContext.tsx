import React from 'react';


type MyDataContextProps = {
    name:string;
    tel: number;
    email: string;
    fb: string;
    instagram: string;
    address: string;

  }

const MyDataContext = React.createContext({
    myData: {} as MyDataContextProps
})

export default MyDataContext;
