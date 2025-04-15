import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { observer } from 'mobx-react';
import { EVENT_BUS_TOKEN } from '@servicetitan/web-components';
import { provide, useDependencies, useOptionalDependencies } from '@servicetitan/react-ioc';

import { Content } from './content';
import { Header } from './header';
import { Footer } from './footer';

import * as styles from './styles.module.less';
import { ChatStore } from '../../stores/chat.store';

export const ChatContainer = provide({
    singletons: [ChatStore],
})(
    observer(() => {
        return (
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: '-24px' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className={styles.chatWindow}
            >
                <Header />
                <Content />
                <Footer />
            </motion.div>
        );
    })
);
