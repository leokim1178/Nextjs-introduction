import { useRouter } from "next/router";
import PageHead from "../../components/PageHead";

export default function Detail({ params }) {
  const router = useRouter();
  console.log(router.query.id);
  const [title, id] = params || [];

  return (
    <div>
      <PageHead title={title}></PageHead>
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
