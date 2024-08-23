import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin-bottom: 100px;
     position: relative;
`;

export const ChatWindow = styled.div`
display: flex;
flex-direction: column;
 flex: 1;
  max-height: calc(100vh - 300px);
  padding-bottom: 50px;
  overflow: auto;
`;

export const ChatInputContainer = styled.div`
  //  display: flex;
   width: 100%;
   position: absolute;
   top: 75vh;
`

export const ChatText = styled.div`
display: flex;
color: #333;
`;

export const ChatInput = styled.input`
width: 100%;
padding: 16px 40px 16px 10px;
background: #1c1b26;
color: #fff;
`;

export const ChatButton = styled.button`
color: #fff;
width: 38px;
height: 38px;
position: absolute;
top:10px;
right: 20px;
display:flex;
align-items: center;
justify-content: center;
background: #3f1ca2;
border-radius: 5px;
`;


export const ResizableTableView = styled.div`
  flex: 4;
  border-right: 1px solid #ccc;
  resize: horizontal;
  overflow: auto;
`;

export const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
