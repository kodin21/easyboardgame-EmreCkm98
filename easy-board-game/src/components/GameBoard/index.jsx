import React, { useRef, useState } from 'react';
import { useArrowKeys } from '../../hooks/useArrowKeys';
import { useDropdown } from '../../hooks/useDropDown';
import Character, { charactersArray } from '../Characters';
import { Images } from '../../assets/index';
import { useBorder } from '../../hooks/useBorder';

const Board = () => {
  const [characters] = useState(charactersArray);
  const boardRef = useRef(null);
  const characterRef = useRef(null);

  const [chars, CharsDropdown] = useDropdown('Karakter seçiniz ', characters);
  const { maxHeight, maxWidth } = useBorder(characterRef, boardRef);
  const movement = useArrowKeys(maxHeight, maxWidth);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '50px',
        }}
      >
        <CharsDropdown />
        <div
          style={{
            width: '500px',
            height: '500px',
            border: '5px;solid;black',
            margin: '50px',
            backgroundImage: `url(${Images.GameMap})`,
            backgroundSize: '500px 500px',
          }}
          ref={boardRef}
        >
          <Character style={movement} ref={characterRef} src={chars} />
        </div>
      </div>
    </div>
  );
};

export default Board;
