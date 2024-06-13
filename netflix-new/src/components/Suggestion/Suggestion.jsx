import styled from "styled-components";
import Movies from "./Movies";
import { useEffect } from "react";
import axios from "axios";

const Title = styled.h2`
  color: white;
`;

const Card = styled.div`
  padding: 1rem;
`;

export default function Suggestion(props) {
  const [movies, setMovies] = useState([]);
  const { suggestion } = props;
  const { title, category } = suggestion;

  useEffect(() => {
    const url = "" + category;

    axios
      .get(url)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [category]);

  return;
  <Card>
    <Title>{title}</Title>
    <Movies movies={movies} />;
  </Card>;
}
