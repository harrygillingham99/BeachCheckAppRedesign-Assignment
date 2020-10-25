//Created using Json2ts.com using postcodes.io endpoint
interface Codes {
    admin_district: string;
    admin_county: string;
    admin_ward: string;
    parish: string;
    parliamentary_constituency: string;
    ccg: string;
    ccg_id: string;
    ced: string;
    nuts: string;
}

//Created using Json2ts.com using postcodes.io endpoint
 interface Result {
    postcode: string;
    quality: number;
    eastings: number;
    northings: number;
    country: string;
    nhs_ha: string;
    longitude: number;
    latitude: number;
    european_electoral_region: string;
    primary_care_trust: string;
    region: string;
    lsoa: string;
    msoa: string;
    incode: string;
    outcode: string;
    parliamentary_constituency: string;
    admin_district: string;
    parish: string;
    admin_county?: any;
    admin_ward: string;
    ced?: any;
    ccg: string;
    nuts: string;
    codes: Codes;
}

//Root response object
export interface PostcodeResponse {
    status: number;
    result: Result;
}