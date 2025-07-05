export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 mb-8">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Runner Matching</h1>
        <nav>
          <a href="#" className="ml-4 hover:underline">プロフィール一覧</a>
          <a href="#" className="ml-4 hover:underline">メッセージ</a>
        </nav>
      </div>
    </header>
  );
}
