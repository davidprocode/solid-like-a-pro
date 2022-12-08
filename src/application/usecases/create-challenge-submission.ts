import { Submission } from "../../domain/entities/submission"

type CreateChallengeSubmissionRequest = {
    studentId: string
    challengeId: string
}

export class CreatechallengeSubmission {
    execute({studentId, challengeId}: CreateChallengeSubmissionRequest){
        const submission = Submission.create({
            studentId,
            challengeId,
        })

        return submission
    }
}