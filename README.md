# Setup

- Install current packages
- Feel free to install and use any library you would like

# Submission

When you are done, create a zip file from the repo and name it `{user-github-handle}/{yyyy-MM-DD}` and send it back to us.

# Test description

Display sorted player information as given in the design.

## Design

https://www.figma.com/file/A3G8XiR3y3U2kApjY8MLXI/Cat-Game?node-id=0%3A1

If figma didn't work for you, you can use this static mock instead.
![Static Desktop View Mock](./desktop-view-mock.png?raw=true 'Static Desktop View Mock')
![Static Mobile View Mock](./mobile-view-mock.png?raw=true 'Static Mobile View Mock')

## Detail of what needs to be done

- The UI should be pixel perfect.

- The player list should be sorted by their last played date. When determining players last played date, the game's `accurate date` should be preferred over games's `date` when available.
  (NOTE: For the player's games our (imaginary) backend can find `accurate date`, which is a more accurate date than the game's `date` field. So when ever `accurate date` is available for a game, use that over using game's `date` field.)

- When user types in the search input, only apply the search after user has stopped typing for 400 milliseconds. The search should cause a new query request rather than filtering the previous players result locally. (Note: in this test, you can assume that passing the search input to useFakeQuery will make a new request)

- Display the win rate badge with different background color based on their win ratio classification.

  - red: === 0
  - yellow: > 0 && < 0.25
  - green: >= 0.25 && < 0.75
  - blue: >= 0.75

- The Card and the Badge should be components that can seamlessly be used by other features unrelated to cat games

- When data is being fetched, display only a text, instead of the cat list, under the search bar, in the center of the page that says "Loading..."

- Create automated tests that increase confidence for this feature. (Note: if there are tests or types of tests that you cannot write/create due to time constrain, please describe their type and what they test in code comments. Still, we would like to see some tests written.)

## Additional Note:

Use `useFakeQuery` to fetch the query.
(Note: this is fake query requester build for the purpose of this test. You don't need to understand its implementation detail. But use it as you would use, for example, apollo client useQuery for both when you are developing the feature and when writing tests. You could also utilize the type of the data it returns.)

Example of usage:

```typescript
// Fetching list with no search
useFakeQuery('SelectPlayers', { variables: { search: null } });

//Fetching list with search
useFakeQuery('SelectPlayers', { variables: { search: 'some-search input 123' } });
```
