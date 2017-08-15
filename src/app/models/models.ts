// Interfaz del modelo de datos de los controles primeNG de tipo maestro.
export interface IResultTable {
    tier: string;
    match: string;
    winners: string;
    amount: number;
}

export class ResultTable implements IResultTable {
    public tier: string;
    public match: string;
    public winners: string;
    public amount: number;

    // Constructor.
    constructor() {
    }
}