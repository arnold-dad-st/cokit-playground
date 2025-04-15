import { AnvilProvider, Page, SideNav, Text } from '@servicetitan/anvil2';
import { HashBrowserRouter } from '@servicetitan/hash-browser-router';
import { StrictMode, FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainPage } from './main-page';
import { MFEPage } from './mfe-page';
import './app.css';
import { CopilotKit } from '@copilotkit/react-core';

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
                Main page
            </SideNav.Link>
            <SideNav.Link id="mfe" href="#/mfe">
                MFE page
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
                    <MFEPage />
                </Route>
            </Switch>
        </Page.Content>
    </CopilotKit>
);
