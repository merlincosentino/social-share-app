export interface PostComment {
  id: number;
  author: string;
  authorLogo?: string | null;
  content: string;
  createdAt: string;
}

export interface Post {
  id: number;
  authorLogo?: string | null;
  author: string;
  content: string;
  createdAt: string;
  comments?: PostComment[];
  mediaUrl?: string | null;
  mediaType?: string | null;
}

export interface PostsState {
  list: Post[];
}
