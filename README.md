# Projet of device management

Technologies: angular5, Rxjs, Firebase, Bootstrap, CSS

Environnement: Mac OS

IDE: VS CODE

## 1. Authentication

Only by clicking on the button "se connecter" and finishing the following authentication steps, can we visit other pages in the navbar.

![image-20200619174556694](/Users/wei/Library/Application Support/typora-user-images/image-20200619174556694.png)

# 2. Page "appareil"

we can download the information of the devices from Firebase by click on button "Charger" 

![image-20200619175152218](/Users/wei/Library/Application Support/typora-user-images/image-20200619175152218.png)We can see the in the following picture that the registered device "television" is closed. 

![image-20200619180015773](/Users/wei/Library/Application Support/typora-user-images/image-20200619180015773.png)

By simply clicking on the button "allumer", we can remotely open the device "television".

![image-20200619180212752](/Users/wei/Library/Application Support/typora-user-images/image-20200619180212752.png)

## 3. Add new device

In the "Nouveau appareil" section which can be accessed from the navbar, we can add new devices.

<img src="/Users/wei/Library/Application Support/typora-user-images/image-20200619180323330.png" alt="image-20200619180323330" style="zoom:50%;" />

![image-20200619181403347](/Users/wei/Library/Application Support/typora-user-images/image-20200619181403347.png)

## 4. Control the states of all devices by a single click

The button "tout allumer" and "tout éteindre" are used for controlling the states of all devices.

"tout allumer":

![image-20200619181423229](/Users/wei/Library/Application Support/typora-user-images/image-20200619181423229.png)

"tout éteindre":

![image-20200619181436124](/Users/wei/Library/Application Support/typora-user-images/image-20200619181436124.png)

And we can get more information of the device from  "firebase". And by clicking on the button "enregistre" we can upload the information of the added device.

![image-20200619181607478](/Users/wei/Library/Application Support/typora-user-images/image-20200619181607478.png)

## 5. add a user in the application

By defaut, we have a user. 

![image-20200619195057255](/Users/wei/Library/Application Support/typora-user-images/image-20200619195057255.png)

By clicking the link "Nouvelle utilisateur", we can create a new user. 

![image-20200619195315405](/Users/wei/Library/Application Support/typora-user-images/image-20200619195315405.png)

By enterring the first name, last name, adresse email and the drink which he/she prefers, we can create a new user. What's more, we can add more hobbies by clicking the button "ajouter un hobby".

![image-20200619195844648](/Users/wei/Library/Application Support/typora-user-images/image-20200619195844648.png)

After submitting the information of the new user, we can get a new list of users. 

![image-20200619195901035](/Users/wei/Library/Application Support/typora-user-images/image-20200619195901035.png)

## 6. Exception handling

When we navigate to an unpredicted pathname in the url, we will go automatically to the page "Not found"

![image-20200619200324070](/Users/wei/Library/Application Support/typora-user-images/image-20200619200324070.png)



