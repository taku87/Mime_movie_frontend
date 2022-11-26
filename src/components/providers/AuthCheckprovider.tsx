
import { createContext,useState } from 'react';

interface ContextInterface {
  accessToken: string;
  setAccessToken: React.Dispatch< React.SetStateAction<string>>;
}

type Props = {
  children: JSX.Element
};


export const Auth0Context  = createContext({} as ContextInterface);

export const AuthCheckProvider = ({children} :Props) => {
  const [accessToken, setAccessToken] = useState<string>('');

  return (
    <Auth0Context.Provider
    value={{accessToken, setAccessToken}}
    >
      {children}
    </Auth0Context.Provider>
  );
};
