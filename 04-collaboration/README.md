---
title: "Collaborating with others"
geometry: margin=1.5cm
---

# Collaborating with others

While Git can be used as a tool for managing personal projects, its strongest attribute is being able to allow many developers to collaborate and work on a single project simultaneously. These developers do not need an active connection to the remote repository to work together, making it incredibly powerful for group projects.

There are many ways to use Git for collaborative efforts. However, this guide will explain the fork and pull request workflow. This workflow may seem daunting at first, but given enough practice, this becomes intuition and will be a powerful tool in your development arsenal no matter where you go.

As with the previous chapters, there is some basic terminology required that will be used throughout this chapter.

## Terminology

Forking, branching, and pull requests are the cornerstone of the Git workflow that we will be describing.

### Forking

<!-- TODO Fix explanation -->

When you wish to contribute to a project, the first step is to create a local remote copy of the original repository you wish to contribute to.

The term "local remote copy" may seem confusing, but it is quite simple. This copy is local to your GitHub account, but it is still stored on GitHub. You are simply making a copy of the original repository available on your own personal GitHub account. These repositories that you fork are often owned by someone else, which means that it will be impossible for you to contribute to them unless they have provided explicit permission for you to do so.

### Branching

Branching represents the changes made to a project. As mentioned in earlier chapters, Git stores a history of the changes made to a project. This set of changes create a tree-like structure where you start with the "root" of the project and eventually move upwards as you create commits.

Similar to a tree, a branch can extend outwards from any point on the tree. This branch has its "root" starting from the point at which is extends out from. These secondary branches can have their own set of branches and so on.

Branching is incredibly powerful as it allows for different changes to happen to a single codebase without affecting the root. We will be exploring how branching can be used in a project.

![Branching](./res/branching.svg)

In the diagram above, notice that the blue (root) branch continues while secondary branches (purple and green) are created from various points on the root. These secondary branches can be bug fixes or new features that you wish to work on while the development of the core project continues. Branching allows you to work on these components without influencing the primary branch.

### Pull requests

While working on a project, you may wish to submit your code to the original repository for the owner to review and potentially, add to the original repository (Remember that you are still working on your own copy of the repository, not the original).

Pull requests are the way to go, allowing developers to submit their branches of changes to the original repository. These requests are then pulled down by the owner of the original repository and reviewed.

Pull requests are also referred to as merge requests as they are essentially a request to the owner of the original repository to merge your changes into the repository.

## Fork and pull request workflow

As this guide is written for students working in groups, it is advised that you are in a group if you wish to try this out (or at least have access to a repository that you do not have direct access to). However, we will first begin with providing a general overview of the steps required to use this workflow and then dive into an exercise that does require a group.

### General overview

<!--TODO How to get updates-->

1. When you first visit a repository on GitHub that you wish to contribute to, you will notice that in the top right corner of the repository page, there is a button labelled "Fork". Select this option and GitHub will begin creating a copy of this project into your own account.
2. Once the repository has been forked, you will be able to clone it with `git clone`.
3. In your terminal, you can choose to work on the project in two ways. Both of these approaches will be explained below.
    1. Creating a feature/bug fix branch
    2. Working on the `master` (default) branch
4. Regardless of the method chosen above, once you have completed your changes and wish to push these changes to the original repository, you will first push your commits from the staging area to your remote copy of the repository. Then, you will use GitHub's interface to create a "Pull request"

    When creating the pull request, you will have to select the `base` and `compare` branches.

    The `base` branch refers to a branch on the original repository. While there may be different branches, this guide will focus on the default `master` branch. The `base` branch is the target branch where you wish to merge your changes to.

    The `compare` branch refers to the branch that holds your changes. Depending on the method chosen, you will either select the `master` branch or the feature/bug fix branch created.
5. Filling in information like the title of the pull request and description of it allows the owner of the repository to understand what the changes proposed does.

After this, everything else is left up to the owner. They are free to review the changes proposed and comment on them. GitHub supports a discussion forum per pull request so that others can chime in about the changes and further improvements can be made before merging them into the original repository. GitHub's pull request feature is very powerful but this guide will not go into detail on every feature available. If you are interested to learn more, refer to this guide [here.](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
