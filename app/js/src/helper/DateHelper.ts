export class DateHelper {

    static textFromDate(date: Date): string {

        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }

    static dateFromText(text: string) {
        return new Date(text.replace(/-/g, ','));
    }
}