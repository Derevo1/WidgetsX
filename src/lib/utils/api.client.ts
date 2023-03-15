import axios, { AxiosInstance } from 'axios'

export class APIClient {
  private instance: AxiosInstance = null

  constructor(private baseUrl: string, private token?: string){
    this.instance = axios.create({
      baseURL: this.baseUrl,
      headers: this.token 
        ? { Authorization: `Bearer ${this.token}` } 
        : {}
    })
  }

  protected get<T>(url: string, params?: any){
    return this.instance.get<T>(url, { params })
  }
  
  protected post<T>(url: string, body?: any){
    return this.instance.post<T>(url, body)
  }

  protected put<T>(url: string, body?: any){
    return this.instance.put<T>(url, body)
  }

  protected delete<T>(url: string){
    return this.instance.delete<T>(url)
  }
}