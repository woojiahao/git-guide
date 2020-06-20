# Setup

To being, you will first have installed Git on your machine. The instructions to do so can be found [here.](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Once you have installed Git, open up your terminal or Git Bash (if you are on Windows) and type the following command to verify that Git has been installed. You should see that an appropriate number will be shown. As of the writing of this guide, the latest version of Git is `2.27.0`. Note that from this point forward, the terminal/Git Bash/command prompt will all be referred to as the terminal for ease of reference.

```bash
$ git --version
```

You will also be using GitHub to manage your projects. More details will be explained about this in the following chapters. To get started with GitHub, create a new account [here.](https://github.com/) GitHub recently made private repositories with unlimited collaborators free.

Once both tools have been setup, you will have to configure Git on your machine. Within the terminal, type the following commands. The first command configures the names that each commit made will be assigned under and the second command configures the email that these commits will be made under. The email used should correspond with the email that you have used to create your GitHub account.

```bash
git config --global user.name "<Your name>"
git config --global user.email "<Your email used when setting up GitHub>"
```

This is all you will need to setup your environment. Hooray!
