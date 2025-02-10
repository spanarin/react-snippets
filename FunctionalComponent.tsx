import React from 'react';

interface Props {
  prop1?: string;
  prop2?: number;
}

export const Component: React.FC<Props> = (props) => {
  return (
    <>
      <p>Component</p>
    </>
  );
};