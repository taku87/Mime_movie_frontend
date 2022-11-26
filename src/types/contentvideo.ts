export type ContentVideos = {
  data?: any;
};

export type ContentVideo = {
  attributes: {
    id: number;
    number: string;
    title: string;
    description: string;
    thumbnail: string;
    youtube_url: string;
    state: string;
    liked: boolean;
    like_amount: number;
    comments?: Array<Comment>;
  };
  id: number;
  number: string;
  title: string;
  description: string;
  thumbnail: string;
  youtube_url: string;
  state: string;
  liked: boolean;
  like_amount: number;
  comments?: Array<Comment>;
};

export type Comments = {
  comments?: Array<Comment>;
};

export type Comment = {
  id: number;
  body: string;
  created_at: Date;
};
