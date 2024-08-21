import React from 'react';
import TableView from './TableView';
import Chatbot from './Chatbot';
import styled from 'styled-components';
import { DataTableContextProvider } from "../contexts/DataTableContext";
import { ConversationContextProvider } from '../contexts/ConversationContext';

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

const Container = styled.div`
  display: flex;
  height: calc(100vh - 72px); // Adjust this as per your header height
`;

const ResizableTableView = styled.div`
  width: 66.67%; /* Initially 2/3 of the container width */
  min-width: 300px; /* Set a minimum width to prevent it from becoming too small */
  border-right: 1px solid #ccc;
  resize: horizontal; /* Allows horizontal resizing */
  overflow: auto;
`;

const ChatContainer = styled.div`
  flex-grow: 1; /* Allow ChatContainer to take up the remaining space */
  display: flex;
  flex-direction: column;
`;
