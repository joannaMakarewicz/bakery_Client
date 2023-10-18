import React from "react";

type MyDataContextProps = {
  name: string;
  owner: string;
  tel: string;
  email: string;
  fb: string;
  instagram: string;
  address: string;
  city: string;
  google: string;
};

const MyDataContext = React.createContext({
  myData: {} as MyDataContextProps,
});

export default MyDataContext;
