# Statistics

## Standalone component that displays number of tweets per day for the last 10 days for a specific user.

This component gets loaded lazily, since it fetches the list of all tweets for one user which can be big depending on user on mount, and maybe not every user is going to go to that view.

 Re-renders:

 - when posted new tweet by `userId=1`
### Props

```
Statistics.propTypes = {
  userId: PropTypes.string.isRequired,
}
```
