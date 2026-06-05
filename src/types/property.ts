export type Property = {
  id: string;
  title: string;
  location: string;
  price: number;

  images: string[];

  bedrooms: number;
  bathrooms: number;
  sqft: number;

  featured: boolean;

  description: string;

  amenities: string[];
};