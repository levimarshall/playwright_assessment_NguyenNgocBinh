import { ElementHandle, expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from './fixtures';
import { URL_LIST } from '../support/url';
import { RESULT } from '../support/results';
import { Common } from '../support/common-task';

let { Given, When, Then } = createBdd(test);

Given('User navigates to {string} booking page on mobile', async ({ page }, service: string) => {
    // for (let set in URL_LIST){
    //     let result = await [set as keyof typeof URL_LIST];
    //     if (service === set){
    //         await page.goto(URL_LIST[service]);
    //         break;
    //     };
    // }
    
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

When('User selects date and time {string} on mobile', async ({ page }, date:string) => {
    let [datePart, timePart] = date.split(" ");
    let dateList = datePart.split("/");
    const [time] = timePart.trim();
    let dateTimeElements = await page.$$(`//*[@*='form-date-input-base']/descendant::input`);
    
    for (let i = 0; i < dateTimeElements.length; i++){
        await page.fill(`//*[@*='form-date-input-base']/descendant::input[${i}]`, dateList[i+1]);
    }

    await page.locator(`//*[contains(@*,'time')]//span[contains(text(), '${time}')]`).click();

});



When('User clicks button {string} on mobile', async ({ page }, button:string) => {
    await page.locator(`//*[text()='${button}']/ancestor::button`).click();
});

When('User enters email {string} on mobile', async ({ page }, email:string) => {
    await page.fill(`//*[contains(@*,'email-field')]`,email);
});

When('User chooses phone code {string} on mobile', async ({ page }, phoneCode:string) => {
    await page.locator(`//*[contains(@*,'selector')]`).click();    
    await page.waitForSelector(`//*[contains(@*,'Search')]`);
    await page.fill(`//*[contains(@*,'Search')]`, phoneCode);
    await page.locator(`//*[contains(@*,'list-item')]//following-sibling::div[text()='${phoneCode}']`).click();
});

When('User enters phone number {string} on mobile', async ({ page }, phoneNumber:string) => {
    await page.fill(`//input[contains(@*,'citizen-phone')]`, phoneNumber);
});

When('User should see string {string} under field {string} on mobile', async ({ page }, string:string, field:string) => {
    await expect(Common.removeWhiteSpace(await page.locator(`//label[contains(text(),"${field}")]/following-sibling::*/descendant::*[@*='message']`).innerText())).toContain(string);
});

When('User navigates to View Booking page on mobile', async ({ page }) => {
    await page.locator(`//button[@data-testid='button__mobile-menu']`).click();
    await page.locator(`//*[contains(@*,"mobile") and @id="view-bookings"]`).click();
});

Then('User should see pop up notification with selected time {string} on mobile', async ({page}, date:string)=>{
    let [datePart, timePart] = date.split(" ");
    let [day, month, year] = datePart.split("/");
    let [time] = timePart.trim();
    
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthIndex = parseInt(month, 10) - 1;
    let monthString = months[monthIndex];

    await expect(page.locator(`//*[contains(@*,"selected-date-time")]/h4`)).toContainText(year);
    await expect(page.locator(`//*[contains(@*,"selected-date-time")]/h4`)).toContainText(time);
    await expect(page.locator(`//*[contains(@*,"selected-date-time")]/h4`)).toContainText(monthString);
    await expect(page.locator(`//*[contains(@*,"selected-date-time")]/h4`)).toContainText(day);
});

Then('User should see the result {string}', async ({page}, result:string)=>{
    await expect(page.locator(`//*[contains(@*,'status-pill')]/div`)).toHaveText(result);

});

