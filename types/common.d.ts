export type Page = 'default' | 'bicycle' | 'parking' | 'umbrella-beach' | 'utensils';
export type MenuOptions = [MenuOption, MenuOption];

interface MenuOption {
  value: Page;
  name: string;
}

export interface TDXToken {
  access_token: string;
  expires_in: number;
  token_type: 'Bearer';
}

export interface Coordinate {
  lat: number;
  lng: number;
}
