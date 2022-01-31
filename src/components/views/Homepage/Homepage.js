import { Button, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {
  fetchAllPosts,
  getAll,
  getLoadingState,
  getShouldFilter,
} from '../../../redux/postsRedux'
import { fetchUser, getUserId } from '../../../redux/userRedux'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { PostSummary } from '../../features/PostSummary/PostSummary'
import { fetchAllUsers } from '../../../redux/usersRedux'

function Component() {
  const [posts, setPosts] = useState([])
  const dispatch = useDispatch()
  const loadingState = useSelector((state) => getLoadingState(state))
  const allPosts = useSelector((state) => getAll(state))
  const userId = useSelector((state) => getUserId(state))
  const shouldFilterByUser = useSelector((state) => getShouldFilter(state))

  useEffect(() => {
    const { active, error } = loadingState
    if (!active && !error) {
      dispatch(fetchAllPosts())
      dispatch(fetchAllUsers())
      dispatch(fetchUser())
      setPosts(allPosts)
    }
  }, [loadingState])

  const content = {
    title: 'All posts',
    buttonPostAdd: { caption: 'Add new post', display: 'none' },
    posts: shouldFilterByUser
      ? posts.filter((post) => post.author._id === userId)
      : posts.filter((post) => post.status === 'published'),
  }

  if (userId) {
    if (shouldFilterByUser) {
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
