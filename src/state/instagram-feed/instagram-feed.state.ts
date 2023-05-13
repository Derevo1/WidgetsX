export interface IInstagramProfileState {
  profile_img: string
  profile_name: string
  posts: {
    img: string
    likes: number
    comments: number
  }[]
  bio: {
    posts_amount: number
    followers_amount: number
    following_amount: number
  }
}

export const initalInstagramFeedState: (IInstagramProfileState) = {
  profile_img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
  profile_name: 'nickname',
  posts: [
    {
      img: 'https://www.gardeners.com/globalassets/articles/gardening/2023content/8078-chive-flowers-edible.jpg',
      likes: 10,
      comments: 4
    },
    {
      img: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg',
      likes: 36,
      comments: 10
    },
    {
      img: 'https://ychef.files.bbci.co.uk/1280x720/p0f4p79z.jpg',
      likes: 20,
      comments: 6
    },
    {
      img: 'https://www.suttons.co.uk/images/slides/highlight-flower-plants.jpg',
      likes: 49,
      comments: 2
    }
  ],
  bio: {
    posts_amount: 5,
    followers_amount: 222,
    following_amount: 103
  }
}