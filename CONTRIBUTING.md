# ⚡ Contributing guidelines

We're glad you want to contribute to the **DEVSTRONS' Contest Discord bot** project!\
Below, we have some basic guidelines when contributing to our Discord bot project.

## ⚒ Getting started

1. Fork this project
2. Clone the forked project with Git in your preferred directory

```bash
$ git clone https://github.com/<your-username>/contest-bot.git
```

3. After making your changes

```bash
$ git add .
```

4. Make a commit according to our [**Commit guidelines**](#📚-commit-guidelines)

You're done! **You have done your first pull request in our project!** 🚀
Now, you just have to wait until maintainers review your pull request.

## 📚 Commit guidelines

### 🛠️ Project Setup and Development process

- By forking, clone the repository in your local system.
- Update the **node version (v16.x.x)** & **Discord.js (v13.1.0)**.
- Make an app in the [**Discord Developer Portal**](https://discord.com/developers/applications) to hold the Discord bot.
- Open the folder in your IDE, and make a file named `.env` to setup the environment and carry the credentials of the Discord's developer portal.
- Click on the `New Application` button for naming your Discord bot and copy-paste the following content in `.env`:

```
    TOKEN=3ad852c30cda4bdfd2e942cfe5wc9d90b81710851e80cc5b3cfc5avac1965d1f
```

- Click on `OAuth2`, select `bot` and `appliations.commands` under `SCOPES`. Under `BOT PERMISSION`, check every box under `Text Permission`. Copy the link generated to call that bot in your server.
- From left section, click on `Bot`-> `Add Bot` -> `Yes, do it`.
- Hop to [this link](https://clist.by/) and sign up -> <your-username> at top -> select `API` -> `show my api-key` -> copy your unique API ID as `ApiKey username:fc5505cf4a5c0ec16854972bf25387231cv35bm1` -> Paste it in `.env` as:

```
   CLIST_API_KEY=ApiKey username:fc5505cf4a5c0ec16854972bf25387231cv35bm1
```

- Copy and paste the server ID in `.env` file as:

```
    HOME_GUILD_ID=885165658936049745
```

- In the [`bot.js`](https://github.com/devstrons/contest-bot/blob/main/bot.js) file, comment [line 23](https://github.com/devstrons/contest-bot/blob/main/bot.js#L23) and uncomment [line 24](https://github.com/devstrons/contest-bot/blob/main/bot.js#L24).

**Important**

- Separate your changes with commits.
- This also includes a list of examples of how we should use commit messages.

1. Commit 1: fix: vulnerability in v0.3.2 version
2. Commit 2: chore: repair GitHub workflow not working
3. Commit 3: feat: add proper code template
4. Commit 4: docs: improve the documentation on setting up Discord.js

- **Do not squash all commits into one unless requested by administrators.**

```bash
git add README.md
git commit -m "feat: Improve the `README.md` file"
```

- If your changes do multiple stuff (e.g.: feat and fix), use

```bash
git add README.md
git commit -m "[feat/fix]: Improve the `README.md` file and..." -m "fix some typos and errors.";
```

Common prefixes:

- fix: A bug fix
- feat: A new feature
- docs: Documentation changes
- test: Correct existing tests or add new ones

## ⚙ Fixing a reported issue

Depending on what the issue is about, you can make a pull request to fix a reported issue.\
You must follow the same steps above, but first, please make sure your changes work properly.

## 👀 Are you experiencing a bug?

If you are experiencing a bug with this bot, make sure you report it in our [issue tracker](https://github.com/devstrons/contest-bot/issues) or join our [Discord server](https://discord.gg/SNNTC7ZKGz) and tell our staff about it.

Make sure you

- Provide as much as possible information about the bug.
- Why do you think it's a bug? Please explain.
- What are you experiencing and why?
- Before reporting, make sure it's not been reported yet, mostly if it's a common issue.
- Try to be as clear in your answers and information, so the developers can fix it easier.

**Thank you for reading our contribution guidelines!** 🎉
