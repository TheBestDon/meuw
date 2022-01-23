import { Country } from ".";

type Rate = 1 | 2 | 3 | 4 | 5 ;
type Boolean = 0 | 1 ;

export interface Breed {
        weight: {
            imperial: string;
            metric: string;
        },
        id: string;
        name: string;
        cfa_url: string;
        vetstreet_url: string;
        vcahospitals_url: string;
        temperament: string;
        origin: string;
        country_codes: Country;
        country_code: Country;
        description: string;
        life_span: string;
        indoor: Boolean;
        lap: Rate;
        alt_names: string;
        adaptability: Rate;
        affection_level: Rate;
        child_friendly: Rate;
        dog_friendly: Rate;
        energy_level: Rate;
        grooming: Rate;
        health_issues: Rate;
        intelligence: Rate;
        shedding_level: Rate;
        social_needs: Rate;
        stranger_friendly: Rate;
        vocalisation: Rate;
        experimental: Boolean;
        hairless: Boolean;
        natural: Boolean;
        rare: Boolean;
        rex: Boolean;
        suppressed_tail: Boolean;
        short_legs: Boolean;
        wikipedia_url: string;
        hypoallergenic: Boolean;
        reference_image_id: string;
        image: {
            id: string;
            width: number;
            height: number;
            url: string;
        }
    }
    export interface BreedListAPIResponse extends Array<Breed> { }
