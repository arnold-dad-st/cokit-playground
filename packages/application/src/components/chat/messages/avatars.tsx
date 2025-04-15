import clxn from 'classnames';
import { Flex, Icon } from '@servicetitan/anvil2';
import IconGnavMarketingActive from '@servicetitan/anvil2/assets/icons/st/gnav_marketing_active.svg';
import IconGnavReportsActive from '@servicetitan/anvil2/assets/icons/st/gnav_reports_active.svg';
import { BodyText } from '@servicetitan/design-system';

import * as styles from './avatars.module.less';
import { FC, PropsWithChildren } from 'react';
import { core } from '@servicetitan/anvil2/token';
import { MsgBox } from './skeleton-message';

const iconBucket = {
    marketing: IconGnavMarketingActive,
    inventory: IconGnavMarketingActive,
    dispatch: IconGnavMarketingActive,
    reporting: IconGnavReportsActive,
};

export const SystemAvatar: FC<any> = ({ className }) => {
    return (
        <span
            className={clxn(className, styles.iconRound)}
            style={{ color: core.semantic.ForegroundColorPrimary.value }}
        >
            <Icon svg={IconGnavMarketingActive} inherit />
        </span>
    );
};

export const MessageHeadline: FC<
    PropsWithChildren<{
        owner?: any;
    }>
> = ({ owner, children }) => {
    return (
        <Flex>
            <SystemAvatar className="m-r-2" owner={owner} />
            <BodyText size="small">
                <BodyText size="small" bold subdued inline>
                    Assist
                </BodyText>{' '}
                <MsgBox>{children}</MsgBox>
            </BodyText>
        </Flex>
    );
};
