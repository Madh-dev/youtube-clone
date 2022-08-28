import React from 'react'
import VideoItem from './VideoItem';
import {Grid} from '@material-ui/core';
function VideoList({videos, onVideoSelect}) {
  const videoList = videos.map((video,id)=> <VideoItem key={id} onVideoSelect= {onVideoSelect} video={video}/> );
  return (
    <Grid container spacing={10}>
      {videoList}
    </Grid>
    
  )
}

export default VideoList;