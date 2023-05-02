export type Page = 'bicycle' | 'parking';
export type MenuOptions = Array<{
  value: Page;
  name: string;
}>;

export interface TDXToken {
  access_token: string;
  expires_in: number;
  token_type: 'Bearer';
}
