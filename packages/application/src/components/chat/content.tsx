import { observer } from 'mobx-react';
import { useDependencies } from '@servicetitan/react-ioc';
import { MessageList } from './messages';
import { Action, ChatStore } from '../../stores/chat.store';

import * as styles from './styles.module.less';
import { useEffect, useRef } from 'react';
import { useCopilotChat } from '@copilotkit/react-core';

export const Content = observer(() => {
    const {
        visibleMessages,
        appendMessage,
        setMessages,
        deleteMessage,
        reloadMessages,
        stopGeneration,
        isLoading,
    } = useCopilotChat();

    const [chatStore] = useDependencies(ChatStore);

    const handleAction = (messageId: string, action: Action) => {};

    const chatEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatStore.messages.length]);

    console.log(visibleMessages);

    return (
        <div className={styles.chatContent}>
            <MessageList messages={chatStore.messages} onAction={handleAction} />
            <div ref={chatEndRef} />
        </div>
    );
});
