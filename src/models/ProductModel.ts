export interface IProduct {
  id: string
  IdEnterprise: string
  ImgUrl: string
  Name: string
  Enabled: boolean
  CreatedAt: string
  CreatedBy: string
  UpdatedAt: string
  UpdatedBy: string
}

export interface IProductGroup {
  id: string
  CoverImgUrl: string
  ImgUrl: string
  name: string
}