
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking draw displays the div with id="choices"', async ()=>{
    await (await driver).findElement(By.xpath('//*[@id="draw"]')).click();
    await (await driver).sleep(3000)
    expect('id="choices"').toBeTruthy()
    await (await driver).sleep(3000)
})

test('Clicking "Add to Duo" displays id="player-duo"', async () => {
    await (await driver).findElement(By.xpath('//*[@id="draw"]')).click();
    await (await driver).sleep(3000)
    await (await driver).findElement(By.xpath('//*[@id="choices"]/div[4]/button')).click();
    await (await driver).sleep(3000)
    expect('id="player-duo"').toBeTruthy()
    await (await driver).sleep(3000)
})
