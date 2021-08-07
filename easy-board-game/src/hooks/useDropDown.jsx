import React from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDropdown = (characters) => {
  const [localChar, setLocalChar] = useLocalStorage(
    //localstorageye kaydetme
    'character',
    characters[0].src || ''
  );

  const Dropdown = (props) => {
    //dropdowndan karakter seçimi
    return (
      <div>
        <label
          style={{ fontSize: '2rem', color: '#FFFAF0' }}
          htmlFor="character"
        >
          {'Karakter seçiniz : '}
          <select
            style={{
              cursor: 'pointer',
              fontSize: '1.3rem',
              height: '30px',
              width: '200px',
              background: 'lightblue',
              color: '#382D1A',
              appearance: 'meter',
              padding: 'auto 15px',
              textAlignLast: 'center',
              ...props.styles,
            }}
            name="character"
            id="character"
            value={localChar}
            onChange={(e) => setLocalChar(e.target.value)}
            onBlur={(e) => setLocalChar(e.target.value)}
          >
            {characters.map((item) => {
              return (
                <option key={item.name} value={item.src}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </label>
      </div>
    );
  };

  return [localChar, Dropdown, setLocalChar];
};
