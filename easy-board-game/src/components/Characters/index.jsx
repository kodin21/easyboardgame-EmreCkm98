/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Images } from '../../assets/index';

const CharacterPicture = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
`;
const { Knight, Witcher } = Images;
export const charactersArray = [
  {
    name: 'Geralt',
    src: Witcher,
  },
  {
    name: 'Samuray',
    src: Knight,
  },
];
const Character = forwardRef(({ src, style }, ref) => (
  <div style={{ width: '50px', height: '50px', position: 'absolute' }}>
    <CharacterPicture ref={ref} style={style} src={src} alt={src} />
  </div>
));

Character.displayName = 'Character';

export default Character;
