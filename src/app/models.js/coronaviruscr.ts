declare module namespace {

    export interface ByStatus {
        active: number;
        recovered: number;
        deceased: number;
    }

    export interface ByGender {
        women: number;
        men: number;
    }

    export interface ByAge {
        juveniles: number;
        adults: number;
        elderlies: number;
    }

    export interface ByNationality {
        costarricans: number;
        foreigners: number;
        pending: number;
    }

    export interface ByLocation {
        sanJose: number;
        alajuela: number;
        cartago: number;
        heredia: number;
        guanacaste: number;
        puntarenas: number;
        limon: number;
        unknown: number;
    }

    export interface Datum {
        date: string;
        confirmedCases: number;
        discardedCases: number;
        byStatus: ByStatus;
        byGender: ByGender;
        byAge: ByAge;
        byNationality: ByNationality;
        byLocation: ByLocation;
    }

    export interface RootObject {
        data: Datum[];
    }

}

