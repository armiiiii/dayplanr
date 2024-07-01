FROM python:3.11-alpine

RUN apk update && apk upgrade

RUN pip3 install django djangorestframework

COPY . /dayplanr
WORKDIR /dayplanr/api

CMD ["python3", "manage.py", "runserver"]
