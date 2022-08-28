import React from 'react'
import {Paper, Typography} from '@material-ui/core';
const VideoDetail = ({video})=> {
if(!video) return <div>Loading....</div>
const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`;
console.log(video);


  return (
    <>
    <Paper elevation={6} style={{height: '70%'}}>
      <iframe frameBorder='0' height='100%' width='100%' title='Video Player' src={videosrc} />
    </Paper>
    <Paper elevation={6} style={{}}>
    <Typography variant='h4'>{video.snippet.title} - {video.snippet.channelTitle}</Typography>
    <Typography variant='subtitle1'>{video.snippet.channelTitle}</Typography>
    <Typography variant='subtitle2'>{video.snippet.description}</Typography>
    </Paper>
    </>
  )
}

export default VideoDetail