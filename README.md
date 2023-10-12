# Type- typing website with profile page with a Django backend
I am inspired to build this web application by webiste called [Monkeytype](https://monkeytype.com/)

# Distinctiveness 
This project is distinct from any of other projects I build for this course (Search, Wiki, Commerce, Email and Network). Because it it is a typing website, nothing in the above project has a relation with typing website. It highly utlitize Javascript to control the text and cursor change as the user type and also resize their window.

It it has a logic for the typing game, which is written in JavaScript and there is alot of things undergoing in the background. Like rendering text making the the text in focus and foucout mode, time counting, word counting, displaying some portion of the website and having a profile page for the user.

It also has a sound effect when the user press a key on a keyboard and its valid key.

# Complexity
This project is Complex because there are many thing to consider when developing such type of web application

### Different typing game features
One of the thing that makes this website complex is that there are two features in typing website which have quite different apperance and implementation.

    1. Time
    This features of my website test user's Speed, Accuracy, Raw Speed, and others based on the given time interval. In this type of test it contains **15 Sec**, **30 Sec**, **60 Sec**, **120 Sec** which a user can choose from. When the user start typing a timer will be displayed to the user continuing down to zero, when the time gets to zero the game will stop automatically. 

    In this scenario more words will be added if user start typing out all the available words. 

    1. Words
    This feature also test user's Speed, Accuracy, Raw Speed and other not based on the given time interval but based on the number of words the user selected to type, which are **10 Words**, **25 Words**, **50 Words**, **100 Words**, So the game will end when the user finish typing the words that he/she selected. 
    
    In this case the instead of displaying a timer only the info area will display wordstyped/total words and a timer which countes up starting from 00:00 which is different from the first one. 

    Words will not be add to the typing area, since this test depend on the number of words the user types in.

### Checking correct inccorect, extra and passed words
In both case the textplace will be change as the user type the words out.
- Words that are typed out will be removed from that area and  
  new words (if words left to be displayed in Words mode ) will pop up from the bottom. 

- Correct words will have a color of white and red for 
  incorrect  and extra one's. Also words which are not correct will be have a red underline to show to the user that the word is incorrectly typed. 


### Checking and resizing the cursor and textarea
The main thing to consider is resizing the window, when user 
resizes their window resizing the text field is imporant and that is done. The thing that's important morethan that is displaying the current word in the visible part of the textplace since the texplace will only display three lines of words at any given time the rest will be hidden untill the user types out some words, so in this case mainly when the user resize down the window the current word could enter into the hidden part of the textfield, also we have to consider the location of the cursor as we resizing.

This is done by change the display properties of element to none `element.style.display = 'none';` for words that are typed out by the user when resizing the window size and the cursor location in the window will be at the same location as the current word the user is typing even when resizing the window or when the window is scrollable in the Y direction, This implementation is the one which took a lot of effort, which at last become successful.

## Profile page
This project is not only a typing page with two features of typing game, it also gives a comprehensive summary of performance of the user if they signed in

This page provide the user with information such as:
  - amount of time spent typing
  - number of test completed 
  - top result in each types of the game. 
  - table for the latest 30 result the user scored 

# Result Display and Error checking
  ## Result Display
  After the user finishes typing, their result will be displayed to them without reloading the page by disabling and enabling some part of the document when displaying the result of the user.
  This page includes:
    - Words per Minute 
    - Accuracy
    - Raw Speed 
    - Characters: Correct/ Incorrect/ Extra/ Passed  words
    - Test Type
    - Time taken

  ## Error checking 
  Before displaying the result we will check for some error: Accuracy Error, Invalid Test
  
  If their is an error The user will see an error display on he **Test Type** area and their result will not be send to the backend.

  otherwise their result will be send to the backend through fetch without new  page.


# What is in each file
When you open this file you will find
    type folder which is create when the django project is started, which      
   ```
     ...
      __init__.py
      asgi.py
      settings.py
      urls.py
      wsgi.py
   ``` 
    writing/ folder which is an django app created for this project. it includes
        ...
    ````/static/writing/
                - favion.png
                - script.js
                - styles.css
                - typing.wav 
        /templates/writing/
                - index.html
                - layout.html
                - login.html
                - profile.html

        __init__.py
        admin.py
        apps.py
        helpers.py
        models.py
        urls.py
        views.py
```
        In the static/writing folder i have the `script.js` file which contains the javascript file.

        `typing.wav` for the sound effect.
        `styles.css`  style of the pages
        and favion.png 
        

        In the templates/writing/ we have `index.html` in which we render the words to be written and result of the user
        `layout.html` layout of the page
        `login.html` this page works as a login and registration page
        `profile.html` this is for profile page 


        In `helpers.py` we have two function which i use in `views.py`  to make the `views.py` cleaner

        In `models.py` we have three models, one which store user data and two which store the test score for the time and words features.

        In `urls.py` we have a urls which led to views.py
        In `views.py` we have a login, logout, register, index, account, save_time, and save_words route to make getting, saving and receiving data.


    `manage.py`
    `requirements.txt` - for requirements to run this page
    `README.md` - README is the one you are reading right now, nowwwwwwwwwwww
    
## how to run the application 

To run it on your computer you have clone this project from github and download django to your computer and open it on virtual enviroment then after activating the virtual environment make sure your directory is in the same directory of manage.py after that you can run the following command 

`pip install -r requirements.txt` to download all the neccessary libraries for this project

`py manage.py runserver` for windows
`python manage.py runserver'` mac 


after that open `http://127.0.0.1:8000/` in your web browser 

Then you can choose between time and words and the amount of time or words you want to type, then start typing

If you want to save your progress you can click to user icon at the top right corner of the screen or click the log in text when your result it presented to you to login or register after that all your scores will be saved they have Accuracy Error or Invalid Tests Error. Saving your data will be done automatically so you can play without having a disturbance.



After registering or loginning in you can see your progress in your porfile page by clicking your user name at the top right corner of the page.


The porfile page include the amount of time the user spend, number of tests,
top scores in each field and the last 25 test order in time the latest on the top.