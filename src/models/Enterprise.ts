import { GeoPoint } from "@firebase/firestore"

export interface IEnterprise {
  id: string
  Contact: {
    Facebook: string
    IG: string
    Line: string
    Tel: string
    Web: string
  }
  address: {
    District: string
    Moo: string
    Number: string
    PostalCode: string
    Province: string
  }
  Description: string
  Location: GeoPoint
  RegistrationCode: string
  name: string
  year: number
  Enabled: boolean
  CreatedAt: string
  CreatedBy: string
  UpdatedAt: string
  UpdatedBy: string
}




export interface IEnterpriseModel {
  id: string
  youtubeUrl: string
}