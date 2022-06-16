export interface Team{
  id?: string
  name: string;
  website?: string;
  city?: string;
}

export interface UserData{
  id: string;
  login?: string;
  name?: string;
  city?: string;
  tools?: string[];
  age?: number;
  about?: string;
  specialization?: string[];
}

export interface PostId{
  id?: string;
  userId?: string;
  text?: string;
  data?: any;
}

export interface CommentId{
  id?: string;
  postId?: string;
  userId?: string;
  text?: string;
  data?: any;
}
