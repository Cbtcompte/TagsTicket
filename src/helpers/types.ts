export type Projet = {
    id : number | null | undefined,
    theme : string | undefined;
    description : string | undefined;
    status : string | undefined;
    startProjet : Date | undefined;
    endProjet : Date | undefined;
    startReelProjet : Date | undefined;
    endReelProjet : Date | undefined;
    listeDtos : Liste[] | undefined;
};

export type TagType = {
    id: number | null | undefined,
    libelle: string,
    couleur: string,
}

export type Teams = {
    id : number | null | undefined,
    name : string,
}

export type Users = {
    id : number | null | undefined,
    name : string,
    email : string
}

export type Liste = {
    id : number | null | undefined,
    titre : string,
    projet : number
    ticketDtos : Ticket []
}

export type Ticket = {
    id : number | null | undefined,
    dateEnd : Date | undefined,
    dateStart : Date | undefined,
    isClosed : boolean,
    isForEveryOne : boolean,
    libelle : string,
    liste : number
}

export type ConbimeListeProjet = {
    id : number | null | undefined,
    data : Liste[]
}

export type Global = Teams | TagType | Projet | Users | Liste | Ticket
  

export type ResponseDataAPI<T> = {
    codeStatus : number;
    message : string;
    data : T;
}