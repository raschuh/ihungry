import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const countryCodes = {
  'American': 'US',
  'British': 'GB',
  'Canadian': 'CA',
  'Chinese': 'CN',
  'Croatian': 'HR',
  'Dutch': 'NL',
  'Egyptian': 'EG',
  'Filipino': 'PH',
  'French': 'FR',
  'Greek': 'GR',
  'Indian': 'IN',
  'Irish': 'IE',
  'Italian': 'IT',
  'Jamaican': 'JM',
  'Japanese': 'JP',
  'Kenyan': 'KE',
  'Malaysian': 'MY',
  'Mexican': 'MX',
  'Moroccan': 'MA',
  'Polish': 'PL',
  'Portuguese': 'PT',
  'Russian': 'RU',
  'Spanish': 'ES',
  'Thai': 'TH',
  'Tunisian': 'TN',
  'Turkish': 'TR',
  'Vietnamese': 'VN'
};

const UNKNOWN_CODE = 'XX'

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const data = response.data['meals'];

      setCountries(
        data.map(country => {
          return {
            areaName: country['strArea'],
            areaCode: countryCodes[country['strArea']] ?? UNKNOWN_CODE,
          };
        })
      );
    }

    getCountries();
  }, [countries]);

  return (
    <div className='grid grid-cols-2'>
    {
      countries.map(country => {
        return (
          <Link 
            to={`/area/${country.areaName}`}
            className='w-16 self-center flex flex-row items-center'
          >
            <img 
              src={
                country.areaCode !== UNKNOWN_CODE ? 
                `https://flagsapi.com/${country.areaCode}/flat/64.png` :
                '../../asset/unknown_flag.svg'
              }
              className='p-0 m-0 mr-4'
            />
            <h3 className='m-0'>{ country.areaName }</h3>
          </Link>
        )
      })
    }
    </div>
  );
}

export default Countries;