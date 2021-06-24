# Captain's Log

![](https://cdn.shopify.com/s/files/1/2256/1635/products/4520_c-01.jpg?v=1510506828)

Every great captain, whether on the waters or in the skies, keeps a daily log.

Let's build the perfect Captain's Log App for our extraordinary captains. So that future generations can learn about life on a ship.

![](https://i.imgflip.com/2174sq.jpg)

## Multiple Session Lab/Activity

While you will start this lab/activity today, you will have many sessions to build it out.

The different parts should align with what you are learning in lecture.

By the end, your app should have the following functionality

|  #  | Action  |    URL    | HTTP Verb |    CRUD    |              Description              |
| :-: | :-----: | :-------: | :-------: | :--------: | :-----------------------------------: |
|  1  |  Index  |   /logs   |    GET    |  **R**ead  |   Get a list (or index) of all logs   |
|  2  |  Show   | /logs/:id |    GET    |  **R**ead  | Get an individual view (show one log) |
|  3  | Create  |   /logs   |   POST    | **C**reate |           Create a new log            |
|  4  | Destroy | /logs/:id |  DELETE   | **D**elete |             Delete a log              |
|  5  | Update  | /logs/:id |    PUT    | **U**pdate |             Update a log              |

There are tests that where you can check your progress. By the end, you should have all tests passing. Bonuses in each section are not required to pass the assignment.

If you finish ahead of time you can try the bonus challenges in each section, or work on `express-ufo`, [work on some code challenges](add link) or continue polishing your Bootstrap CSS skills.

If you feel like you are falling behind, reach out to an instructor.

## Part 1

|  #  | Action |  URL  | HTTP Verb |   CRUD   |            Description            |
| :-: | :----: | :---: | :-------: | :------: | :-------------------------------: |
|  1  | Index  | /logs |    GET    | **R**ead | Get a list (or index) of all logs |

- create express app

Build an array of 3 objects that have a

- captainName: string
- title: string
- post: string
- mistakesWereMadeToday: boolean
- daysSinceLastCrisis: number

Let's get you started with the first one. To pass tests, be sure to keep this object as your first one.

```js
module.exports = [
  {
    captainName: "Picard",
    title: "Courage",
    post: "Courage can be an emotion too.",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 100,
  },
  {
    captainName: "Ahab",
    title: "Whale",
    post: "By heavens man, we are turned round and round in this world, like yonder windlass, and fate is the handspike.",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 20,
  },
  {
    captainName: "Sarah Lance",
    title: "Vandal Savage",
    post: "I’d tell you to go to hell, but you’d probably just feel at home there.",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 0,
  },
  {
    captainName: "Ahab",
    title: "Insolence",
    post: "I don't give reasons. I give orders!",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 100,
  },
  {
    captainName: "Sarah Lance",
    title: "Ava",
    post: "Ava's the kind of girl that you take home to your parents, and I am the kind you take to an exorcism",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 0,
  },
  {
    captainName: "Ahab",
    title: "What is sleep?",
    post: "Sleep? That bed is a coffin, and those are winding sheets. I do not sleep, I die.",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 5,
  },
  {
    captainName: "Sarah Lance",
    title: "Jonah Hex",
    post: "I know you don’t like taking orders from a woman, but you’re gonna like getting your ass kicked by one even less.",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 0,
  },
];
```

- create a route `/` that says something like `welcome to the captain's log`
- create a route `/logs` that shows the array of logs you've created
- create a 404 route that when a user tries to access a route that doesn't exist, they will see this page

### Bonus

Add functionality where if a user goes to

- `/logs?order=asc` it will organize the logs alphabetically
- `/logs?order=desc` it will organize the logs in reverse alphabetical order
- `/logs?mistakes=true` it will only show the logs where the value of `mistakesWereMadeToday` is true
- `/logs?mistakes=false` it will only show the logs where the value of `mistakesWereMadeToday` is false
- `/logs?lastCrisis=gt10` it will return all the logs where the `daysSinceLastCrisis`is **g**reater **t**than 10
- `/logs?lastCrisis=gte20`it will return all the logs where the `daysSinceLastCrisis`is **g**reater **t**than or **e**qual to 20
- `/logs?lastCrisis=lte5`it will return all the logs where the `daysSinceLastCrisis`is **l**ess **t**than or **e**qual to 5

**Note** the original `/logs` route should be unaffected by these additions

## Part 2

Do not start Part 2 until your index route passes all its tests. If you are stuck, be sure to ask for help.

|  #  |   Action   |    URL    | HTTP Verb |    CRUD    |              Description              |
| :-: | :--------: | :-------: | :-------: | :--------: | :-----------------------------------: |
|  2  |  **Show**  | /logs/:id |    GET    |  **R**ead  | Get an individual view (show one log) |
|  3  | **Create** |   /logs   |   POST    | **C**reate |           Create a new log            |

- add routes for create and show
- add some logic so that if someone goes to an invalid array position they will be redirected to the 404 route you had written in the last part

### Bonuses

Add a validation function that checks to make sure that the values of each key are the correct type

- captainName: string
- title: string
- post: string
- mistakesWereMadeToday: boolean
- daysSinceLastCrisis: number

If a wrong datatype is entered, send an error, otherwise push the new data into the array

Add a new folder called `v2`

- inside of it make a new `controllers` folder
  - inside fo the `controllers` folder add `bookmarksController.js`
- in `app.js` set up the new controllers so that the route will be `/v2/logs`
- write some logic to display the index data embedded in an unordered list of anchor tags linking to the show routes at `/vs/logs/:index`
- write some logic to display the show data as an `h1` tag for the title, a `p` tag for the post, and additional styling for the other fields. Create a back button that takes users back to `/vs/logs`
- This code likely is becoming rather tough to maintain. You can look into setting up a template engine like [ejs](https://ejs.co/) or creating a create-react-app front end and connecting it to the main API `/logs` not `/v2/logs` - **NOTE:** we'll learn how to connect a create-react-app in class later.

## Part 3

Do not start Part 3 until your show and create routes pass all its tests. If you are stuck, be sure to ask for help.

|  #  |   Action    |    URL    | HTTP Verb |    CRUD    | Description  |
| :-: | :---------: | :-------: | :-------: | :--------: | :----------: |
|  4  | **Destroy** | /logs/:id |  DELETE   | **D**elete | Delete a log |
|  5  | **Update**  | /logs/:id |    PUT    | **U**pdate | Update a log |

- add routes for delete and update
- add some logic so that if someone goes to an invalid array position they will be redirected to the 404 route you had written in the last part

- Your app should now pass all tests!

### Bonuses

- If you've already written a validation function, try adding it to the update route. If you have not written it yet, give it a try!
- Go back and try any of the previous Bonuses
