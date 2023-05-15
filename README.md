# Audio Synthesis Frontend Development

Welcome to the frontend development repository for the Audio Synthesis interface! This repository is dedicated to building and maintaining the user interface for our audio synthesis project, where we incorporate emotions into monotone audios.

## Getting Started


### Prerequisites
1. Make sure you have Node.js installed on your system. You can download it from the official Node.js website (https://nodejs.org) and follow the installation instructions.
2. Typscript is also required. You can install it by running the following command in your terminal or command prompt:

        ```npm install -g typescript```


3. Open your terminal or command prompt and run the following command to install Vite globally:

        ```npm install -g create-vite```
### Developing the frontend locally

1. Clone this repository to your local machine using the following command:

        ```git clone https://github.com/EmodioAI/frontend-codebase.git```

2. Navigate to the root directory of the project and run the following command to install all the dependencies:

        ```npm install```

3. Run the following command to start the development server:

        ```npm run dev```

4. Open your browser and navigate to address provided to view the application.

## Notes

If you're a contributer to this project, please read these.

### Convensions are very important

- **Never commit your changes to the `main` branch**.
  - Create a new branch for any specific task assigned to you.
  - When creating pull requests (PR), create them in order for your feature branches to be merged with the  **`main`**.
 
- **Watch the directory structure and contribute your code accordingly**.
  - Smaller components common to multiple pages should have their directory placed under `./src/general_components/`. 
  - All views should have their pages placed under `./src/pages/`. 
  - Each component's directory should contain the following files:
    - `<component_name>.tsx` : this is where the react element is built.
    - `<component_name>.prop.ts` : all interfaces relating to the component should be placed here and imported when necessary.
    - `<component_name>.test.tsx` : unit tests for the various components should be written here.
    - `<component_name>.module.css` : using JSS (react-jss), all the styles should be grouped into this file and imported inot the actual react element file.
    - `README.md` : Gives a quick detail on how the component should be used; the props it takes, for example.



## Creating a production build

- Pull the latest changes and install all dependencies as instructed above.
- Open the `package.json` file. Under the `build` section, identify the `icon` option. (Look for `"icon": "resources/icons/icon.icns"`)
  - On Windows: Change the icon file format to the appropriate one - change `icon.icns` to `icon.ico`.
  - On Mac: Leave the extension as `.icns`.
- run `npm run electron:build` to create a production build of the app.
- In the created `dist/` directory, look for a sub-directory with a name relating to your system. "mac-arm64" or "win-x64" for example. The built `.exe` or `.app` file should be in this sub-directory with the name `school-vue`.

### Making changes to the repository

- switch to the main branch using `git checkout main`.
- pull the most current state of the main branch by running `git pull origin main`.
- create and switch to a new **feature branch** from the **main** branch using `git checkout -b <your_branch_name>`.
  > Make sure your branch name is sensible enough and describes what exactly your change is about. In order to keep track of the people working on various feature branches, we advice this convension 
- make your necessary changes
- when done, before commit, make sure you're on the right branch by running `git status`.
- be sure that your changes don't cause breakages in any other part of the code that was initially there.
- run `npm test` to confirm. make sure all tests pass.
- while at the base of the project directory, run `git add .` and `git commit -m "<your_commit_message>"` in order to commit the changes you've made.
- switch back to the main branch and pull the current state of it by running
  - `git checkout main`
  - `git pull origin main`
- switch back to your feature branch and rebase it onto the main branch
  - `git checkout <your_branch_name>`
  - `git rebase main`
  - fix all merge conflicts and re-commit files if nececssary.
- Finally, push your work to GitHub using
  - `git push origin <your_branch_name>` : this will create a new feature branch on the remote repository to track your changes.
- Log onto github.com and create a PR of your branch onto the **main** and await review and merging.
  > Do NOT try to merge your own PRs onto the main or main.
  > Delete your feature branches that are merged.


##License

This project is licensed under the MIT License, which grants permissions to use, modify, and distribute the codebase. Please review the license file for more details.