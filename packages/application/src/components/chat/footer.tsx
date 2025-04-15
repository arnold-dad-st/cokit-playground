import { observer } from 'mobx-react';
import { useDependencies } from '@servicetitan/react-ioc';
import IconSend from '@servicetitan/anvil2/assets/icons/material/round/send.svg';
import { ChatStore } from '../../stores/chat.store';
import { Role, TextMessage } from '@copilotkit/runtime-client-gql';
import { Button, TextField } from '@servicetitan/anvil2';
import { useCopilotChat } from '@copilotkit/react-core';

import * as styles from './styles.module.less';

export const Footer = observer(() => {
    const { appendMessage } = useCopilotChat();

    const [
        {
            form: {
                $: { message },
            },
        },
    ] = useDependencies(ChatStore);

    const sendMessage = () => {
        appendMessage(new TextMessage({ content: message.value, role: Role.User }));
        message.reset();
    };

    const handleKeydown = (event: any) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    };

    return (
        <form className={styles.chatFooter}>
            <TextField
                flexGrow={1}
                onChange={e => message.onChange(e.target.value)}
                value={message.value}
                placeholder="Message Assist"
                name="example-text-field"
                onKeyDown={handleKeydown}
            />
            <Button
                type="submit"
                style={{ position: 'relative' }}
                icon={IconSend}
                onClick={sendMessage}
            />
        </form>
    );
});
