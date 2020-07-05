# Git Log

Now that you know how to do the basics in git and started working on the repo, a few commits in and you might ask yourslef, how do we visualize these commits and changes we have made in the repository?  

That is where this chapter, and the subsequent, `Git Diffs` come in. These commands give you a way to visualize the commits and changes made in your git respository.  

**TL|DR:** The command `git log` and its corresponding optional flags lets you look at history of commits and how they link up in your respository.  

At the end of the chapter there will be links to additional resources, as well as more visual GUI tools you can use to look at the log of the respository, but I still suggest reading and understanding how `git log` works as these tools still rely on the basic `git log` to generate their graphs. Having an understanding of this command gives you an intuition for how these tools work in general. Additionally, as the command comes with Git, there is no additional setup required to start using `git log`. 

Note:
This chapter serves to show you and explain the common use cases for the command. For a more detailed explaination, look at the addtional resources or the documentation of the command.

## Project set up so-far

Let's say the project you are working on is a full-stack web application, with a frontend and backend.  
And you have decided to split the work to frontend and backend work, with respective features branches being worked on.

It may look something like this:  
```
Github
origin/master, master

Teammate A
frontend/landing

Teammate B
backend/start-server
```

## Looking at the small picture

**Note: Assume you are teammate A**

Let's say at this point you have added some code and commits to the project and want to see what commits you had done.  
This could be because, you wanted to see where you left off yesterday or how features have or have not been done. (The later reason is when you are working on a larger feature)

### Basic git log

Well to look at all the commits made on your current branch you can do:
```bash
git log
```
![Basic git log of local branch](res/small_picture_1.png)

From this screenshot you can see that although we can see all the commits linked to our current branch, there is a bit too much information at once.  
For example information like when the commit was made or who made it is not really important when trying to look at the bigger picture.  
This is also not practical when looking at projects with 10s or 100s of commits, as we would be lost in the information

### Flag oneline

Luckily there are special flags we can use to format the output.  
If we add the flag, `--oneline`, git will shorten each commit to oneline, only preserving the important information.  
Looking at the man page for this command:  
```bash
Documentation:
--oneline
This is a shorthand for "--pretty=oneline --abbrev-commit" used together.
--abbrev-commit
Instead of showing the full 40-byte hexadecimal commit object name, show only a partial prefix. Non default number of digits can be specified with "--abbrev=<n>" (which also modifies diff output, if it is displayed).
```
Thus when running the command.
```bash
git log --oneline
```
![Git log with only oneline](res/small_picture_2.png)

And boom, this was what we wanted at the start. Now we can see that we have added the landing page and also changed the extension of the landing page.  

But there is something weird here, we can also see that the `origin/master` commit together with the commits of our branch. This is because as we know, branches have to start off(be based off) somewhere. As such, we can make a pretty good guess that this `frontend/landing` was made off the master branch.  

Luckily, we don't have to guess as there is a flag which will show us the relationship between these commits.  

### Flag graph
To make git log show the relationships between commits, we just have to add the `--graph` flag. This flag shows a 'graph' of the commits, which for us means the relationship the commits have.  
Combining this with `--oneline` flag we showed above, makes for a very clean and concise git log.  

(I will leave it to the reader to try out what `--graph` flag does on its own)

```bash
git log --oneline --graph
```
![Git log with oneline and graph](res/small_picture_3.png)

## Looking at the big picture
Now that you know how to look at commits tagged to your branch, you might also want to see how the entire repository might look like.  
Luckily we have a flag to look at the log of the entire repository.  

### Flag all
Using the `--all` flag, this will show the git log, including all the commits from every branch you might have in the respository.  
We will also be combining this flag with all previous flags to get the best overview of a project. (In my opnion)
```bash
git log --oneline --graph --all
```
![Git log with oneline graph and all](res/big_picture_1.png)

Now we can see that our frontend landing page feature has already been merged down to master. We can also see that after git fetch(To fetch any changes from github), our teammate B had already made more commits on his feature and our local `backend/start-server` branch is behind.  

## Wrapping up
To end off, the `git log` command actually has a lot more features and flags which are a bit more nuanced and situationally. What was shown here are the most common and applicable features and flags which I hope will be usefully to you.

As mentioned above, below are additional resources:  
[More features of git log](https://www.atlassian.com/git/tutorials/git-log)
[git log documentation](https://git-scm.com/docs/git-log)

Additional GUI applications that can help you visualise the git log:  
[VSCode extension (Git Graph)](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
![Git graph looks like](res/git_graph_vscode.png)

On Github:
Actually there is a feature on github that also allows you to visualise the graph of your respository.  
It is under `Insights` &rarr; `Network` in your respective github respository.  
![Github graph](res/github_graph.png)