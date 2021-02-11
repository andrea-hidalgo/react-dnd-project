# SEI-Ruth Project 2

# Dungeons & Dragons Monster Collections

**MVP Goal**

Use an API to search for monsters of a particular challenge rating, then save them into a collection. Make notes about individual monsters.

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

My model:
```
    index: '',
    name: '',
    url: '',
    notes: ''
```

Users can search for a monster and then add them to a collection. 

When a monster is added I store its information via the model above.

The collection page shows a list of saved monsters by name. When a name in the collection is clicked, I fetch the individual monster information using the API and show its information to the user.

The user can update each monster and add notes to it.
