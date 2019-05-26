# Facemash
A web-app created with React to vote for your favorite users. Screenshots below!!

**No longer maintained.**

# Quick liks
1. [Screenshots](#screenshots)
2. [Own the project](#own-the-project)

# Screenshots
![alt text](https://raw.githubusercontent.com/yTakkar/Facemash/master/Screenshots/Snap%202017-12-19%20at%2017.08.03.png)
![alt text](https://raw.githubusercontent.com/yTakkar/Facemash/master/Screenshots/Snap%202017-12-19%20at%2017.08.53.png)
![alt text](https://raw.githubusercontent.com/yTakkar/Facemash/master/Screenshots/Snap%202017-12-19%20at%2017.09.00.png)
![alt text](https://raw.githubusercontent.com/yTakkar/Facemash/master/Screenshots/Snap%202017-12-19%20at%2017.09.22.png)
![alt text](https://raw.githubusercontent.com/yTakkar/Facemash/master/Screenshots/Snap%202017-12-19%20at%2017.07.49.png)

UI is taken from [Instagam-clone](https://github.com/yTakkar/React-Instagram-Clone-2.0) I created!!

# Own the project
1. First install all dependencies:
    ```bash
    # with npm
    npm install
    
    # or with yarn
    yarn
    ```

2. Open PHPMyAdmin, create a DB & import `facemash.sql` file.
3. Create a `.env` file and insert the following code. Replace values with yours!!

    ```javascript
    PORT=YOUR_PORT
    MYSQL_HOST="host"
    MYSQL_USER="user"
    MYSQL_PASSWORD="password"
    MYSQL_DATABASE="db"
    MAIL="yourgmail@gmail.com"
    MAIL_PASSWORD="gmail-password"
    SESSION_SECRET_LETTER="anything-secret"
    ```

4. Start the server
    ```bash
    npm start
    ```

5. Now run the app
    ```javacript
    localhost:[PORT]     PORT = YOU DEFINED IN .ENV FILE. 4111 BY DEFAULT!!
    ```

6. Enjoy!!

# Contribute
Show your support by 🌟 the project!!

Feel free to contribute!!
