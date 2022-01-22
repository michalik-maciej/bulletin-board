import { Button, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {
  fetchAllPosts,
  getAllPublished,
  getLoadingState,
  getShouldFilter,
} from '../../../redux/postsRedux'
import { fetchUser, getUserId } from '../../../redux/userRedux'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { PostSummary } from '../../features/PostSummary/PostSummary'

function Component() {
  const [posts, setPosts] = useState([])
  const dispatch = useDispatch()
  const loadingState = useSelector((state) => getLoadingState(state))
  const publishedPosts = useSelector((state) => getAllPublished(state))
  const userId = useSelector((state) => getUserId(state))
  const shouldFilter = useSelector((state) => getShouldFilter(state))

  useEffect(() => {
    const { active, error } = loadingState
    if (!active && !error) {
      dispatch(fetchAllPosts())
      dispatch(fetchUser())
      setPosts(publishedPosts)
    }
  }, [loadingState])

  const content = {
    title: 'All posts',
    buttonPostAdd: { caption: 'Add new post', display: 'none' },
    posts: shouldFilter
      ? posts.filter((post) => post.author.id === userId)
      : posts,
  }

  if (userId) {
    if (shouldFilter) {
      content.title = 'My posts'
    }
    content.buttonPostAdd.display = 'block'
  }

  return (
    <>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <h2>{content.title}</h2>
        <Button
          component={Link}
          to="/post/add"
          size="small"
          variant="outlined"
          sx={{ display: content.buttonPostAdd.display }}
        >
          {content.buttonPostAdd.caption}
        </Button>
      </Toolbar>
      {posts.length &&
        content.posts.map((post) => <PostSummary key={post._id} post={post} />)}
    </>
  )
}

export { Component as Homepage, Component as HomepageComponent }
