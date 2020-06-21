---
title: "Collaborating with others"
geometry: margin=1.5cm
---

# Collaborating with others

While Git can be used as a tool for managing personal projects, its strongest attribute is being able to allow many developers to collaborate and work on a single project simultaneously. These developers do not need an active connection to the remote repository to work together, making it incredibly powerful for group projects.

There are many ways to use Git for collaborative efforts. However, this guide will explain the GitHub fork and pull request method commonly used on several Git hosting platforms (not just limited to GitHub).

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

### Pull requests

While working on a project, you may wish to submit your code to the original repository for the owner to review and potentially, add to the original repository (Remember that you are still working on your own copy of the repository, not the original).

Pull requests are the way to go, allowing developers to submit their branches of changes to the original repository. These requests are then pulled down by the owner of the original repository and reviewed.
