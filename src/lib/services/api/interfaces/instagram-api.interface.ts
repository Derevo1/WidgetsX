export interface IGenerateAccessTokenResponse {
  id: number
  user_id: number
  external_user_id: string
  type: string
  access_token: string
  refresh_token: string
  token_renewed_at: string
  created_at: string
  updated_at: string
}