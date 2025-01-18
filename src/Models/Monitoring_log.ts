export class Monitoring_log {
    log_code:string;
    log_date:string;
    observation:string;
    observed_image:string;
    fields:string [];
    crops:string [];
    staff:string [];

    constructor(log_code:string, log_date:string, observation:string,observed_image:string, fields:string [],crops:string [],staff:string []) {
        this.log_code = log_code;
        this.log_date = log_date;
        this.observation = observation;
        this.observed_image = observed_image;
        this.fields = fields;
        this.crops = crops;
        this.staff = staff;
    }
}