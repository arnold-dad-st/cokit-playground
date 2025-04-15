import { FC } from 'react';
import { MessageHeadline } from './avatars';

export const TextMessage: FC<any> = ({ owner, message }) => {
    return (
        <div className={`${message.type}`}>
            {message.status.code === 'Pending' && (
                <div className="loading-indicator">Loading...</div>
            )}
            {message.content && <MessageHeadline owner={owner}>{message.content}</MessageHeadline>}
        </div>
    );
};
