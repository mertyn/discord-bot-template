# discord-bot-workshop
Example code from my discord bot workshop

## how to run
1. clone the repository
2. download all dependencies
    ```bash
    npm install
    ```
3. create `config.json` in root, add `token` for your bot account
4. start the bot for development (requires [nodemon](https://www.npmjs.com/package/nodemon))
    ```bash
    npm run dev
    ```

## registering commands
- set `appId` in `config.json`
- registering commands for a server
    ```bash
    npm run registerCommands <guildID>
    ```
- unregistering commands
    ```bash
    npm run unregisterCommands <guildID>
    ```