# Installing A Forge App On An Atlassian Site

Now that we have deployed our code, let's go ahead and install the application to an atlassian jira site.

`forge install`

## Installation Links

Another way to install an app is by generating an installation link. Go to your app in the developer console, and open the Distribution tab in the sidebar. A link can be used by others to install your application.

# Using Codespaces

You will need to configure your .bashrc files with your forge information. Example:

1. Run Command below
    
    `code ~/.bashrc # this opens up the file in your vscode for editing`

2. Add the following lines at the top of your .bashrc file replacing **email** and **apiToken** with appropriate values. Make sure to save file after.

    ```
    export FORGE_EMAIL="email" # replace
    export FORGE_API_TOKEN="apiToken" # replace
    ```

3. Stop/Delete your current terminal session and open up a new one so the new .bashrc changes will be read. 

4. Run `forge whoami` to confirm variables are being read


### **Forge Tunnel will not work properly in codespaces.You will have to deploy app after changes. Make sure if manifest file changes you go to instance app installation screen and update manually if needed.**


