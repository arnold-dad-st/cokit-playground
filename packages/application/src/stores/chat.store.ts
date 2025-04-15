import { v4 as uuidv4 } from 'uuid';
import { makeAutoObservable } from 'mobx';
import { injectable } from '@servicetitan/react-ioc';
import { FieldState, FormState } from 'formstate';

export interface Action {
    id: string;
    label: string;
    actionResult: () => void; // Function to execute when the action is triggered
    handler: any;
}

export enum MessageType {
    USER = 'user',
    AI = 'ai',
    SYSTEM = 'system',
    LOADING = 'loading',
}

export interface ChatMessage {
    id: string;
    type: MessageType;
    owner?: any; // The owner of the message (e.g., user, AI)
    content: string;
    timestamp: Date;
    interactive: boolean; // Indicates if the message is interactive
    actionResult?: string; // Optional result of the action
    actions: Action[]; // Array of actions associated with the message
}

export const ownersBucket: any = {
    marketing: 'Marketing',
    inventory: 'Inventory',
    dispatch: 'Dispatch',
    reporting: 'Reporting',
};

export type OwnerType = keyof typeof ownersBucket;

export interface MessageProps {
    message: ChatMessage;
    owner?: OwnerType;
}

@injectable()
export class ChatStore {
    form = new FormState({
        message: new FieldState(''),
    });
    open: boolean = false;
    messages: any[] = [
        {
            id: uuidv4(),
            type: MessageType.AI,
            owner: 'reporting',
            content: 'What can I help with?',
            timestamp: new Date(),
            interactive: false,
            actions: [], // Add any actions if needed
        },
    ];
    isLoading: boolean = false;
    errorMessage: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    handleOpenChat = () => {
        this.open = true;
    };

    handleCloseChat = () => {
        this.open = false;
    };
}
