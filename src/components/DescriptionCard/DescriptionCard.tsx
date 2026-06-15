import { ReactNode } from 'react';
import classes from './DescriptionCard.module.css'

interface CardProps {
    children?: ReactNode;
}

export const DescriptionCard= ({ children }: CardProps) => {
    return (
        <div className={classes.card}>
            <p className={classes.description}>{children}</p>
        </div>
    );
};