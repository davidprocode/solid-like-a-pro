import { Entity } from "../../core/domain/Entity";

type ChallengeProps = {
    grade: number
    submissionId: string
    createdAt: Date
}

export class Challenge extends Entity<ChallengeProps> {
    private constructor(props: ChallengeProps, id?:string){
        super(props, id)
    }

    static create(props: ChallengeProps, id?: string){
        const correction = new Challenge(props, id)
        return correction
    }
}