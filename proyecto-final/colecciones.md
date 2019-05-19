# Colecciones

## ACCOUNTS
    * username: string
    * password: string
    * created: date

## PROFILES
    * username: string
    * karma_post: number
    * karma_comment: number
    * saved_posts: array (de ids)
    * saved_comments: array (de ids)
    * subscribed: array (de strings)
    * owned: (de strings)

## SUBREDDITS
    * name: string
    * description: string

## POSTS
    * username: string
    * subreddit: string
    * title: string
    * body: string
    * time: date
    * type: string
    * link: string
    * votes:  number
    * num_of_comments: number

## COMMENTS
    * body: string
    * time: date
    * username: string
    * ref: id
    * votes: number