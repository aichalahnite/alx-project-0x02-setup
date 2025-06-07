export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  text: string;
}

export interface PostProps {
  userId: number;
  title: string;
  body: string;
}

export interface UserProps {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}