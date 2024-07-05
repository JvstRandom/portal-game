import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../utils';

function EditGame() {
  const { id } = useParams(); // Get game ID from URL
  const navigate = useNavigate();
  const [gameName, setGameName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [file, setFile] = useState(null);
  const [coverImageUrl, setCoverImageUrl] = useState('');

  useEffect(() => {
    // Fetch game data based on ID
    async function fetchGame() {
      const { data, error } = await supabase
        .from('Game')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.log('Error fetching game:', error.message);
        return;
      }

      setGameName(data.namagame);
      setDescription(data.description);
      setLink(data.LinkPortal);
      setCoverImageUrl(data.gambar);
    }

    fetchGame();
  }, [id]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newCoverImageUrl = coverImageUrl;

    if (file) {
      // Upload new image if file is selected
      const { data: storageData, error: storageError } = await supabase
        .storage
        .from('cover')
        .upload(`public/${file.name}`, file);

      if (storageError) {
        console.log('Storage Error:', storageError.message);
        return;
      }

      // Get public URL of new image
      const { data: publicUrlData, error: publicUrlError } = supabase
        .storage
        .from('cover')
        .getPublicUrl(`public/${file.name}`);

      if (publicUrlError) {
        console.log('Public URL Error:', publicUrlError.message);
        return;
      }

      newCoverImageUrl = publicUrlData.publicUrl;
    }

    // Update game data
    const { error } = await supabase
      .from('Game')
      .update({
        namagame: gameName,
        gambar: newCoverImageUrl,
        description: description,
        LinkPortal: link,
      })
      .eq('id', id);

    if (error) {
      console.log('Update Error:', error.message);
      return;
    }

    // Reset form
    setGameName('');
    setDescription('');
    setLink('');
    setFile(null);
    alert('Game updated successfully!');
    navigate('/Dashboard'); // Redirect to admin dashboard
  };

  return (
    <div className='flex items-center justify-center mt-20'>
      <div className='flex flex-col border-2 border-primary px-10 py-12 rounded-2xl shadow-2xl w-full max-w-4xl'>
        <h1 className='text-4xl font-judul hover:font-mono text-center'>
          Edit Game
        </h1>

        <input
          type="text"
          placeholder="Nama Game"
          className="input input-bordered input-secondary w-full mt-10"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Deskripsi"
          className="input input-bordered input-secondary w-full mt-6"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Link Portal"
          className="input input-bordered input-secondary w-full mt-6 mb-6"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <p>Masukkan file gambar cover game (opsional)</p>
        <input
          type="file"
          className="file-input file-input-bordered file-input-secondary w-full mt-2"
          onChange={handleFileChange}
        />

        <button onClick={handleSubmit} className="btn btn-outline btn-accent mt-10">Update</button>
      </div>
    </div>
  );
}

export default EditGame;
