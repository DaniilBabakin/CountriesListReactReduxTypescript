export interface ICountry {
  name: string
  capital: string
  region: string
  population: number
  flags: {
    svg: string
    png: string
  }
  independent: boolean
}
