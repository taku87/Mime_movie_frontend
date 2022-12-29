import { memo } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import { GuestGetContentVideos } from "src/components/features/api/rails/GuestGetContentVideos";
import { LoginUserGetContentVideos } from "src/components/features/api/rails/LoginUserGetContentVideos";

const ContentVideos = memo(() => {
  const { isAuthenticated } = useAuth0();

  return(
    <div className="container">
    { isAuthenticated ? (
      <LoginUserGetContentVideos />
      ) : (
      <GuestGetContentVideos />
      )
    }
    </div>
  )
})

const ContentVideosList = memo(() => {
  const queryClient = new QueryClient();
  return (
    // ProviderでQueryClientを設定する
    <QueryClientProvider client={queryClient}>
      <ContentVideos />
    </QueryClientProvider>
  );
});

export default ContentVideosList;
