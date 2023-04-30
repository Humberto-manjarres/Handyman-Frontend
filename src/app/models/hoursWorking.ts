export class HoursWorking{
    constructor(
        public regularHours:string,
        public nightHours:string,
        public sundayHours:string,
        public regularHoursExtras:string,
        public nightHoursExtras:string,
        public sundayOvertime:string
    ){}
}