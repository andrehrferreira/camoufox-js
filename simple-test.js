import { launchOptions } from './dist/index.js';
import { firefox } from 'playwright-core';

console.log('Testing Camoufox with Firefox...');

try {
    const userDataDir = './.profiles/simple-test';
    const context = await firefox.launchPersistentContext(userDataDir, {
        ...(await launchOptions({ headless: false })),
        viewport: null,
    });
    console.log('✅ Persistent context launched');

    const page = await context.newPage();
    console.log('✅ Page created');
    
    await page.goto('https://demo.fingerprint.com/playground');
    console.log('✅ Navigated to fingerprint test');
    
    console.log('⏳ Keeping browser open briefly...');
    try {
        await page.waitForTimeout(10000);
    } catch (_) {
        console.log('⚠️  Browser closed early, continuing...');
    }

    await page.screenshot({ path: 'screenshot.png' });
    
    await context.close();
    console.log('✅ Test completed');
} catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Stack:', error.stack);
}