import { Entity } from "../../core/domain/Entity";

type CorrectionProps = {
    title: string
    instructionUrl: string
    createdAt: Date
}

export class Correction extends Entity<CorrectionProps> {
    private constructor(props: CorrectionProps, id?:string){
        super(props, id)
    }

    static create(props:CorrectionProps, id?: string){
        const correction = new Correction(props, id)
        return correction
    }

}