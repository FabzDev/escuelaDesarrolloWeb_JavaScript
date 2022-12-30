import fetch from "node-fetch";
/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)
       
    2. Make a request to: https://www.craigslist.org/about/
       and print out the resulting HTML (text) String, using Fetch
    3. Compare what you see in Node to visiting the actual page in
       your Browser - what matches up?
*/

const craigUrl = "https://www.craigslist.org/about/";

const fetchCraiglist = async () => {
	const response = await fetch(craigUrl);
	const html = await response.text();
	console.log(html);
};

fetchCraiglist();
