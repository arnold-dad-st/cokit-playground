import { FC } from 'react';
import { BodyText } from '@servicetitan/design-system';
import { UserBox } from './skeleton-message';

interface UserMessageProps {
    message: any;
}

export const UserMessage: FC<UserMessageProps> = ({ message }) => {
    return (
        <BodyText size="small" className="user m-t-2">
            <UserBox>{message.content}</UserBox>
        </BodyText>
    );
};
