# Django React Docker template

Hi there! I know it's always quite complicated, connect backend and fronted so that it's easy to develop and deploy. That is for I decided to create this project.
There's nothing special in backend Django api, or frontend Reach app. The point of this project is to show you how to connect everything
together with Docker. And give a template of a simple app that you can fork from in order to develop your own application.   

There are two different configurations, both for develop and production stage. Develop stage uses postgres as a database for django app. Postgres
runs in separate container, so you dont have to install anything explicitly. But for prod version you gonna be needed to create and configure
database yourself, my personal recommendation is to use RDS from AWS.     

In order to run this project on your own, you need just to have a docker installed and fill the .env files with your configurations.   

-----------------------------------------------------------

### Development
*Here s the list of commands for startup of development version*:
        
        git clone https://github.com/kinfi4/Django-React-Doker-Template.git
        cd Django-React-Doker-Template/project
        
        [ set your env variables in the project/backend/.env/.env.dev file ]
    
        docker-compose -f docker-compose.dev.yml up --build
        
        [ after that you still need to make migrations for database and create a django-super-user ]
    
        docker exec -it <BACKEND_CONTAINER_ID> bash
        python manage.py migrate
        python manage.py createsuperuser

And that is it! Your app is ready to development!   
PS: in order to get BACKEND_CONTAINER_ID type: "docker ps" and find container id for the backend.  

---------------------------------------------------------

### Production
*Here s the list of commands for startup of production version*:

        git clone https://github.com/kinfi4/Django-React-Doker-Template.git
        cd Django-React-Doker-Template/project
        
        [ set your env variables in the project/backend/.env/.env.prod file ]

        [ change BASE_URL in the frontend/src/config.js to the host and port your backend is going to run on ]
            [ for local run, change BASE_URL to http://127.0.0.1 ]

        [ To simplify the template, I used simple SqlLite for production database engine ]
            [ check backend/config/settings.py to specify production database engine ]

        docker-compose -f docker-compose.prod.yml up --build
        
        [ after that you still need to make migrations for database and create a django-super-user ]
    
        docker exec -it <BACKEND_CONTAINER_ID> bash
        python manage.py migrate
        python manage.py createsuperuser

---------------------------------------------------------

That is it! Quite simple, isn't it?  
Feel free to use my template, as you wish. In case you have any suggestions or questions, 
you can contact me at **@kinfi4** in Telegram, or **ilyamakarov223@gmail.com**.  

If you found this template useful, I would kindly ask you to put "star" ^^

@kinfi4