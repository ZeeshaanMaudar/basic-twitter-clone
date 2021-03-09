# TweetList

## This component displays a list of tweets conditionally. Fetches paginated tweets, list of users and list of userDetails on mount.

## index.tsx

Component that does the following:

 - If on `HomeView`, displays list of tweets for all users
 - If on `UserDetailsView`, displays list of tweets for specific user only

 Re-renders:

 - on page change from `Pagination`
 - on limit change from `Pagination`
 - If new tweet has been posted
 - whenever a tweet has been deleted

### Props

```
TweetsList.propTypes = {
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  profileView: PropTypes.bool
}
```
