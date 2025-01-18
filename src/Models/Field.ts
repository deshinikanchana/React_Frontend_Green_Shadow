export class Field{
    field_code: string;
    field_name: string;
    location: string;
    size: string;
    crops: string [];
    staff:string [];
    image_1_url: string;
    image_2_url: string;

    constructor(field_code: string, field_name: string, location: string, size: string,crops: string [], staff: string [], image_1_url: string, image_2_url: string){
        this.field_code = field_code;
        this.field_name = field_name;
        this.location = location;
        this.size = size;
        this.crops = crops;
        this.staff = staff;
        this.image_1_url = image_1_url;
        this.image_2_url = image_2_url;

    }
}