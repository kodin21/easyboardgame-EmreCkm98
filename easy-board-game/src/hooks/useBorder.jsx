import React, { useEffect, useRef } from 'react';

export const useBorder = (ref, boardSize) => {
  const maxHeight = useRef(null);
  const maxWidth = useRef(null);
  const borderSize = boardSize ? 10 : 0;

  // sahnenin sınırlarını hesaplama
  useEffect(() => {
    const imgScene = ref.current.getBoundingClientRect();
    const imageWidth = imgScene.width;
    const imageHeight = imgScene.height;

    const boardScene = boardSize
      ? boardSize.current.getBoundingClientRect()
      : window.screen;
    const boardWidth = boardScene.width;
    const boardHeight = boardScene.height;

    maxHeight.current = boardHeight - imageHeight - borderSize;
    maxWidth.current = boardWidth - imageWidth - borderSize;
  }, [ref, boardSize]);

  return { maxHeight, maxWidth };
};
