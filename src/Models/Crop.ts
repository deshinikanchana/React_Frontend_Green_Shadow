export class Crop{
    crop_code: string;
    common_name: string;
    scientific_name: string;
    crop_img_url: string;
    crop_category: string;
    crop_season: string;
    field: string;

    constructor(crop_code: string, common_name: string, scientific_name: string, crop_img_url: string,crop_category: string,crop_season:string,field:string) {
        this.crop_code = crop_code;
        this.common_name = common_name;
        this.scientific_name = scientific_name;
        this.crop_img_url = crop_img_url;
        this.crop_category = crop_category;
        this.crop_season = crop_season;
        this.field = field;
    }
}