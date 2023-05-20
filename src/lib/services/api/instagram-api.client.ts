/* eslint-disable @typescript-eslint/no-useless-constructor */
import { APIClient } from "src/lib/utils/api.client";
import { IGenerateAccessTokenResponse } from "./interfaces/instagram-api.interface";

class InstagramAPI extends APIClient {  
  constructor(baseURL: string, token: string){
    super(baseURL, token)
  }

  public async getAuthorizeLink(): Promise<string>{
    return this.get<{link: string}>('/integrations/instagram/authorization-link')
      .then((d) => d.data.link)
  }

  public async generateAccessToken(code: string) {
    return this.get<IGenerateAccessTokenResponse>('/integrations/instagram/exchange-code', { code })
      .then((d) => d.data)
      .catch((e) => {
        throw new Error(e)
      })
  }
}

let _client: InstagramAPI = null

export function getInstagramAPIClient(token: string){
  if(!_client){
    _client = new InstagramAPI(
      process.env.REACT_APP_API_URL,
      token
    )
  }

  return _client
}