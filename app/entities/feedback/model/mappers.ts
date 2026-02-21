import type { FeedbackRequestDto } from "../api/types"
import type { FeedbackRequest } from "./types"

export const mapFeedbackDtoToModel = (dto: FeedbackRequestDto): FeedbackRequest => {
  return {
    ...dto
  }
}
