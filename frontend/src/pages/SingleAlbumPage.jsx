import React from 'react'
import { useParams, useLoaderData, Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'

const SingleAlbumPage = () => {

  // const album = useLoaderData();

  // const [album, setAlbum] = useState([]);

  const location = useLocation();
  //the data here will be an object since an object was
  const album = location.state;
  // console.log(album);

  // Import tracks for album
  const [tracks, setTracks] = useState([]);

  // Load Tracks
  useEffect(() => {
    const fetchTracks = async() => {
      const apiURL = 'http://127.0.0.1:8000/api/tracks/'

      try {
        const res = await fetch(apiURL);
        const data = await res.json();

        console.log('Before Filtered', data)

        // Filter out tracks for the Album
        const filteredData = data.filter((data) => data.album == album.id);
        console.log('After Filtered',filteredData)

        // Sort tracks into order
        filteredData.sort((a,b) => a.track_number - b.track_number); // b - a for reverse sort
        console.log('After Sorted', filteredData)

        // Set State once sorted
        setTracks(filteredData);

      } catch(error) {
        console.log('Error loading data:', error)
      }
    }

    fetchTracks();
  }, [])



  return (
        <div className="ap-container">
            <div className="artwork-container">
                <div className="artwork">
                    <img src={`../${album.artwork}`}  />
                </div>

            </div>
            <div className="info">
                <div className="info-head">
                    <h1>{album.title}</h1>
                    <h2>{album.artist}</h2>
                </div>
                <div className="info-rating">
                    &#11088;&#11088;&#11088;&#11088;&#11088;
                </div>
                <div className="info-desc">
                    <p>{album.description}</p>
                </div>
                <div className="info-tracklist">
                    <ol className="tracklist">
                      {tracks.map((track) => (
                        <li key={track.id}>{track.track_number}. {track.track_title}</li>
                      ))}
                      
                    </ol>
                </div>

            </div>

        </div>
  )
}

// const albumLoader = async ({ params }) => {
//   const res = await fetch(`/api/albums/${params.id}`);
//   const data = await res.json();
//   return data;
// }

export default SingleAlbumPage