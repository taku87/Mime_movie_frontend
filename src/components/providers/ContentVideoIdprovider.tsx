
import { createContext, useState } from 'react';

interface ContextInterface {
  contentVideoId :any,
  setContentVideoId :any,
}

export const ContentVideoIdContext  = createContext({} as ContextInterface);

export const  ContentVideoIdprovider = (props :any) => {
  const { children } = props;
  const [contentVideoId, setContentVideoId ] = useState(null);

  return (
    <ContentVideoIdContext.Provider value={{contentVideoId, setContentVideoId}}>
      {children}
    </ContentVideoIdContext.Provider>
  );
};

export default ContentVideoIdContext;