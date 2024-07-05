import React, {useState} from 'react'
import { supabase } from '../utils'

function AddGame() {
  const [gameName, setGameName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Tolong pilih gambar untuk cover game.');
      return;
    }

    // Upload 
    const { data: storageData, error: storageError } = await supabase
      .storage
      .from('cover')
      .upload(`public/${file.name}`, file);

    if (storageError) {
      console.log('Storage Error:', storageError.message);
      return;
    }

    // Ambil URL dari gambar yang ad di storage
    const { data: publicUrlData, error: publicUrlError } = supabase
      .storage
      .from('cover')
      .getPublicUrl(`public/${file.name}`);

    if (publicUrlError) {
      console.log('Public URL Error:', publicUrlError.message);
      return;
    }

    const coverImageUrl = publicUrlData.publicUrl;
    console.log('Public URL:', coverImageUrl);

    // Insert
    const { data, error } = await supabase
      .from('Game')
      .insert([
        {
            namagame: gameName,
            gambar: coverImageUrl,
            description: description,
            LinkPortal: link,
        }
    ])

    if (error) {
      console.log('Insert Error:', error.message);
      return;
    }

    // Reset form 
    setGameName('');
    setDescription('');
    setLink('');
    setFile(null);
    alert('Game added successfully!');
  };

  return (
    <div className='flex items-center justify-center mt-20'>
        <div className='flex flex-col border-2 border-primary px-10 py-12 rounded-2xl shadow-2xl w-full max-w-4xl'>
            <h1 className='text-4xl font-judul hover:font-mono text-center'>
                Tambah Game
            </h1>

            <input
                type="text"
                placeholder="Nama Game"
                className="input input-bordered input-secondary w-full mt-10"
                value={gameName}
                onChange={(e) => setGameName(e.target.value)} />

            <input
                type="text"
                placeholder="Deskripsi"
                className="input input-bordered input-secondary w-full mt-6" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}/>

            <input
                type="text"
                placeholder="Link Portal"
                className="input input-bordered input-secondary w-full mt-6 mb-6" 
                value={link}
                onChange={(e) => setLink(e.target.value)}/>

            <p>Masukkan file gambar cover game</p>
            <input
                type="file"
                className="file-input file-input-bordered file-input-secondary w-full mt-2" 
                onChange={handleFileChange}/>

            <button onClick={handleSubmit} className="btn btn-outline btn-accent mt-10">Tambah</button>
        </div>
    </div>
  )
}

export default AddGame