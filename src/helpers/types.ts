export type Projet = {
    id : number | null | undefined,
    theme : string | undefined;
    description : string | undefined;
    status : string | undefined;
    startProjet : Date | undefined;
    endProjet : Date | undefined;
    startReelProjet : Date | null;
    endReelProjet : Date | null;
    listes : object | null;
};

export type ResponseDataAPI<T> = {
    codeStatus : number;
    message : string;
    data : T;
}