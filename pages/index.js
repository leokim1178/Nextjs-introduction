import NavBar from "./NavBar";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <h1 className="active">Hello</h1>
      <style jsx>{`
        a {
          color: blue;
        }
      `}</style>
    </div>
  );
}
