export class DateFormat {
   static format(date: Date): string {
       return new Date(date).toLocaleString();
   }

   static sqlFormat(date: Date): string {
       let dateLocal =  new Date(date).toLocaleString(); 
       let dateSqlFormat = dateLocal.split(' ')[0].split('/');
       return `${dateSqlFormat[2]}-${dateSqlFormat[1]}-${dateSqlFormat[0]}`;
   }
}