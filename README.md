# Simple user management app using Nodejs &amp; Redis

## Steps followed for local setup:
 - npm init
 - start: node app (with app.js being the entry point)
 - npm install express body-parser redis method-override express-handlebars --save
 - Used [Bootswatch](https://bootswatch.com/) to generate css in the view
 - Grabbed fixed navbar from [Getbootstrap](https://getbootstrap.com/docs/5.0/examples/navbar-bottom/)_(ctrl+u to view source & copy nav tag)_

## Note to self:
- didn't use ES6 to avoid an error (solved by adding {"type": "module"} to package.json)
