import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Sidebar() {
  return (
    <div className='p-5 text-sm border-r border-gray-900 text-grey-500'>
        <div className='space-y-4'>
            <button className="flex items-center space-x-2 hover:text-white">
                <HomeIcon className='w-5 h-5' />
                <p>Home</p>
            </button>

            <button className="flex items-center space-x-2 hover:text-white">
                <SearchIcon className='w-5 h-5' />
                <p>Search</p>
            </button>

            <button className="flex items-center space-x-2 hover:text-white">
                <LibraryMusicIcon className='w-5 h-5' />
                <p>Your Library</p>
            </button>
            <hr className='border-t-[0.1px] border-white-500'/>
{/*another button */}
            <button className="flex items-center space-x-2 hover:text-white">
                <AddBoxIcon className='w-5 h-5' />
                <p>Create Playlist</p>
            </button>            
            
            <button className="flex items-center space-x-2 hover:text-white">
                <FavoriteIcon className='w-5 h-5' />
                <p>Favorite</p>
            </button>

            <hr className='border-t-[0.1px] border-white-500'/>
            
            {/* playlists..... */}
            <p className="cursor-pointer hover:text-white"> My Playlist #1 </p>
            <p className="cursor-pointer hover:text-white"> My Playlist #2 </p>
            <p className="cursor-pointer hover:text-white"> My Playlist #3 </p>
            <p className="cursor-pointer hover:text-white"> My Playlist #4 </p>
            <p className="cursor-pointer hover:text-white"> My Playlist #5 </p>
            <p className="cursor-pointer hover:text-white"> My Playlist #6 </p>
            <p className="cursor-pointer hover:text-white"> My Playlist #7 </p>
            <p className="cursor-pointer hover:text-white"> My Playlist #8 </p>
            <p className="cursor-pointer hover:text-white"> My Playlist #9 </p>
            <p className="cursor-pointer hover:text-white"> My Playlist #10 </p>
            <p className="cursor-pointer hover:text-white"> My Playlist #11 </p>
            <p className="cursor-pointer hover:text-white"> My Playlist #12</p>
            <p className="cursor-pointer hover:text-white"> My Playlist #13 </p>
        </div>
    </div>
  );
}

export default Sidebar;