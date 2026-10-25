# Introductory Git Commands

## Setup
- `git config --global user.name "Your Name"`: sets the name on your commits.
- `git config --global user.email "you@example.com"`: sets the email on your commits.
- `git clone <url>`: copies a GitHub repo onto your computer.
- `git init`: turns the current folder into a new git repo.

## Checking the state
- `git status`: shows which files changed and what's staged.
- `git log --oneline`: lists past commits, one line each.
- `git diff`: shows exactly what you changed but haven't staged.
- `git branch`: lists your local branches and marks the current one.

## Saving your work
- `git add <file>`: stages a file to go into the next commit.
- `git add .`: stages every changed file in the folder.
- `git commit -m "message"`: saves the staged changes as a snapshot with a message.

## Sharing with GitHub
- `git push`: uploads your commits to GitHub.
- `git push -u origin <branch>`: pushes a new branch for the first time and links it to GitHub.
- `git pull`: downloads new commits from GitHub and merges them into your branch.
- `git fetch`: downloads new commits from GitHub without changing your files.

## Branching
- `git switch <branch>`: moves you onto an existing branch.
- `git switch -c <name>`: creates a new branch and moves onto it.
- `git branch -d <branch>`: deletes a branch you've finished with.

## Combining and updating
- `git merge <branch>`: brings another branch's commits into your current branch.
- `git pull --rebase origin main`: updates your branch by replaying your commits on top of the latest `main`.
- `git rebase --continue`: carries on a rebase after you've fixed a conflict.
- `git rebase --abort`: cancels a rebase and puts everything back as it was.
- `git push --force-with-lease`: safely force-pushes after a rebase, failing if someone else pushed.

## Undoing mistakes
- `git restore <file>`: throws away your unsaved changes to a file.
- `git restore --staged <file>`: unstages a file but keeps your edits.
- `git revert <commit>`: makes a new commit that undoes an earlier one.
