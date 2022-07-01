# Contribute to CSSUI

Take a moment to read this document to make the process simple and consistent with the one used
from the rest of the team.

## Create an issue

The [issue tracker](https://github.com/italia/bootstrap-italia/issues) is the right place to post bug reports,
requests for new features and creation of pull requests, in compliance with these conditions:

- please ** do not ** use the issue tracker for personal support requests
- respect the indications you find below for the use of labels, reporting bugs, and creating pull requests

## Processing an issue

To take charge of an issue, you need to fork the repository on your account, according to the normal GitHub flow.

The flow to follow for the development is simplified compared to a standard git-flow, to allow a greater speed of development, and the creation of a readable history. 

Anything in the main (master) branch is defined as stable and potentially deployable.

To work on something new, create a new branch from the master and assign a descriptive name:
1. in case of a new feature `feat/#[issue_number]-name_of_feature` (ex: feat/#21-new-button-component)
2. in case of fix `fix/#[issue_number]-bug_title` (ex: fix / focus_textarea_252)


At the end of the processing, to propose your code for approval, simply open a Pull Request ( [here](https://help.github.com/articles/creating-a-pull-request-from-a -fork /) the instructions in case of fork).

The criteria to be followed when working on features and issues are as follows:
- Use the standard [Conventional Commit (https://www.conventionalcommits.org/en/v1.0.0/) to write readable and standardized commit messages
- In case of several commits on a branch that do not add information to the feature or fix in question (for example fix: revert last work or chore: typo in documentation) it is better to squash the various commits (or ask the merger to do it) the PR in question)
- Try to align with master before requesting a review, using rebase or merge (https://amerlin.keantex.com/git-merge-vs-rebase/) and resolving any conflicts.

## Issue and label

The CSSUI repository uses some labels to identify issues:
- `documentation`, improvements or additions to the documentation
- `bug`, something isn't working on stable branch `main`
- `duplicate`, this issue or pull request already exists
- `enhancement`, new feature or request
- `help wanted`, extra attention is needed
- `invalid`, this doesn't seem right
- `question`, further information is needed
- `status: in progress`, cooking something
- `status: merged`, identify issues merged in `dev` branch
- `status: released`, identify issues released in `main` branch

## License

By contributing to the code or documentation you agree to release your code under the open source license already present in the repository.