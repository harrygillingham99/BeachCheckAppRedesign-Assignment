//Regex from UK .GOV website https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/488478/Bulk_Data_Transfer_-_additional_validation_valid_from_12_November_2015.pdf
export const PostcodeRegex : string = "([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))s?[0-9][A-Za-z]{2})";

export enum SearchBarMessages {
    Default = "enter a postcode...",
    ValidationError = "invalid postcode...",
    Exception = "an error occured..."
}

export const PostcodeApiUrl : string = "https://api.postcodes.io/postcodes/";

export const DefaultLatDelta = 0.003;

export const DefaultLongDelta = 0.002;

export const InitialMapLocation = {
    latitude: 50.720806,
    longitude: -1.904755,
    latitudeDelta: DefaultLatDelta,
    longitudeDelta: DefaultLongDelta,
  }


