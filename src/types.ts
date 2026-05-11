export interface Destination {
  id: string;
  name: string;
  image: string;
  duration: string;
  rating: number;
  price: string;
  description: string;
}

export interface Package {
  id: string;
  title: string;
  price: string;
  duration: string;
  rating: number;
  inclusions: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}
