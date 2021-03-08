
export interface User {
  id: number,
  username: string,
  role: string,
  usersDetailsId: number,
  profilePic: string
}

export interface UserDetails {
  id: number,
  firstName: string,
  lastName: string,
  birthday: string
}

export interface TweetType {
  id: number,
  tweet: string,
  date: string,
  claps: number,
  userId: number
}
