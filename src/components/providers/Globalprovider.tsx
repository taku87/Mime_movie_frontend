
import { createContext,useState } from 'react';

interface ContextInterface {
  LikedState: boolean;
  setLikedState: React.Dispatch< React.SetStateAction<boolean>>;
}

type Props = {
  children: JSX.Element
};

export const GlobalContext  = createContext({} as ContextInterface);

export const  GlobalProvider = (props :Props ) => {
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
