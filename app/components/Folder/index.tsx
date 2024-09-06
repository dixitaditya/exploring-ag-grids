import React from 'react';
import folder from './folder.json';
import Tree from './Tree';
import { FolderDataProvider, useFolderDataContext } from '@/app/contexts/FolderContext';
import {Container, ResizableTableView,ChatContainer} from "./style.styled"
import Chatbot from '../Chatbot';

const FolderDemo = () => {
    const {data,handleSubmit} = useFolderDataContext()
    console.log("data", data)
    return (
     <>
      

  <Container>
    <ResizableTableView>
      <div style={{marginTop: 50}}>
      {data?.map((item) => (
        <Tree key={item.id} item={item} />
      ))}
      <button 
  onClick={handleSubmit} 
  className="bg-blue-500 text-white py-2 px-4 mx-10 rounded shadow-md hover:bg-blue-600 transition duration-300 ease-in-out mt-5"
>
  Submit
</button>

      </div>
   
     
    </ResizableTableView>
    <ChatContainer>
      <Chatbot />
    </ChatContainer>
  </Container>

  </>
    );
};

export default FolderDemo;
