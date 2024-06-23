import { type ServerLoad } from '@sveltejs/kit';
import { ChatService } from 'src/lib/domain/service/chat.service';

export const load: ServerLoad = async () => {
	const chats = await ChatService.create().getChats();
	const chatValues = chats.map((chat) => chat.toValues());

	return {
		chats: chatValues
	};
};
