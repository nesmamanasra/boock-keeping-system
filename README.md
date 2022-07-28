# boock-keeping-system

## Bookkeeping App
In this project, you will develop a Bookkeeping app that supports multiple accounts with simple user interfaces. Each account can have up to 3 users and insert as many entries as needed.

### Functional Requirments
- Users should log in by email and password before using the system
- A User should be able to register a new account with the following information 
     - Business Name
     - County (select list)
     - Currency
- A User should be able to add another two users to the account if needed
- Each account user should be able to insert entries to customers, employees,  payments, and receipts.
     - Each payment or receipt should have the following fields: amount, date, and payee (for payments) and paid by (for receipts).
     - Customers and employees should have at least a name field. 
     
### Reports

The system should be able to issue the following reports within a given period (user should be able to select from and to date)
- Balance Sheet 
      - Should show all payments and receipts and show the difference between the sum of two  
- Customer report by name
- Employee report by name

### Guidelines
- Group based project
- Submit is only via GitHub or BitBucket
- Repo with a single commit message will not be accepted, though commit your work incrementally to the repo. 
- Follow best practices, conventions, clean code, and design patterns you learned so far during the training. 
- Use HTML Forms and Tables, no advanced UI is required. 
- The deadline is July 2, 2022
Have Fun

# First
## Initial system, scribble design
My team and I analyzed the system by scribbling with a flowchart design so that it gives us an initial look at how the system works and how it will be programmed
Here you can find a picture here with some scribbles

![sys](https://user-images.githubusercontent.com/52491098/177000059-9896f547-5685-4879-ac6b-5646ac017936.PNG)

## Why did we do this ?
In this project, we will create an accounting system that contains three users who enter companies, employees, and money that has been paid and withdrawn using HTML CSS JS programming languages. Within the internship is a frontend developer
I will attach the project link to you and based on this document we have analyzed the system and started working 
https://docs.google.com/document/d/1ll1cwabSHxe0wHO5d-5Vahcg1f1zOqISgKHCxiRUCFc/edit

## Pages on we system 
### Sign in 'interface'
When we run the system, the login page appears. From here, in case you are already registered, you just need to write your email and password

![signin](https://user-images.githubusercontent.com/52491098/176999818-12e172ea-3a13-491e-9046-4ba7c43c58a4.PNG)

### Sign up page 'interface'
If you do not have an account, click on the word asign up on the login page
Then a new page will appear with you to log in
The data is stored in the local storage

1- show page

![sign-up](https://user-images.githubusercontent.com/52491098/177000226-b44543a9-dca1-4ba8-8bfa-04bac19105a4.PNG)


2- insert data and on click button,after that, a box appears with a message confirming that the account has been stored successfully, and then he must go to the login screen


![create](https://user-images.githubusercontent.com/52491098/177001614-71d64b0d-37a1-4808-93c0-959de285da55.PNG)

* local Storage
Here is where the data is stored

![local](https://user-images.githubusercontent.com/52491098/177001886-a13eb19d-2633-41d2-9b41-f814ba0a0a73.PNG)

### Main page 

After successfully logging in, we go directly to the main page, which is the main page, where there is simple information and a button for both payment and receipt and report


![main](https://user-images.githubusercontent.com/52491098/177136342-f7d6ac8f-a867-429a-bc6e-945e716a625d.PNG)


### Payment page
when you click submitting" add payment", moved on a new page and show the form and tables and you can insert data on form for then show data in table, after that you can update data or delete when you click on button


![pay](https://user-images.githubusercontent.com/52491098/177137999-f7a18a53-6a57-441e-a2bc-0bd43d67725c.PNG)


### Receipt page
when you click submitting" add receipt", moved on a new page and show the form and tables and you can insert data on form for then show data in table, after that you can update data or delete when you click on button

![rec](https://user-images.githubusercontent.com/52491098/177138076-63aad00b-cb13-4cd4-9632-1bcefd108fa2.PNG)

### Report Page
when you click submitting" report", moved to a new page and show the form "data" and buttons 'balance sheet', 'customer',
'employee', and you can insert the date on the form for then click on the what you need of this buttons after then show the date in the table and the total between payment and receipt if you choose balance sheet, and if you choose customer show id and name customer, and if you choose employee show id and employee


![report](https://user-images.githubusercontent.com/52491098/177140451-78eac630-e20d-45fd-92d7-33cc5c98dbb2.PNG)









