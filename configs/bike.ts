export enum BikeServiceTypeEnum {
  YOU_BIKE_1 = 1,
  YOU_BIKE_2,
  T_BIKE,
  P_BIKE,
  K_BIKE,
}

export enum BikeServiceStatusEnum {
  CEASE,
  NORMAL,
  SUSPENSION,
}

export const BIKE_SERVICE_TYPE = {
  [BikeServiceTypeEnum.YOU_BIKE_1]: 'YouBike1.0',
  [BikeServiceTypeEnum.YOU_BIKE_2]: 'YouBike2.0',
  [BikeServiceTypeEnum.T_BIKE]: 'T-Bike',
  [BikeServiceTypeEnum.P_BIKE]: 'P-Bike',
  [BikeServiceTypeEnum.K_BIKE]: 'K-Bike',
};

export const BIKE_SERVICE_STATUS = {
  [BikeServiceStatusEnum.CEASE]: '停止營運',
  [BikeServiceStatusEnum.NORMAL]: '正常營運',
  [BikeServiceStatusEnum.SUSPENSION]: '暫停營運',
};
