# 🐷 Pig Latin Activity

[Oday ouyay eakspay igpay atinlay?](http://www.wikihow.com/Speak-Pig-Latin)

In this activity we're going to create an application that translates regular English words into Pig Latin.

### 💬 Rules of Pig Latin

- For words beginning with a vowel, add "way" to the end.
- For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
- If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
- "y" is treated like a vowel in appropriate circumstances.

There are many [examples](http://funtranslations.com/pig-latin) of Pig Latin translators out there on the internet to give you inspiration.

### ▶️ Getting started

This is a very difficult problem to solve. Take the time to plan your approach and brainstorm with your team.

This project is going to utilize React for the UI and the JavaScript logic. There is already some code inside the React application that will provide a UI for the Pig Latin project. Your job is to create the logic. All the code you'll need to write for this app is going to be inside one function in the `/src/App.js` file.

After you accept the assignment from GitHub Classroom, you'll want to install all the necessary dependencies.

```bash
$ cd pig-latin-challenge
$ yarn
```

Then you are ready to start a server to run the application.

```bash
$ yarn start
```

Now you're ready to code!

To get started, find the `myPigLatinCodeHere` function, and write your code. Every time you save your updated file, the browser window displaying your app will reload.

---

### 🐽 Pig Latin Challenge

Oday ouyay eakspay igpay atinlay? If you are scratching your head at that statement, we at LEARN Academy have you covered. Our development team has been tasked with creating a Pig Latin translator application. This app will take regular English words and covert them to Pig Latin. With this application you will eakspay igpay atinlay uentlyflay in no time!

**Story 1: In order to see English words converted to Pig Latin, as the user of the application, I need to see words beginning with a vowel translated to add "way" the end.**

**Branch:** vowel-functionality

**Acceptance Criteria**

- Can type any word that begins with a vowel in the text input (e.g. apple)
- Can hit the submit button
- Can see the words that begin with a vowel translated to Pig Latin and rendered to the page (e.g. appleway)

**Implementation Discussion**
 This section discusses how App.js processes words that begin with a vowel.
 Inputs: eachWord (string), vowelsArray (array of strings)
 Outputs: eachWord (string)
 
 Logically, vowelsArray returns an array that identifies each of the instances of "a", "e", "i", "o", and "u" in the string. However, since the vowelsArray does not indicate where those vowels are found in eachWord, additional logic is necessary. This section of the code compares the first character in eachWord to the first vowel in vowelsArray. When these are the same, then the first letter is a vowel, triggering this conditional statement. In this case, the only change needed is to concatenate "way" to the end of the word, which is modified in stream.

 **Examples**

- apple => appleway
- Apple => Appleway
- apple, => apple,way *Note: pending logical update to functionality
- Aaron => Aaronway

**Story 2: In order to see English words converted to Pig Latin, as the user of the application, I need to see words that have "qu" in the first syllable translated by moving all the consonant and the "u" to the end and add "ay".**

**Branch:** qu-functionality

**Acceptance Criteria**

- Can type any word that has a "qu" in the first syllable in the text input (e.g. squeal)
- Can hit the submit button
- Can see the words that have a "qu" in the first syllable translated to Pig Latin and rendered to the page (e.g. ealsquay)

**Implementation Discussion**
 This section discusses how App.js processes words that include "qu" in the first consonant.
 Inputs: eachWord (string), vowelsArray (array of strings)
 Outputs: eachWord (string)
 
 Logically, vowelsArray returns an array that identifies each of the instances of "a", "e", "i", "o", and "u" in the string. When "qu" is in the first syllable, then this substring must be kept intact. When the first vowel is a "u" and "qu" is found in the word, then these conditional criteria are met to work within this section.
 
 First, the index of the second vowel (i.e. the vowel after "qu") is stored for local use. Then a substring from the beginning of eachWord to the second vowel (exclusive) is created as a local syllable. Finally, eachWord is reconstructed by using a substring from the second vowel to the end, concatenated with the first syllable and "ay".

 **Examples**

- queen => eenquay
- squire => iresquay
- youthquake => outhquakeyay * Note: processed through the consonant section
- require => equireray * Note: processed through the consonant section

**Story 3: In order to see English words converted to Pig Latin, as the user of the application, I need to see words that have no vowels other than "y" translated by moving all the consonant to the end and add "ay".**

**Branch:** y-functionality

**Acceptance Criteria**

- Can type any word that has no vowels other than "y" in the text input (e.g. fry)
- Can hit the submit button
- Can see the words that have no vowels other than "y" translated to Pig Latin and rendered to the page (e.g. yfray)

**Implementation Discussion**
 This section discusses how App.js processes words that include "y" as the only vowel in a word.
 Inputs: eachWord (string), vowelsArray (array of strings)
 Outputs: eachWord (string)
 
 Logically, vowelsArray returns an array that identifies each of the instances of "a", "e", "i", "o", and "u" in the string. When this array is empty and there is a "y" in eachWord, then "y" is functioning as a vowel.
 
 First, the index of the "y" is stored for local use. Then a substring from the beginning of eachWord to the "y" (exclusive) is created as a local syllable. Finally, eachWord is reconstructed by using a substring from the "y" to the end, concatenated with the first syllable and "ay".

 **Examples**

- spry => yspray
- fly => yflay
- dryly => ylydray

**Story 4: In order to see English words converted to Pig Latin, as the user of the application, I need to see words that have one or more consonants translated by moving all the consonant to the end and add "ay".**

**Branch:** consonant-functionality

**Acceptance Criteria**

- Can type any word that starts with one or more consonants in the text input (e.g. through)
- Can hit the submit button
- Can see the words that start with one or more consonants translated to Pig Latin and rendered to the page (e.g. oughthray)

**Implementation Discussion**
 This section discusses how App.js processes words that begin with a consonant.
 Inputs: eachWord (string), vowelsArray (array of strings)
 Outputs: eachWord (string)
 
 Logically, vowelsArray returns an array that identifies each of the instances of "a", "e", "i", "o", and "u" in the string. When the index of the first vowel is greater than zero, then the word begins with a consonant.
 
 First, the index of the first vowel is stored for local use. Then a substring from the beginning of eachWord to the first vowel (exclusive) is created as a local consonants. Finally, eachWord is reconstructed by using a substring from the first vowel to the end, concatenated with the consonants and "ay".

 **Examples**

- plan => anplay
- class => assclay

### 🏔 Stretch Challenges

- As a user, I can see pleasant stylings on the application.
- As a user, I can input a sentence that includes punctuation.
- As a user, I can input a sentence that includes lower and upper case words.
      Updated the code with a conditional statement to compare the first letter of each word to the lowercase version of that letter. When these are different, then a variable is used to track this the word is nearly ready for return.
      As a final adjustment prior to return, when this Boolean is true, then the code capitalizes only the first letter of each word.
      Fully capital words and words with capital letters in the middle do not retain the same as the input.
- As a user, I can see a message if I am not using the application correctly.

### 👩‍💻 Developer Stretch Challenges

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

### 🎙 Project Demos

Each team will give a brief (3 minute) presentation of their application. Presenting your project will allow you to practice communication and coding vocabulary. Presentations are not a judgement of your work or ability as each team will have different weaknesses and strengths. Presentations allow other members of the cohort to appreciate a different approach to solving a complex problem.

- Full team: show off your application's user interface (UI)
- First team member: What was your team's approach to solving this problem? Did the initial approach work out in the end?
    -Our initial logic for the "qu" functionality worked, but we simplified the pseudocode and found a cleaner approach using a better understanding of the basic framework of the app. 
- Second team member: What was the hardest thing about this project? What is your biggest take away?
- Third team member (if applicable): How did you manage the workflow in a group of three?

**Developer Notes**

- Success: Time management. Initial planning and initial pseudocode created a foundation for the development of the application. Throughout development, we continued to iterate upon this foundation, refining methodolgy and adding functionality with the time available.
- Struggle: Developing test cases. As each component of the code was developed, we iteratively tested the functionality to confirm expected behavior. This became a challenge to think about edge cases and reviewing how they were processed by the code. One technique that we discovered rather late in development was making up words that met criteria that we wanted, rather than researching actual English words.