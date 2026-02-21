import type { FeedbackRequestDto } from "./types";

export const postFeedback = async (data: FeedbackRequestDto) => {
  const config = useRuntimeConfig();

  return await $fetch<FeedbackRequestDto>('/api/feedback/send-message/', {
    method: 'POST',
    baseURL: config.public.apiBase,
    body: {
      ...data
    }
  });
}
