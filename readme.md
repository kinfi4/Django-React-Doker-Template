# Django React Docker template

Hi there! I know it's always quite complicated, connect backend and fronted so that it's easy to develop and deploy. That is for I decided to create this project.
There's nothing special in backend Django api, or frontend Reach app. The point of this project is to show you how to connect everything
together with Docker. And give a template of a simple app that you can fork from in order to develop your own application.   

There are two different configurations, both for develop and production stage. Develop stage uses postgres as a database for django app. Postgres
runs in separate container, so you dont have to install anything explicitly. But for prod version you gonna be needed to create and configure
database yourself, my personal recommendation is to use RDS from AWS.     

In order to run this project on your own, you need just to have a docker installed and fill the .env files with your configurations.   

Here s the list of commands to execute:
