import React from 'react';
import TableView from '../TableView';
import Chatbot from '../Chatbot';

import { DataTableContextProvider } from "../../contexts/DataTableContext";
import { ConversationContextProvider } from '../../contexts/ConversationContext';

import {Container, ResizableTableView,ChatContainer} from "./style.styled"

const Layout = () => {
  return (
    <ConversationContextProvider>
    <DataTableContextProvider>
      <Container>
        <ResizableTableView>
          <TableView />
        </ResizableTableView>
        <ChatContainer>
          <Chatbot />
        </ChatContainer>
      </Container>
    </DataTableContextProvider>
    </ConversationContextProvider>
  );
};

export default Layout;

