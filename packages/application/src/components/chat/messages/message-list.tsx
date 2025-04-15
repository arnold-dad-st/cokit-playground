import { Message } from './message';
import { observer } from 'mobx-react';
import { Action, ChatMessage } from '../../../stores/chat.store';
import { Fragment } from 'react';
import { useCopilotChat } from '@copilotkit/react-core';

interface MessageListProps {
    messages: ChatMessage[];
    onAction: (messageId: string, action: Action) => void;
}

export const MessageList = observer(({ onAction }: MessageListProps) => {
    const { visibleMessages } = useCopilotChat();

    return (
        <Fragment>
            {visibleMessages.map(message => (
                <Message key={message.id} message={message} onAction={onAction} />
            ))}
        </Fragment>
    );
});
