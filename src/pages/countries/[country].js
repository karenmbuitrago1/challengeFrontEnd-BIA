import { useRouter } from "next/router";
import CountryDetail from "../../components/CountryDetail";
import { getAllCountries } from "../../lib/api";

const CountryPage = ({ country }) => {
  const router = useRouter();

  // Manejar el caso en el que no se haya cargado la información del país aún
  if (router.isFallback) {
    return <div>Loading...</div>;
  } return (
    <div>
      <CountryDetail country={country} />
    </div>
  );
};

// Obtener una lista de todos los nombres de países
export async function getStaticPaths() {
  const countries = await getAllCountries();
  const paths = countries.map((country) => ({
    params: { country: country.name.common },
  }));

  return { paths, fallback: true };
}

// Obtener los datos del país según el nombre en los parámetros de la URL
export async function getStaticProps({ params }) {
  const countries = await getAllCountries();
  const country = countries.find(
    (c) => c.name.common === params.country
  );

  return {
    props: {
      country,
    },
  };
}

export default CountryPage;
