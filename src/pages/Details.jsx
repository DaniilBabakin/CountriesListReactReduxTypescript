import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { useTypedDispatch, useTypedSelector } from '../types';
import { selectCurrentCountry, selectDetails } from '../store/details/details-selectors';
import { useEffect } from 'react';
import { clearDetails, loadCountryByName } from '../store/details/details-actions';


export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const dispatch = useTypedDispatch()
  const {currentCountry,error,status} = useTypedSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name))

    return () => {
      dispatch(clearDetails())
    }
  }, [name,dispatch])
  
  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
