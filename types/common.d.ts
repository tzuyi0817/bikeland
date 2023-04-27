export type Page = 'bicycle' | 'parking';

export interface TDXToken {
  access_token: string;
  expires_in: number;
  token_type: 'Bearer';
}
