import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Albums = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchAlbums = async() => {
            const apiURL = 'http://127.0.0.1:8000/api/albums/'

            try {
                const res = await fetch(apiURL);
                const data = await res.json();
                setAlbums(data);

                // check to see if albums have loaded
                console.log(data);

            } catch(error) {
                console.log('Error loading data:', error)
            } finally {
            }
        }
        fetchAlbums();
    }, [])

  return (
    <>
        <section className="contatiner">
            <div className="albums-grid">
                
                {albums.map((album) => ( 
                    <div className="album-item" key={album.title}>
                        <Link to={`albums/${album.id}`} state={album}>
                            <div className="album-image">
                            <img src={album.artwork} alt="" />
                            </div>
                            <div className="album-text" style={{"backgroundColor": album.background}}>
                                <p>{album.title}</p>
                                <p>-</p>
                                <p>{album.artist}</p>
                            </div>
                        </Link>
                    </div>

                ))}

            {/* <!-- End album container --> */}
            </div>
        {/* <!-- End main container --> */}
        </section>
    </>
  )
}

export default Albums