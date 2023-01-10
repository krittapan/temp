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
}


export interface IArticleType {
  id: string
  Name: string
  Enabled: boolean
  CreatedAt: string
  CreatedBy: string
  UpdatedAt: string
  UpdatedBy: string
}