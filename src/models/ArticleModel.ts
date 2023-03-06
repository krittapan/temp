export interface IArticle {
  id: string
  ArticleType: string
  CreatedAt: string
  CreatedBy: string
  Enabled: boolean
  ImgUrl: string
  Name: string
  UpdatedAt: string
  UpdatedBy: string
  LinkUrl:string
}


export interface IArticleType {
  id: string
  Name: string
  Enabled: boolean
  ImgUrl: string
  CoverImgUrl: string
  CreatedAt: string
  CreatedBy: string
  UpdatedAt: string
  UpdatedBy: string
  link:string
}
