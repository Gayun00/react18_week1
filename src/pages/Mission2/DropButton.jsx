import React from 'react';
import PropTypes from 'prop-types';
import { countryList } from '../../constants';

function DropButton({ selectedSendingCountry, onSelectSendingCountry }) {
  return (
    <select
      name="country"
      onChange={onSelectSendingCountry}
      defaultValue={selectedSendingCountry}
    >
      {countryList.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
}

DropButton.propTypes = {
  selectedSendingCountry: PropTypes.string.isRequired,
  onSelectSendingCountry: PropTypes.func.isRequired,
};

export default DropButton;
