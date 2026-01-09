const { Renv } = require('../../dist');
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const TOKEN = process.env.TOKEN;
console.log(`Using TOKEN: ${TOKEN}`);
console.log(process.env);

(async () => {
    const client = new Renv(TOKEN, {
        isProduct: true,
    });
    await client.load("development");
})();