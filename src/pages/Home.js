import React, { useState, useEffect } from 'react';
import { supabase } from '../utils'; 

const ITEMS_PER_PAGE = 4; 

function Home() {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchGames() {
      // Fetch total dari game
      const { count } = await supabase
        .from('Game')
        .select('id', { count: 'exact' });
      setTotalPages(Math.ceil(count / ITEMS_PER_PAGE));

      // Fetch data 
      const { data, error } = await supabase
        .from('Game')
        .select('*')
        .order('id', { ascending: true })
        .range((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE - 1);

      if (error) console.log('Error fetching games:', error.message);
      else setGames(data);
    }

    fetchGames();
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div className='container mx-auto px-4 mt-10'>
        {/* JUDUL */}
        <div className='flex justify-center'>
          <h1 className='text-6xl font-judul hover:font-mono'>Selamat datang!</h1>
        </div>

        {/* KONTEN */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-14 p-6'>
          {games.map((game) => (
            <div key={game.id} className='card card-side border-4 border-primary rounded-2xl shadow-xl'>
              <div >
              <img className='rounded-l-xl h-72 w-56 object-cover' src={game.gambar} alt={game.namagame} />
              </div>
              <div className='card-body'>
                <h2 className='card-title font-judul text-2xl'>{game.namagame}</h2>
                <p className='font-penjelasan'>{game.description}</p>
                <div className='card-actions justify-end'>
                  <a href={game.LinkPortal} target='_blank' rel='noopener noreferrer' className='btn btn-secondary hover:text-white'>Link</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className='flex justify-center mt-10'>
          <button onClick={handlePreviousPage} className='btn btn-outline btn-accent' disabled={currentPage === 1}>Previous</button>
          <span className='mx-4'>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNextPage} className='btn btn-outline btn-accent' disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
