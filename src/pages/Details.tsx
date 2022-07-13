import { IoArrowBack } from 'react-icons/io5'
import { useNavigate, useParams } from 'react-router-dom'
import { CountryDetails } from 'store/details/CountryDetails'

import { Button } from '../components/Button'

export const Details = () => {
  const { name }: any = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      <CountryDetails name={name} navigate={navigate} />
    </div>
  )
}
