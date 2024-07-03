import React from 'react'

function Home() {
  return (
    <div>
        {/* HEADER */}
      

      <div className='container mx-auto px-4 mt-10'>
        {/* JUDUL */}
        <div className='flex justify-center'>
          <h1 className='text-6xl font-judul hover:font-mono'>
            Selamat datang !
          </h1>
        </div>

        {/* KONTEN */}
        <div>
          <div className="carousel w-full h-full mt-8">
            <div id="item1" className="carousel-item w-full flex items-center justify-center">

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-14 p-6'>
                  <div className="card card-side border-2 border-primary rounded-2xl shadow-xl">
                    <img
                        className='rounded-l-xl '
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                        alt="Movie" />
                    <div className="card-body">
                      <h2 className="card-title font-judul text-2xl">New movie is released!</h2>
                      <p className='font-penjelasan'>Click the button to watch on Jetflix app.</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-secondary hover:text-white">Watch</button>
                      </div>
                    </div>
                  </div>

                  <div className="card card-side border-2 border-primary rounded-2xl shadow-xl">
                    <img
                        className='rounded-l-xl'
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                        alt="Movie" />
                    <div className="card-body">
                      <h2 className="card-title font-judul text-2xl">New movie is released!</h2>
                      <p className='font-penjelasan'>Click the button to watch on Jetflix app.</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-secondary hover:text-white">Watch</button>
                      </div>
                    </div>
                  </div>

                  <div className="card card-side border-2 border-primary rounded-2xl shadow-xl">
                    <img
                        className='rounded-l-xl'
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                        alt="Movie" />
                    <div className="card-body">
                      <h2 className="card-title">New movie is released!</h2>
                      <p>Click the button to watch on Jetflix app.</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-secondary">Watch</button>
                      </div>
                    </div>
                  </div>

                  <div className="card card-side border-2 border-primary rounded-2xl shadow-xl">
                    <img
                        className='rounded-l-xl'
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                        alt="Movie" />
                    <div className="card-body">
                      <h2 className="card-title">New movie is released!</h2>
                      <p>Click the button to watch on Jetflix app.</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-secondary">Watch</button>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                className="w-full" />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                className="w-full" />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                className="w-full" />
            </div>
          </div>
          <div className="join flex w-full justify-center gap-2 py-2 mt-4">
            <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" onClick={() => document.getElementById('item1').scrollIntoView({ behavior: 'smooth' })} defaultChecked />
            <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" onClick={() => document.getElementById('item2').scrollIntoView({ behavior: 'smooth' })} />
            <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" onClick={() => document.getElementById('item3').scrollIntoView({ behavior: 'smooth' })} />
            <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" onClick={() => document.getElementById('item4').scrollIntoView({ behavior: 'smooth' })} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home