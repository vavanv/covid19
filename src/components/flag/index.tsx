import * as React from 'react';

interface Props {
  flag: string;
}

const FlagComponent = (props: Props) => {
  const { flag } = props;
  return (
    <img
      alt=""
      src={flag}
      style={{
        height: '20px',
        width: '28px',
        borderBlockColor: 'black',
        borderStyle: 'solid',
        borderWidth: 'thin',
      }}
    />
  );
};

export const Flag = React.memo(FlagComponent);
