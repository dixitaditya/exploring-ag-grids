import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 82px);
`;

export const ResizableTableView = styled.div`
  width: 66.67%; 
  min-width: 300px;
  border-right: 1px solid #ccc;
  resize: horizontal; /* Allows horizontal resizing */
  overflow: auto;
`;

export const ChatContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin:20px 20px 20px;
`;