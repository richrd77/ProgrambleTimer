export class Timer {
    Name: string;
    Seconds: number;
    Repetitions: number;

    constructor(intervalName: string, intervalSeconds: number) {
        this.Name = intervalName;
        this.Seconds = intervalSeconds;
    }
}