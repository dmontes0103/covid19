export interface Covid19Stats {
  city: string;
  province: string;
  country: string;
  lastUpdate: string;
  keyId: string;
  confirmed: number;
  deaths: number;
  recovered: number;
}

export interface Data {
  lastChecked: Date;
  covid19Stats: Covid19Stats[];
}

export interface RootObject {
  error: boolean;
  statusCode: number;
  message: string;
  data: Data;
}
