/* eslint-disable @typescript-eslint/no-useless-constructor */
import { APIClient } from "src/lib/utils/api.client"
import { ICheckUsernameExistsRes, ISubmitUserDataRes, IUser, IUserCreds } from "./interfaces/user-auth-api.interfaces"

class UserAuthAPI extends APIClient {
  constructor(baseUrl: string){
    super(baseUrl)
  }

  // private handleErrors(err: any){
  //   console.error("[USER-AUTH-API] \n", err)
    
  //   throw new Error(err)
  // }

  public async checkUsernameExistis(name: string){
    return this.get<ICheckUsernameExistsRes>('/user-authorization/check-username', { name })
      .then((res) => res.data)
  }

  public async submitUserCreds(payload: IUserCreds){
    return this.post<ISubmitUserDataRes>('/user-authorization/sign-in', payload)
      .then((res) => res.data)
  }

  public async submitNewUser(payload: Pick<IUser, "first_name" | "last_name" | "username" | "password">){
    return this.post<ISubmitUserDataRes>('/user-authorization/sign-up', payload)
      .then((res) => res.data)
  }
}

let _client: UserAuthAPI = null

export function getUserAuthAPIClient(){
  if(!_client){
    _client = new UserAuthAPI(process.env.REACT_APP_API_URL)
  }

  return _client
}