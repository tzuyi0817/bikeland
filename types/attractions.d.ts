export type Attractions = ScenicSpot & Restaurant;

export interface ScenicSpot {
  ScenicSpotID: string;
  ScenicSpotName: string;
  DescriptionDetail: string;
  Description: string;
  Phone: string;
  Address: string;
  ZipCode: string;
  TravelInfo: string;
  OpenTime: string;
  Picture: {
    PictureUrl1: string;
    PictureDescription1: string;
  },
  Position: {
    PositionLon: number;
    PositionLat: number;
    GeoHash: string;
  },
  ParkingPosition: {},
  City: string;
  SrcUpdateTime: string;
  UpdateTime: string;
}

export interface Restaurant {
  RestaurantID: string;
  RestaurantName: string;
  Description: string;
  Address: string;
  ZipCode: string;
  Phone: string;
  OpenTime: string;
  Picture: {
    PictureUrl1: string;
    PictureDescription1: string;
  },
  Position: {
    PositionLon: number;
    PositionLat: number;
    GeoHash: string;
  },
  Class: string;
  City: string;
  SrcUpdateTime: string;
  UpdateTime: string;
}
