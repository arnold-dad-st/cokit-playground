import { FC } from 'react';
import { Action, ChatMessage } from '../../../stores/chat.store';

interface InteractiveMessageProps {
    message: ChatMessage;
    actions: Action[];
    onAction: (messageId: string, action: Action) => void;
}

export const InteractiveMessage: FC<InteractiveMessageProps> = ({ message, actions, onAction }) => {
    return (
        <div>
            {actions.map(action => (
                <button key={action.id} onClick={() => onAction(message.id, action)}>
                    {action.label}
                </button>
            ))}
            {message.actionResult && (
                <div className="action-result">Action Result: {message.actionResult}</div>
            )}
        </div>
    );
};
