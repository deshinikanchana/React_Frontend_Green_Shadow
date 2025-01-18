export class Staff {
    member_id: string;
    first_name: string;
    last_name: string;
    designation: string;
    gender: string;
    joined_Date: string;
    Dob: string;
    address: string;
    contact_number: string;
    email: string;
    role: string;
    fields: string [];
    vehicles: string [];

    constructor(member_id: string, first_name: string, last_name: string, designation: string, gender: string, joined_Date: string, Dob:string,address: string, contact_number: string, email: string, role: string, fields: string [], vehicles: string []) {
        this.member_id = member_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.designation = designation;
        this.gender = gender;
        this.joined_Date = joined_Date;
        this.Dob = Dob;
        this.address = address;
        this.contact_number = contact_number;
        this.email = email;
        this.role = role;
        this.fields = fields;
        this.vehicles = vehicles;
    }
}