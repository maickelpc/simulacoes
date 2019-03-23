export interface User{

  id:number
  username: string
  first_name: string
  last_name: string
  email: string
  image: string

  access : string
  refresh : string
  tokenExpire: number
}
