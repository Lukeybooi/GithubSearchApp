import React, { FC, ReactNode } from 'react';
import { Alert, AlertTitle, Color } from '@material-ui/lab';

interface IProps {
  readonly severity: Color;
  readonly title: string;
  readonly message: string | ReactNode;
}
const AlertComponent: FC<IProps> = ({ severity, title, message }) => {
  return (
    <Alert severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
};

export default AlertComponent;
