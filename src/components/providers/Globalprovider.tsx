
import { createContext,useState } from 'react';

interface ContextInterface {
  LikedState: any;
  setLikedState: any;
}

export const GlobalContext  = createContext({} as ContextInterface);

export const  GlobalProvider = (props :any) => {
  const { children } = props;
  const [LikedState, setLikedState] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
    value={{LikedState, setLikedState}}
    >
      {children}
    </GlobalContext.Provider>
  );
};
