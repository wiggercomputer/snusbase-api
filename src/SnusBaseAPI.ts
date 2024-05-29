import axios, { AxiosInstance } from 'axios';

interface SearchParams {
  terms: string[];
  types: string[];
  wildcard?: boolean;
}

interface IPWhoisParams {
  terms: string[];
}

interface HashLookupParams {
  terms: string[];
  types: string[];
  wildcard?: boolean;
}

class SnusbaseAPI {
  private api: AxiosInstance;
  private auth: string;

  constructor(auth: string) {
    this.auth = auth;
    this.api = axios.create({
      baseURL: 'https://api-experimental.snusbase.com',
      headers: {
        'Auth': this.auth,
        'Content-Type': 'application/json',
      },
    });
  }

  async search(params: SearchParams) {
    const response = await this.api.post('/data/search', params);
    return response.data;
  }

  async getStats() {
    const response = await this.api.get('/data/stats');
    return response.data;
  }

  async ipWhois(params: IPWhoisParams) {
    const response = await this.api.post('/tools/ip-whois', params);
    return response.data;
  }

  async hashLookup(params: HashLookupParams) {
    const response = await this.api.post('/tools/hash-lookup', params);
    return response.data;
  }
}

export default SnusbaseAPI;

