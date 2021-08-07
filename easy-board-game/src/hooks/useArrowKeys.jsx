import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const KeyboardSettings = {
  //tuş değerleri
  SPACE_KEY: 32,
  ARROW_UP_KEY: 38,
  ARROW_DOWN_KEY: 40,
  ARROW_LEFT_KEY: 37,
  ARROW_RIGHT_KEY: 39,
};

export const useArrowKeys = (maxHeight, maxWidth) => {
  const [char, setChar] = useLocalStorage('location', { top: 370, left: 380 });
  //localstoragea adımları kaydetme işlemi----karakter başlangıç pozisyonu
  const [speed, setSpeed] = useState(false);
  let speedStatus;
  // ok tuşlarıyla hareket işlemleri
  const handleArrowKeydown = (e) => {
    speedStatus = speed ? 20 : 10;
    if (char.top > 0) {
      if (parseInt(e.keyCode) === KeyboardSettings.ARROW_UP_KEY) {
        //üst ok tuşu basılınca hareket etme
        setChar(() => {
          return {
            left: char.left,
            top: char.top > speedStatus ? char.top - speedStatus : 0,
          };
        });
      }
    }

    if (char.top < maxHeight.current) {
      if (parseInt(e.keyCode) === KeyboardSettings.ARROW_DOWN_KEY) {
        //alt ok tuşu basılınca hareket etme
        setChar(() => {
          return {
            left: char.left,
            top:
              maxHeight.current - char.top > speedStatus
                ? char.top + speedStatus
                : 450,
          };
        });
      }
    }

    if (char.left > 0) {
      if (parseInt(e.keyCode) === KeyboardSettings.ARROW_LEFT_KEY) {
        //sol ok tuşu basılınca hareket etme
        setChar(() => {
          return {
            top: char.top,
            left: char.left > speedStatus ? char.left - speedStatus : 0,
          };
        });
      }
    }

    if (char.left < maxWidth.current) {
      if (parseInt(e.keyCode) === KeyboardSettings.ARROW_RIGHT_KEY) {
        //sağ ok tuşu basılınca hareket etme
        setChar(() => ({
          top: char.top,
          left:
            maxWidth.current - char.left > speedStatus
              ? char.left + speedStatus
              : 450,
        }));
      }
    }
  };

  // hızlanma işlemi
  const handleSpaceKeydown = (e) => {
    if (parseInt(e.keyCode) === KeyboardSettings.SPACE_KEY) {
      //space tuşu basılınca hızı arttırma işlemi
      setSpeed(!speed);
    }
  };

  // tuşlara basılma işlemi
  useEffect(() => {
    document.addEventListener('keydown', handleArrowKeydown);
    document.addEventListener('keydown', handleSpaceKeydown);
    return () => {
      document.removeEventListener('keydown', handleArrowKeydown);
    };
  }, [char, speed]);

  return char;
};
