export const SET_LOADING = '@@details/SET_LOADING'
export const SET_ERROR = '@@details/SET_ERROR'
export const SET_COUNTRY = '@@details/SET_COUNTRY'
export const CLEAR_DETAILS = '@@details/CLEAR_DETAILS'
export const SET_NEIGHBORS = '@@details/SET_NEIGHBORS'

const setLoading = () => ({
  type:SET_LOADING
})

const setError = (err:any) => ({
  type:SET_ERROR,
  payload:err
})
const setCountry = (country:any) => ({
  type:SET_COUNTRY,
  payload:country
})
const setNeighbors = (countries:any) => ({
  type:SET_NEIGHBORS,
  payload:countries
})
export const clearDetails = () => ({
  type:CLEAR_DETAILS
})

export const loadCountryByName = (name:string) => (dispatch:any,_:any,{client,api}:any)=>{
  dispatch(setLoading());

  client.get(api.searchByCountry(name))
    .then((res:any)=> dispatch(setCountry(res.data[0])))
    .catch((err:any)=> dispatch(setError(err.message)))
}

export const loadNeighborsByBorder = (borders:any[]) => (dispatch:any,_:any,{client,api}:any)=>{
  dispatch(setLoading());

  client.get(api.filterByCode(borders))
    .then((res:any)=> dispatch(setNeighbors(res.data.map((item:any)=> item.name))) )
    .catch(console.error)
}