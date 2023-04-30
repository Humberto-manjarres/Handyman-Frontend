export class ServiceReport{
    constructor(
        public idTechnical:string,
        public idService:string,
        public startDate:Date,
        public endDate:Date
    ){}
}