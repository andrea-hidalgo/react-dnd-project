# SEI-Ruth Project 2

# Dungeons & Dragons Monster 

### Concept

***

Use an API to search for monsters of a particular challenge rating, then save them into a collection. Make notes about individual monsters.

### Technologies Used: 

***

* HTML
* CSS
* Javscript
* React
* Mongoose/MongoDB
* Node

**Credits:**

```
ionicons.com
```

### Approach

***  

**First, determine which API to use, then look at the data returned and how to integrate that into my app.**

API: http://www.dnd5eapi.co/docs/#monster-section

API request examples:
*   One challenge rating
https://www.dnd5eapi.co/api/monsters?challenge_rating=2
*   Multiple challenge ratings: https://www.dnd5eapi.co/api/monsters?challenge_rating=2,0.25,4
*   Individual monster information https://www.dnd5eapi.co/api/monsters/ankheg

API returns an object with two keys. 
"count" has the number of results and "results" is an array of objects. I need to target the objects in the result array.

```
{
    "count": 43,
    "results": [
        {
        "index": "ankheg",
        "name": "Ankheg",
        "url": "/api/monsters/ankheg"
        }
        ]
}
```
 
**Created a model based on API data:**

My model:
```
    index: '',
    name: '',
    url: '',
    notes: ''
```

**Worked on a rough wireframe**

### MVP

***

Users can search for a monster and then add them to a collection. 

When a monster is added I store its information via the model above.

The collection page shows a list of saved monsters by name. When a name in the collection is clicked, I fetch the individual monster information using the API and show its information to the user.

The user can update each monster and add notes to it.

### Stretch Goals
* Search for monsters by name or challenge rating
* Create multiple collections
* Add multiple notes to each monster collected
