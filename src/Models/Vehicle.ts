export class Vehicle {
    vehicle_code:string;
    license_plate_number:string;
    vehicle_category:string;
    fuel_type:string;
    status:string;
    staff :string [];
    remarks:string;

    constructor(vehicle_code:string,license_plate_number:string,vehicle_category:string,fuel_type:string,status:string,staff:string [],remarks:string) {
        this.vehicle_code = vehicle_code;
        this.license_plate_number = license_plate_number;
        this.vehicle_category = vehicle_category;
        this.fuel_type = fuel_type;
        this.status = status;
        this.staff = staff;
        this.remarks = remarks;

    }
}