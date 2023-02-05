export interface IColorType {
  id: string
  ColorCode: string
  ImgUrl: string
  Name: string
  Enabled: boolean
  CreatedAt: string
  CreatedBy: string
  UpdatedAt: string
  UpdatedBy: string
}

export interface IProductsGroup {
  id: string
  ColorType: string
  CoverImgUrl: string
  ImgUrl: string
  name: string
}