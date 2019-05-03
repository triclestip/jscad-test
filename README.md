# jscad-starter
A simple, empty starter project for JSCAD. It auto-rebuilds STLs on every change.

# Usage
Using this repo as a base, you'll be able to quickly bootstrap your JSCAD projects. Please follow these steps, to get a working JSCAD project within minutes:
- create new repo in github named `new-repo` (change the name accordingly)
- clone this repo and change into your local copy of **this repo** you want to extract/inherit from. this will become the new-repo's `master` branch.
- do `git push https://github.com/bennyzen/new-repo.git +master:master`
- now clone your newly created repo to your local machine by doing: 
```
git clone https://github.com/bennyzen/new-repo
cd new-repo
npm i
npm run dev
```

For further reading, see https://stackoverflow.com/questions/9527999/how-do-i-create-a-new-github-repo-from-a-branch-in-an-existing-repo
