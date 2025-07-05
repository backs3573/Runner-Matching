import Header from '../components/Header';
import ProfileList from '../components/ProfileList';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto py-8">
        <ProfileList />
      </main>
    </div>
  );
}
