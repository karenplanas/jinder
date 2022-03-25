export interface Employer {
  userId: string
  name: string
  address: {
    city: string
    state: string
    country: string
  },
  size: {
    min: number,
    max: number,
  };
  imageUrl: string;
}
