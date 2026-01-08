const { Renv } = require('../../dist');
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const TOKEN = process.env.TOKEN;
console.log(`Using TOKEN: ${TOKEN}`);

(async () => {
    const client = new Renv(TOKEN, true);
    await client.load("development");
})();