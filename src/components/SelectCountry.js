import React from 'react';
import { getData } from 'country-list';
import Select from 'react-select';
import ReactCountryFlag from 'react-country-flag';

const SelectCountry = ({ setSelected }) => {
  let options = getData();
  options.forEach(
    (country) =>
      (country.label = (
        <>
          <ReactCountryFlag
            countryCode={country.code}
            svg
            style={{
              width: '2em',
              height: '3em'
            }}
            title={country.name}
          />{' '}
          {country.name}
        </>
      ))
  );
  return (
    <Select
      defaultValue={{
        label: <>Select country</>
      }}
      options={options}
      onChange={(value) => setSelected(value)}
    />
  );
};
export default SelectCountry;
