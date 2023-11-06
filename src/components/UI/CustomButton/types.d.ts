import { ReactElement } from 'react';

export interface ICustomButtonProps {
    onClick: (value: any) => void;
    children: ReactElement | string;
}