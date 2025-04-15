import { FC } from 'react';
import { MessageHeadline } from './avatars';

export const SystemMessage: FC<any> = ({ owner, message }) => {
    return (
        <div className="system-message">
            <MessageHeadline owner={owner}>{message.content}</MessageHeadline>
        </div>
    );
};
