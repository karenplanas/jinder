# Jinder 

Jinder is a full stack application that makes the process of job searching more fun and dynamic through a simple and friendly design.

A job seeker user will be able to list available jobs postings, swipe right to add them to favourites list, or left to discard them; From the favourite list the job seeker can apply to the jobs, and or message the employers through a chat. Job seekers can manage their professional profile at any time.
An employer user will be able to list active job seekers, contact the job seekers through chat, manage jobs postings and the company profile. 


# Screenshots
## Login and job seeker home and profile screens
![LoginAndJobSeekerScreens](https://user-images.githubusercontent.com/61513120/162459543-1ba68e28-5c71-49c3-9c9f-80943667c943.png)

## Job seeker favourites and messages screens
![FavsAndMessages ](https://user-images.githubusercontent.com/61513120/162460049-9eedc2c6-830a-40da-a60a-5aa61dcadf83.png)

## Employer home, profile and jobs management screens
![EmployerScreens](https://user-images.githubusercontent.com/61513120/162460301-a6245013-77fc-4329-873f-6f0cf6f44e5f.png)

# Getting Started
1. Clone this repo.  
  ```
  git clone https://github.com/karenplanas/jinder.git
  ```
  
2. Install dependencies in root, server and client folder.
```
npm install
```

3. Create .env file in client folder and set [Firebase](https://firebase.google.com/docs) variables.
```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_AUTH_ENABLED=
BASE_API_URL=
```

4. DB requirements: You need to have a MongoDB server running, either [locally](https://www.mongodb.com/docs/guides/server/install/), or on the [cloud](https://www.mongodb.com/cloud/atlas), to connect to.

5. Create .env file in the server folder and set the [Mongodb URI](https://www.mongodb.com/docs/manual/reference/connection-string/) and a [Secret Key](https://randomkeygen.com/) of your choice. 
```
MONGO_URI=
SECRET_KEY=
```

6. Start the server. From the server folder, run
```
npm start
```
  
7. Start the client. From the client folder, run
```
npm start
```

# Tech Stack 
* [Figma](https://www.figma.com/)  
* [Notion](https://www.notion.so/)  
* [React](https://reactjs.org/)  
* [React Hook Form](https://react-hook-form.com/)  
* [TypeScript](https://www.typescriptlang.org/)
* [Firebase](https://firebase.google.com/)  
* [JWT](https://jwt.io/)  
* [Express](https://expressjs.com/)  
* [MongoDB](https://www.mongodb.com/)  
* [Mongoose](https://mongoosejs.com/)  

# Contributors
* Alisha Jungah - [GitHub](https://github.com/alisha0815) - [Linkedin](https://www.linkedin.com/in/alisha-jungah-greve-b2abba211/)
* Sergi Hernandez - [GitHub](https://github.com/Sergihf10) - [Linkedin](https://www.linkedin.com/in/sergihf10/)
* Martin West - [GitHub](https://github.com/martinwest1993) - [Linkedin](https://www.linkedin.com/in/martinwest1993/)  
* Karen Planas - [Github](https://github.com/karenplanas) - [Linkedin](https://www.linkedin.com/in/karen-planas)
