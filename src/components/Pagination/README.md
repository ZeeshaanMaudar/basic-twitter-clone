# Pagination

## Standalone component that allows to paginate list. In this app, it is paginating the `TweetList`. 

## index.tsx

Component that does the following:

 - Paginates the TweetsList to default limit 5, and defaults to page 1
 - Alllows to navigate to previous or next page
 - Displays on which page currently on
 - Contains select option to change limit of rows per page

### Props

```
Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  setLimit: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired
}
```
