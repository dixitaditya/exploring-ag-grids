import {RowData} from "../../interfaces/index"
import {ConversationPublic} from "../../interfaces"

export type TConversationContext = {
 conversationPublic?: ConversationPublic
 sendMessage?: (message: any)=> void
}