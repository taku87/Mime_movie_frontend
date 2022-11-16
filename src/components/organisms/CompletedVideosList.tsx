import { memo } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import { GuestGetCompletedVideos } from "src/hooks/GuestGetCompletedVideos";
import { LoginUserGetCompletedVideos } from "src/hooks/LoginUserGetCompletedVideos";

const CompletedVideos = memo(() => {
  const { isAuthenticated } = useAuth0();

  return(
    <>
    { isAuthenticated ? (
      <LoginUserGetCompletedVideos />
      ) : (
      <GuestGetCompletedVideos />
      )
    }
    </>
  )
})

export const CompletedVideosList = memo(() => {
  const queryClient = new QueryClient();
  return (
    // ProviderでQueryClientを設定する
    <QueryClientProvider client={queryClient}>
      <CompletedVideos />
    </QueryClientProvider>
  );
});

export default CompletedVideosList;