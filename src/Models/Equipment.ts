export class Equipment {
    equipment_id:string;
    name:string;
    type:string;
    status:string;
    staff:string;
    field:string;

    constructor(equipment_id:string,name:string,type:string,status:string,staff:string,field:string) {
        this.equipment_id = equipment_id;
        this.name = name;
        this.type = type;
        this.status = status;
        this.staff = staff;
        this.field = field;

    }
}