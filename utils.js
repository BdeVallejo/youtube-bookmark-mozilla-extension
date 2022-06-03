export async function getCurrentTab() {
    let queryOptions= {currentWindow: true, active: true};
    let [tab] = await browser.tabs.query(queryOptions);
    console.log("Tab url is" + tab.url);
    return tab;
};