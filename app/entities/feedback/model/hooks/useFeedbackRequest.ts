import { postFeedback } from "../../api"
import type { FeedbackRequestDto } from "../../api/types";

const useFeedbackRequest = () => {
  return useRequest<FeedbackRequestDto, FeedbackRequestDto>({
    requestFn: postFeedback
  });
}

export default useFeedbackRequest;