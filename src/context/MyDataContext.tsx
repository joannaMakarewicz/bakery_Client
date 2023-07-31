import React from "react";

type MyDataContextProps = {
  name: string;
  owner: string;
  tel: number;
  email: string;
  fb: string;
  instagram: string;
  address: string;
  city: string;
};

const MyDataContext = React.createContext({
  myData: {} as MyDataContextProps,
});

export default MyDataContext;
