export class Timer {
    Name: string;
    Seconds: number;
    Repetitions: number;
    Color: string;

    constructor(intervalName: string, intervalSeconds: number) {
        this.Name = intervalName;
        this.Seconds = intervalSeconds;
    }
}