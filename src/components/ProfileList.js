import profiles from './dummyData';
import ProfileCard from './ProfileCard';

export default function ProfileList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {profiles.map(profile => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}
