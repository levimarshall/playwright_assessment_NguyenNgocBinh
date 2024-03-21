import {Page} from "@playwright/test";
import { chromium, Browser, ElementHandle } from "playwright";
export class Common{

    static getDayOfWeek(dateString:string){
        const [day, month, year] = dateString.split('/').map(Number);
        const date = new Date(year, month - 1, day);
        const dayOfWeek = date.getDay();
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return weekdays[dayOfWeek];
    }
    
    static getIndexOfDayOfWeek(day: string): number {
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const index = weekdays.indexOf(Common.getDayOfWeek(day));
        return index;
    }

    static removeWhiteSpace(input: string): string {
        return input.replace(/\s/g, '');
    }

};