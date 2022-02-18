# nft-image-generator-web-app

1. enter the project
  ```
  cd nft-image-generator-web-app
  ```
2. Install requirements
  ```
    npm install
  ```
3. Start project 
  ```
  pm2 start bin/www (if you have pm2)
  
  or
  
  npm start
  
  or
  
  node bin/www
  ```
4. Go to localhost:3000 and press generate button :)


If you want to make more combinations you can increase the limits on enums by adding new svg files.
I will soon make a development so that private nfts can be created by taking data from outside.

If you get this error 'something when wrong installing sharp' you can solve it like this 
  ```
  npm install --ignore-scripts=false --verbose sharp
   ```

note: Inspired by a cli application, turned into a web application

Demo : https://warm-mesa-43992.herokuapp.com/

<img width="1791" alt="Ekran Resmi 2022-02-18 13 58 34" src="https://user-images.githubusercontent.com/63417988/154670145-34bb38e4-6f64-4c89-b75b-ee1c0e275522.png">
