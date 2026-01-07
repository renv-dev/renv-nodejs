# Renv Client
This is [Renv](https://renv-web.vercel.app)'s client project.

## How to use
```bash
npm install @renv/node
```
```typescript
import { Renv } from "@renv/node"
const client = new Renv("your_renv_token_here")
await client.load("branch_name")

client.get("API_TOKEN") // -> AAABBBCCC...
```