import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { budget } = await parent();

	return {
		budget
	};
};
