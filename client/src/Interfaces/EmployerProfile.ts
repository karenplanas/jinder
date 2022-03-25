export interface EmployerProfile {
  userId: string;
  name: string;
  domain: string;
  description: string;
  address: {
    city: string;
    state: string;
    country: string;
  };
  size: {
    min: number;
    max: number;
  };
  imageUrl: string;
}
