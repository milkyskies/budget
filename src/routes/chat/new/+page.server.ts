import { redirect, type ServerLoad } from '@sveltejs/kit';
import { ChatService } from 'src/lib/domain/service/chat.service';

export const load: ServerLoad = async () => {
	const chat = await ChatService.create().newChat();

	redirect(302, `/chat/${chat.id}`);
};
