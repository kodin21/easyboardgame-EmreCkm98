/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import styled from 'styled-components';

const CharacterPicture = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
`;
const Character = forwardRef((props, ref) => (
  <div style={{ width: '50px', height: '50px', position: 'absolute' }}>
    <CharacterPicture
      ref={ref}
      style={props.style}
      src={props.src}
      alt={props.src}
    />
  </div>
));

Character.displayName = 'Character';

export default Character;
