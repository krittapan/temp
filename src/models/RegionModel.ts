export interface IRegion {
  id: string
  ImgUrl: string
  name: string
}


export const regionLinkMapper:Record<string, string> = {
  ['ภาคกลาง'] : 'region/central',
  ['ภาคตะวันตก'] : 'region/west',
  ['ภาคตะวันออก'] : 'region/east',
  ['ภาคตะวันออกเฉียงเหนือ'] : 'region/northeast',
  ['ภาคเหนือ'] : 'region/north',
  ['ภาคใต้'] : 'region/south',
}