import { useState } from 'react';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  return (
    <button
      className={`mt-4 px-4 py-2 rounded ${liked ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-700'}`}
      onClick={() => setLiked(!liked)}
    >
      {liked ? 'いいね済み' : 'いいね'}
    </button>
  );
}
