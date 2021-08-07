import React, { createRef, useState, useEffect } from 'react';
import { useArrowKeys } from '../../hooks/useArrowKeys';
import { useDropdown } from '../../hooks/useDropDown';
import Character from '../Characters';
import { Images } from '../../assets/index';

const Board = () => {
  const [characters] = useState([
    { name: 'Geralt', src: Images.Witcher },
    { name: 'Samuray', src: Images.Knight },
  ]);
  const boardRef = createRef(null);
  const characterRef = createRef(null);

  const [chars, CharsDropdown] = useDropdown(characters);

  const maxHeight = createRef(null);
  const maxWidth = createRef(null);
  const borderSize = boardRef ? 10 : 0;
  useEffect(() => {
    const imgScene = characterRef.current.getBoundingClientRect();
    const imageWidth = imgScene.width;
    const imageHeight = imgScene.height;

    const boardScene = boardRef
      ? boardRef.current.getBoundingClientRect()
      : window.screen;
    const boardWidth = boardScene.width;
    const boardHeight = boardScene.height;

    maxHeight.current = boardHeight - imageHeight - borderSize;
    maxWidth.current = boardWidth - imageWidth - borderSize;
    console.log(maxWidth, maxHeight);
  });
  const movement = useArrowKeys(maxHeight, maxWidth);
  return (
    <div>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16"
          role="img"
          aria-label="Warning:"
        >
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <strong>İpucu! </strong>boşluk(space) tuşuna basarak hareket hızını 2
        kat arttırabilirsin.tekrar boşluk tuşuna basarsan eski hızına dönersin
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '50px',
        }}
      >
        <img src={Images.Treasure} alt="treasure" />
        <CharsDropdown />
        <div>
          <div
            style={{
              width: '500px',
              height: '500px',
              border: '5px;solid;black',
              margin: '10px',
              backgroundImage: `url(${Images.GameMap})`,
              backgroundSize: '500px 500px',
            }}
            ref={boardRef}
          >
            <Character style={movement} ref={characterRef} src={chars} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
