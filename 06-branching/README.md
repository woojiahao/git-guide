# Branching (WIP)

### Branching

Branching represents the changes made to a project. As mentioned in earlier chapters, Git stores a history of the changes made to a project. This set of changes create a tree-like structure where you start with the "root" of the project and eventually move upwards as you create commits.

Similar to a tree, a branch can extend outwards from any point on the tree. This branch has its "root" starting from the point at which is extends out from. These secondary branches can have their own set of branches and so on.

Branching is incredibly powerful as it allows for different changes to happen to a single codebase without affecting the root. We will be exploring how branching can be used in a project.

![Branching](./res/branching.svg)

In the diagram above, notice that the blue (root) branch continues while secondary branches (purple and green) are created from various points on the root. These secondary branches can be bug fixes or new features that you wish to work on while the development of the core project continues. Branching allows you to work on these components without influencing the primary branch.
