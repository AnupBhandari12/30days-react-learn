import ChatBox from "./components/ChatBox";

export default function Home() {

  return (
    <main>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          ChatFlow AI
        </h2>
      </div>


      <ChatBox />
    </main>
  )
}