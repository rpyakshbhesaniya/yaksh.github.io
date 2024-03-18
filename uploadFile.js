import ghpages from 'gh-pages';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//const baseDir = path.resolve(__dirname, 'src', 'utils');
const htmlContent = "generateHTML()";
const fileName = `hello.html`;
fs.writeFileSync(fileName, htmlContent);

await ghpages.publish(__dirname, { branch: 'main', repo: 'https://github.com/rpyakshbhesaniya/yaksh.github.io.git' }, (err) => {
    if (err) {
        console.error('Error deploying to GitHub Pages:', err);
    } else {
        const pageURL = `https://rpyakshbhesaniya.github.io/yaksh.github.io/hello.html`;
        console.log('Deployment to GitHub Pages successful!');
        console.log('Page URL:', pageURL);
        //page.finalPageContentUrl = pageURL;
    }
});