import { Skeleton } from '@servicetitan/anvil2';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

const MotionSkeletonText = motion(Skeleton.Text);

export const MsgBox: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div
            style={{
                display: 'flex',
                width: '364px',
                padding: '16px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '16px',
                borderRadius: '0px 24px 24px 24px',
                background: 'var(--color-blue-100, #E0F2FF)',
            }}
        >
            {children}
        </div>
    );
};

export const UserBox: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div
            style={{
                display: 'flex',
                width: '364px',
                padding: '16px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '16px',
                borderRadius: '24px 24px 0px 24px',
                background: '#EEEEEE',
            }}
        >
            {children}
        </div>
    );
};

export const ChatMessageSkeleton = () => {
    return (
        <MsgBox>
            <MotionSkeletonText
                initial={{ width: '50%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                rows={1}
            />
            <MotionSkeletonText
                initial={{ width: '0' }}
                animate={{ width: '75%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                rows={1}
            />
        </MsgBox>
    );
};
