import axios from 'axios';
import { REST_API_URL } from 'src/urls/index';
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQueryClient,
} from 'react-query';

type ContentVideo = {
  id: number;
  number: string;
  title: string;
  description: string;
};

const ContentVideos = () => {
  const queryClient = useQueryClient();

  /** POSTの処理 */
  const addContentVideos = async () => {
    const res = await axios.post(`${REST_API_URL}/admin/content_videos`, {
      id: 1,
      number: 'huga',
      title: 'hoga',
      description: 'hoge',
    });
  };

  // Mutations
  const mutation = useMutation(addContentVideos, {
    onSuccess: () => {
      // `content_videos`キーのクエリを無効化して再取得　
      //　つまり新しいコンテンツを足したら、それを足して再表示する。
      queryClient.invalidateQueries('content_videos');
    },
  });

  return (
    <div>
      <div className="container">
        <button className="button" onClick={() => mutation.mutate()}>
          Add Post
        </button>
        {/** query.isLoadingがtureのとき、つまり、ロード中はクラスネームのローダーのやつが表示*/}
        mutation.isLoading?{(
          <div className="loader" />
        )}
      </div>
    </div>
  );
};

const PostContentVideos = () => {
  const queryClient = new QueryClient();
  return (
    // ProviderでQueryClientを設定する
    <QueryClientProvider client={queryClient}>
      <ContentVideos />
    </QueryClientProvider>
  );
};

export default PostContentVideos;