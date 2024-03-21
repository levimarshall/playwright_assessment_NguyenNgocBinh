import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from './fixtures';
import { URL_LIST } from '../support/url';
import { RESULT } from '../support/results';
import { Common } from '../support/common-task';

const { Given, When, Then } = createBdd(test);

Given('User navigates to {string} booking page', async ({ page }, service: string) => {
    switch (service) {
        case "Service 1":
            await page.goto(URL_LIST.Service1);
            break;
        case "Service 2":
            await page.goto(URL_LIST.Service2);
            break;
        case "Service 3":
            await page.goto(URL_LIST.Service3);
            break;
        case "Service 4":
            await page.goto(URL_LIST.Service4);
            break;
        case "Service 5":
            await page.goto(URL_LIST.Service5);
            break;
        case "Service 6":
            await page.goto(URL_LIST.Service6);
            break;
        default:
            console.log("Unknown service");
            break;
    }
    await page.locator('#submit_btn').click();
});

When('User selects date and time {string}', async ({ page }, date:string) => {
    const [datePart, timePart] = date.split(" ");
    const [day, month, year] = datePart.split("/");
    const [time] = timePart.trim();
    
    let indexDayOfWeek = Common.getIndexOfDayOfWeek(datePart);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthIndex = parseInt(month, 10) - 1;
    const monthString = months[monthIndex];

    await page.locator(`#year-dropdown`).click();
    await page.locator(`//h5[contains(text(),"${year}")]`).click();
    await page.locator(`//button[@id="month-dropdown"]`).click();
    await page.locator(`//h5[contains(text(),"${monthString}")]`).click();
    await page.locator(`//div//div[${indexDayOfWeek + 1}]/h5[(text()= '${day}')]`).click(); 
    await page.locator(`//*[contains(@*,'time')]//span[contains(text(), '${time}')]`).click();
});

// When('User selects time {string}', async ({ page }, time:string) => {
//     await page.locator(`//*[contains(@*,'time')]//span[contains(text(), '${time}')]`).click();
// });

When('User clicks button {string}', async ({ page }, button:string) => {
    await page.locator(`//*[text()='${button}']/ancestor::button`).click();
});

When('User enters email {string}', async ({ page }, email:string) => {
    await page.fill(`//*[contains(@*,'email-field')]`,email);
});

When('User chooses phone code {string}', async ({ page }, phoneCode:string) => {
    await page.locator(`//*[contains(@*,'selector')]`).click();    
    await page.waitForSelector(`//*[contains(@*,'Search')]`);
    await page.fill(`//*[contains(@*,'Search')]`, phoneCode);
    await page.locator(`//*[contains(@*,'list-item')]//following-sibling::div[text()='${phoneCode}']`).click();
});

When('User enters phone number {string}', async ({ page }, phoneNumber:string) => {
    await page.fill(`//input[contains(@*,'citizen-phone')]`, phoneNumber);
});

When('User should see string {string} under field {string}', async ({ page }, string:string, field:string) => {
    await expect(Common.removeWhiteSpace(await page.locator(`//label[contains(text(),"${field}")]/following-sibling::*/descendant::*[@*='message']`).innerText())).toContain(string);
});

When('User navigates to View Booking page', async ({ page }) => {
    await page.locator(`//*[contains(@*,"desktop") and @id="view-bookings"]`).click();
});

Then('User should see pop up notification with selected time {string}', async ({page}, date:string)=>{
    const [datePart, timePart] = date.split(" ");
    const [day, month, year] = datePart.split("/");
    const [time] = timePart.trim();
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthIndex = parseInt(month, 10) - 1;
    const monthString = months[monthIndex];

    await expect(page.locator(`//*[contains(@*,"selected-date-time")]/h4`)).toContainText(year);
    await expect(page.locator(`//*[contains(@*,"selected-date-time")]/h4`)).toContainText(time);
    await expect(page.locator(`//*[contains(@*,"selected-date-time")]/h4`)).toContainText(monthString);
    await expect(page.locator(`//*[contains(@*,"selected-date-time")]/h4`)).toContainText(day);
});


