import Link from "next/link";
import { useRouter } from "next/router";
import PageHead from "../components/PageHead";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (movie) => {
    router.push(
      `/movies/${movie.original_title}/${movie.id}` // as로 쿼리를 숨길수 있다
    );
  };
  return (
    <div className="container">
      <PageHead title="Home" />
      {results?.map((movie) => (
        <div onClick={() => onClick(movie)} className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>
            <Link
              legacyBehavior
              href={`/movies/${movie.original_title}/${movie.id}`}
            >
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// 함수 이름 unchangeable
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
