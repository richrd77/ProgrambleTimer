export class Timer {
    Name: string;
    Seconds: number;
    Repetitions: number;
    Color: string;

    constructor(intervalName: string, intervalSeconds: number, colur: string) {
        this.Name = intervalName;
        this.Seconds = intervalSeconds;
        this.Repetitions = 0;
        this.Color = colur;
    }
}