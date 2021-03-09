# Tweet

## Standalone component that acts as a card that displays the tweet information of a specific user.

## index.tsx

Component that does the following:

 - `onClick` of profile picture, name or username, it should redirect to the user's profile page.
 - Displays user details and tweet posted
 - Displays number of claps for specific tweet
 - Allows for incrementing claps on click
 - Prevents own user from clapping for their own tweets
 - Allows user to delete their own tweet

### Props

```
Tweet.propTypes = {
  tweetItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tweet: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    claps: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    usersDetailsId: PropTypes.number.isRequired,
    profilePic: PropTypes.string.isRequired,
  }).isRequired,
  userDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired
  }).isRequired,
}
```
