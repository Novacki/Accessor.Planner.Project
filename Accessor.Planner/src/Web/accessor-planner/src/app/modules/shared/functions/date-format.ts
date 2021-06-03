export class DateFormat {
   static format(date: Date): string {
       return new Date(date).toLocaleString();
   }
}