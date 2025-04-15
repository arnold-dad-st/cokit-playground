import { AnvilProvider, Page, SideNav, Text } from '@servicetitan/anvil2';
import { HashBrowserRouter } from '@servicetitan/hash-browser-router';
import { StrictMode, FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainPage } from './main-page';
import './app.css';
import { CopilotKit } from '@copilotkit/react-core';
import { CopilotPopup } from '@copilotkit/react-ui';
import '@copilotkit/react-ui/styles.css';

export const App: FC = () => (
    <HashBrowserRouter>
        <StrictMode>
            <AnvilProvider>
                <Page>
                    <AppSidebar />
                    <AppContent />
                </Page>
            </AnvilProvider>
        </StrictMode>
    </HashBrowserRouter>
);

const AppSidebar: FC = () => (
    <Page.Sidebar>
        <Page.SidebarHeader>
            <Text variant="headline" el="h2">
                Application
            </Text>
        </Page.SidebarHeader>
        <SideNav>
            <SideNav.Link id="main" href="#/">
                Anvil
            </SideNav.Link>
            <SideNav.Link id="mfe" href="#/mfe">
                CopilotKit
            </SideNav.Link>
        </SideNav>
    </Page.Sidebar>
);

const AppContent: FC = () => (
    <CopilotKit runtimeUrl="http://localhost:4000/copilotkit">
        <Page.Content>
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/mfe">
                    <CopilotPopup
                        instructions="You are assisting the user as best as you can. Answer in the best way possible given the data you have."
                        labels={{
                            title: 'Popup Assistant',
                            initial: 'Need any help?',
                        }}
                    />
                </Route>
            </Switch>
        </Page.Content>
    </CopilotKit>
);
