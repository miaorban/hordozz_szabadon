import { Html, Button } from "@react-email/components";

export default function Email(props) {
  const { link, name } = props;

  return (
    <Html lang="en">
      <div>
        <b>Kedves {name}!</b>
      </div>
      <div style={buttonContainer}>
        <Button href={link} style={videoButton}>
          Videó megtekintése
        </Button>
      </div>
    </Html>
  );
}

const buttonContainer = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '20px',
}

const videoButton = {
  backgroundColor: '#AB967F',
  color: 'white',
  borderRadius: '25px',
  padding: '10px 20px',
  textDecoration: 'none',
}