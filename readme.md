I used lumen for backend development

Backend setup:
1- through command promt go to cloned folder and run
composer install
2- create a database then open .env on the root folder, change the following variables to your server infromation
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=incloud
DB_USERNAME=root
DB_PASSWORD=

3- run the following code to install the database: php artisan migrate

4- run the following code to seed initial content: php artisan db:seed

5- run the following code at cloned server/public: php -S localhost:8001

thats it for the backend in case you want run different server or port please add the following step at the front end

6- open /public/incloud/src/index.js, change 
global.host = 'http://localhost:8001/api/v1/'; 
to your server and port

as there is no auth I seed one row at users table and store content at localstorage for this row.

for that i didnt use JWT and didnt pass Bearer tokens for the APIs

the CORS open by code, I know its not secured just did that to avoid create builds and easier for your setup

front end setup

1- run this code at cloned folder/public/incloud
npm install 
to install all required packages

2- run this code at cloned folder/public/incloud
npm start 
the browser will be opened directly to my application