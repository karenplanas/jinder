interface PerformRequestParameters {
  method?: string;
  path: string;
  body?: unknown;
  token?: string;
}

const baseUrl = process.env.BASE_API_URL || 'http://localhost:4000'

export const performRequest = async <T>({
  method,
  path,
  body,
  token
}: PerformRequestParameters): Promise<T> => {
  const options = {
    method: method,
    headers: {
      'Content-type': 'application/json',
      Authorization: token ? `Bearer ${token}` : ''
    },
    body: body ? JSON.stringify(body) : undefined
  };
  const response = await fetch(`${baseUrl}${path}`, options);
  return response.json() as unknown as T;
};