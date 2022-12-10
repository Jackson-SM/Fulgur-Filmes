import React from 'react';

import { StyledOptionSelect, StyledSelectUpload } from './styles';

type PropsOptionSelect = React.ComponentProps<typeof StyledOptionSelect>;

function OptionSelect({ children, ...props }: PropsOptionSelect) {
  return <StyledOptionSelect {...props}>{children}</StyledOptionSelect>;
}

interface IOptions {
  value: string | number;
  label: string;
}

type PropsSelectUpload = React.ComponentProps<typeof StyledSelectUpload> & {
  options: IOptions[];
};

export function SelectUpload({ options, ...props }: PropsSelectUpload) {
  return (
    <StyledSelectUpload {...props}>
      {options.map((option) => {
        return (
          <OptionSelect key={option.value} value={option.value}>
            {option.label}
          </OptionSelect>
        );
      })}
    </StyledSelectUpload>
  );
}
