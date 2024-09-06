"use client";
import FolderDemo from '../components/Folder';
import {FolderDataProvider} from "../contexts/FolderContext"
import {ConversationContextProvider} from "../contexts/ConversationContext"

export default function FolderRenderPage() {
  return (
    <ConversationContextProvider>
      <FolderDataProvider>
        <FolderDemo/>
      </FolderDataProvider>
    </ConversationContextProvider>
  )
}