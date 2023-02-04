import React, { createContext, PropsWithChildren } from "react";

interface data {
  name: string;
  email: string;
  _id: string;
}

interface userData {
  data: data;
  setData: React.Dispatch<React.SetStateAction<data>>;
}

export const accessContest = createContext<userData | null>(null);

export const GlobalContext: React.FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = React.useState({} as data);

  // React.useEffect(() => {
  //   if (window.localStorage.getItem("userData")) {
  //     const data = JSON.parse(window.localStorage.getItem("userData") || "");
  //     setData(data);
  //   }
  //   return;
  // }, []);

  return (
    <accessContest.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </accessContest.Provider>
  );
};
