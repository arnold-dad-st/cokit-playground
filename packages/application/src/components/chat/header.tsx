import { observer } from 'mobx-react';
import { core } from '@servicetitan/anvil2/token';
import { Button, Icon } from '@servicetitan/anvil2';
import IconTitanIntelligence from '@servicetitan/anvil2/assets/icons/st/titan_intelligence.svg';
import IconMinimize from '@servicetitan/anvil2/assets/icons/material/round/minimize.svg';
import IconClose from '@servicetitan/anvil2/assets/icons/material/round/close.svg';

import * as styles from './styles.module.less';

export const Header = observer(() => {
    return (
        <div className={styles.chatHeader}>
            <span style={{ color: core.semantic.ForegroundColorPrimary.value }}>
                <Icon svg={IconTitanIntelligence} size="large" inherit />
            </span>
            <div />
            <div>
                <Button
                    appearance="ghost"
                    size="small"
                    icon={IconMinimize}
                    aria-label="minimize"
                    onClick={() => {}}
                />
                <Button
                    appearance="ghost"
                    size="small"
                    icon={IconClose}
                    aria-label="close"
                    onClick={() => {}}
                />
            </div>
        </div>
    );
});
