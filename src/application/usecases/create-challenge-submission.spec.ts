import { CreatechallengeSubmission } from "./create-challenge-submission"

describe('Create challenge submission usecase', ()=>{
    test('should be able to create a new chalenge submission', async()=>{
        const sut = new CreatechallengeSubmission()
        const response = sut.execute({
            studentId:'fake-student-id',
            challengeId:'fake-challenge-id',
        })
        expect(response).toBeTruthy()
    })
})