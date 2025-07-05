import LikeButton from './LikeButton';

export default function ProfileCard({ profile }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <img src={profile.image} alt={profile.name} className="w-24 h-24 rounded-full mb-4" />
      <h2 className="text-xl font-bold">{profile.name}</h2>
      <p className="text-gray-600">{profile.age}歳・{profile.location}</p>
      <p className="mt-2">{profile.intro}</p>
      <LikeButton />
    </div>
  );
}
