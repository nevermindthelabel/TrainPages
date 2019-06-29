# Train-Scheduler

**Overview**

See app displayed live on Github Pages [here](https://nevermindthelabel.github.io/Train-Scheduler/)

This is a train schedule application that incorporates Firebase to host arrival and departure data. The app retrieves and manipulates user data with MomentJS. The app provides up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

***Technologies***

Using - HTML, [Bootstrap](https://getbootstrap.com), [jQuery](https://jquery.com/) to manipulate the DOM and [MomentJS](http://momentjs.com/) for the time logic. The data collected from user input is stored in a [Firebase Database](https://firebase.google.com/) and then pulled in to populate the table.

![image](https://user-images.githubusercontent.com/10904004/52189936-eb9fc580-27f8-11e9-9f8d-c48f747a7bd3.png)

In the first screenshot, the app takes in the user input into the form. The values from the user input fields are pushed into the Firebase database as a new train object. There is a listener set up to pull in the new train information as it is added into the database, and in the second screenshot the data is pulled down from Firebase and inserted into the table, updating the data immediately.

![image](https://user-images.githubusercontent.com/10904004/52189953-1be76400-27f9-11e9-9b20-b158694b53ee.png)
