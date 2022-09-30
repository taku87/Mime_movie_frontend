
import { createContext,useState } from 'react';

interface ContextInterface {
  accessToken: any;
  setAccessToken: any;
}

export const Auth0Context  = createContext({} as ContextInterface);

export const AuthCheckProvider = ({children} :any) => {
  const [accessToken, setAccessToken] = useState<string>('');

  return (
    <Auth0Context.Provider
    value={{accessToken, setAccessToken}}
    >
      {children}
    </Auth0Context.Provider>
  );
};
