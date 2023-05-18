import {
  BikeServiceTypeEnum,
  BikeServiceStatusEnum,
} from '@/configs/bike';

export interface BikeInfo extends BikeStation, Partial<AvailableBike> {
  distance: number;
}

export interface BikeStation {
  StationUID: string;
  StationID: string;
  AuthorityID: string;
  StationName: {
    Zh_tw: string;
    En: string;
  };
  StationPosition: {
    PositionLon: number;
    PositionLat: number;
    GeoHash: string;
  };
  StationAddress: {
    Zh_tw: string;
    En: string;
  };
  BikesCapacity: number;
  ServiceType: BikeServiceTypeEnum;
  SrcUpdateTime: string;
  UpdateTime: string;
}

export interface AvailableBike {
  AvailableRentBikes: number;
  AvailableRentBikesDetail: {
    GeneralBikes: number;
    ElectricBikes: number;
  };
  AvailableReturnBikes: number;
  ServiceStatus: BikeServiceStatusEnum;
  ServiceType: BikeServiceTypeEnum;
  SrcUpdateTime: string;
  StationID: string;
  StationUID: string;
  UpdateTime: string;
}
