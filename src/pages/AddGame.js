import React from 'react'

function AddGame() {
  return (
    <div className='flex items-center justify-center mt-20'>
        <div className='flex flex-col border-2 border-primary px-10 py-12 rounded-2xl shadow-2xl w-full max-w-4xl'>
            <h1 className='text-4xl font-judul hover:font-mono text-center'>
                Tambah Game
            </h1>

            <input
                type="text"
                placeholder="Nama Game"
                className="input input-bordered input-secondary w-full mt-10" />

            <input
                type="text"
                placeholder="Deskripsi"
                className="input input-bordered input-secondary w-full mt-6" />

            <input
                type="text"
                placeholder="Link Portal"
                className="input input-bordered input-secondary w-full mt-6" />
            
            <input
                type="file"
                className="file-input file-input-bordered file-input-secondary w-full mt-6" />

            <button className="btn btn-outline btn-accent mt-10">Tambah</button>
        </div>
    </div>
  )
}

export default AddGame