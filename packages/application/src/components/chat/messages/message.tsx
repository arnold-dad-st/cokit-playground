import { FC } from 'react';
import { InteractiveMessage } from './interactive-message';
import { TextMessage } from './text-message';
import { SystemMessage } from './system-message';
import { ChatMessageSkeleton } from './skeleton-message';
import { UserMessage } from './user-message';
import { Action, ChatMessage, MessageType } from '../../../stores/chat.store';

import * as styles from './message.module.less';

interface MessageProps {
    message: any; // ChatMessage;
    onAction: (messageId: string, action: Action) => void;
}

export const Message: FC<MessageProps> = ({ message }) => {
    let wrapperClass = styles.messageWrapper; // Base class
    if (message.role === 'user') {
        wrapperClass = `${wrapperClass} ${styles.userWrapper}`; // Add user-specific styling
    }

    switch (message.role) {
        case 'user':
            return (
                <div className={wrapperClass}>
                    <UserMessage message={message} />
                </div>
            );
        case 'assistant':
            return (
                <div>
                    <TextMessage message={message} owner={message.role} />
                </div>
            );
        case MessageType.SYSTEM:
            return <SystemMessage message={message} owner={message.role} />;
        case MessageType.LOADING:
            return <ChatMessageSkeleton />;
        default:
            return <div>Unknown message type.</div>;
    }
};
