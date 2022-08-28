import React, { useEffect,useState } from 'react';
import Api from './Api/Api';

import {Grid} from '@material-ui/core';

import {Search,VideoDetail,VideoList} from './Components';

function App() {
    const apikey = 'AIzaSyC0mEPiqTyDUdP6ifWyIh-uGibCzQ8ec70';
    const [videos, setVideos]= useState([]);
    const [selectedVideo, setselectedVideo] = useState(null);
    useEffect(()=>{
      handleSubmit('Chelsea');
    },[])
    const onVideoSelect  = (video) =>{
      setselectedVideo(video);
    }
    const handleSubmit = async(searchTerm) =>{
      
      const response = await Api.get('search',{
        params:{
          part: 'snippet',
          maxResult: 5,
          key: apikey,
          q : searchTerm,
        }})
       setVideos(response.data.items);
       setselectedVideo(response.data.items[0]);  
      // console.log(response.data.items);
    }

  return (
   <Grid justifyContent="center" container spacing= {10}>
    <Grid item xs={12}>
    <Grid  container spacing= {10}>
    <Grid item xs={12}>
      <Search onformSubmit= {handleSubmit}/>
    </Grid>
    <Grid item xs={8}>
      <VideoDetail video={selectedVideo}/>
    </Grid>
    <Grid item xs={4}>
      <VideoList videos={videos} onVideoSelect = { onVideoSelect}/>
    </Grid>
    </Grid>
    </Grid>
   </Grid>
  );
}

export default App;
