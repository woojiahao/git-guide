# Merge conflicts

Merge conflicts occur when the same line of a file is modified by two sources and these sources are attempting to merge with one another. They often occur when the line change is made before the latest changes have been pulled.

For example, member A changes the first line of `names.txt` to his/her own name and this change is merged with the original repository. At the same time, member B also changes the first line of `names.txt` to his/her own name but this time, this change is not merged with the original repository but is still committed.

When member B tries to pull from `upstream`, he/she will encounter a merge conflict informing him/her that the same line in the file has been modified in two sources.

While Git is powerful, it does not know whose changes to keep and whose to throw away, so it is up to you to inform Git which are the changes that should stay and which should go.

Let us first simulate a merge conflict.

For this practical, three members will be required at a time: the owner of the repository and two other members. Feel free to rotate between the members so that everyone gets a chance to experience a merge conflict and try fixing it.

1. Member A will modify the first line of `names.txt` and change it to any text that they want. Once they are done, make a pull request and the owner will merge this change.
2. Member B will also make a modification (different from member A) to the frist line and commit it. But this time, do not make a pull request
3. Member B will use `git pull` to get the latest changes from the original repository. A merge conflict will occur.
4. To view the status of the merge conflict, use `git status`. It will provide information about the files in question.

It is up to member B to fix this merge conflict on their end now.

Now to fix the merge conflict, open the file in question (`names.txt`) and you will notice that at the top of the file (or whereever the conflict happened), there will be an odd notation:

```

```

The top section represents the changes from the original repository (aka member A's changes). The bottom section represents the changes by member B. To resolve the merge conflict, select the content between the dividers that you wish the merge. For instance, member B might want to merge his/her changes instead of member A's, so delete all other contents except the ones between `<<<<<<< HEAD` and `=======`.

Once done, the changes have been saved, add and commit the file again and this time, `git status` should show that the merge conflict has been resolved. Generally, the commit after fixing a merge conflict should indicate that the file was modified due to a merge conflict.

Rotate this exercise between your members and try modifying various lines of code at once and resolving the merge conflicts that arise. It is hard to simulate all environments where you may receive a merge conflict so it is crucial that everyone understands how merge conflicts can be resolved so that future even if the file contents differ.

For the owner of the original repository, can you figure out how you can receive a merge conflict even if you own the project? Think about this for a while and see if you can simulate this as well.

To cause a merge conflict on your own repository, you will be acting as member B in the scenario above and instead of pulling changes from `upstrea`, you will pull them from `origin`.
