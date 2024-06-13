import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Card = styled.div`
  width: 20%;
  max-width: 200px;
  cursor: pointer;
  color: gray;

  div:hover {
    color: white;
  }
`;

const Avatar = styled.img`
  width: 100%;
  border-radius: 0.2rem;
`;

const Name = styled.h2`
  color: gray;
  text-align: center;
`;

export default function Profile(props) {
  const { profile, setActiveProfile } = props;

  const { name, avatar } = profile;

  const history = useHistory();

  const activeProfileHandler = () => {
    setActiveProfile(profile);
    history.push("/home");
  };
  return (
    <Card onClick={activeProfileHandler}>
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </Card>
  );
}
