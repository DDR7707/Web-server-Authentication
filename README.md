# Web-server-Authentication

Here we are authenticating our database where we save our users password and emails so that others cant access them incase of data leakage.

This comes with a total of 6 levels of security levels.

1.Password saved in plain text.    (app1.js)

2.Password encrypted with AES level encryption.AES keys stored in other files (.env) so that if our app.js file exposed to others..they cant acess the passwords.  (app2.js)

3.Using md5 hashing algorithems to secure password in our database.  (app3.js)

4.Using hashing along with the salting rounds to extend the level of security for passwords.  (app4.js)

5.On the way

6.On the way
