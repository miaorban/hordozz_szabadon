import { Html, Button, Row, Column, Link, Img,
  Hr, Tailwind
 } from "@react-email/components";

export default function Email(props) {
  const { link = "drive", name = 'Mia' } = props;

  return (
    <Tailwind>
    <Html lang="en">
      <div>
        <Row style={row}>
          <Column align="center">
            <div style={emailContainer}>
              <b>Kedves {name}!</b>
            </div>
            Elkészült a személyre szabott fitcheck videód ✅. Az alábbi gombra kattintva érheted el.
            <Row style={row}>
              <Column align="center" className="py-4">
                <Button href={link} style={videoButton}>
                  Videó megtekintése
                </Button>
              </Column>
            </Row>
            <p style={{fontSize: '12px'}}>Ha bármilyen kérdésed felmerül, nyugodtan írj nekem!</p>
          </Column>
        </Row>
        <Row style={row}>
          <Hr style={hr}/>
        </Row>
        <Row style={row}>
          <Column align="center">
            <Img
                  alt="Hordozz Szabadon"
                  src="http://hordozzszabadon.hu/fitcheck_main.png"
                  width="300"
                  height="300"
                />
          </Column>
        </Row>
        <Row style={row}>
          <p style={mb}>📢 Tudtad? A fitcheck mellett 3 másik hasznos szolgáltatást is kínálok
            <b> online</b> és személyesen is.
          </p>
          <p>
            <Link href="http://hordozzszabadon.hu/tanacsadas#hordozovalaszto">
            👶 Hordozóválasztó – ONLINE (20 perc)
            </Link> – Segítek hordozót választani a végtelennek tűnő opciók közül.
          </p>
          <p>
            <Link href="http://hordozzszabadon.hu/tanacsadas#mini">
            🔹 Mini tanácsadás (30 perc)
            </Link>
              - Ha már van hordozód, de bizonytalan vagy a használatában vagy ha új és eszközöket próbálnál ki.
          </p>
          <p>
            <Link href="http://hordozzszabadon.hu/tanacsadas#maxi">
            🔸 Maxi tanácsadás (90 perc)
            </Link>
              - Ha teljesen kezdő vagy, és szeretnéd alaposan megtanulni a hordozás alapjait, több eszközt kipróbálni
             vagy részletes segítséget kapni. 
            </p>

          <Row style={row} className="py-4">
            <Column align="center">
              <Button className="mr-2" style={videoButton} href="https://app.minup.io/book/hordozz-szabadon">IDŐPONTFOGLALÁS</Button>
              <Button className="ml-2" style={videoButton}  href="ww.hordozzszabadon.hu">TOVÁBBI INFÓK</Button>
            </Column>
          </Row>
          
          <p style={mb} className="mt-2">🌿 Hordozz szabadon és élvezd a babád közelségét! 🤱</p>
          <p style={{ marginBottom: '0' }}>Üdv,</p>
          <p>Mia</p>
        </Row>
      </div>
    </Html>
    </Tailwind>
  );
}

const cta = {
  display: 'flex',
  justifyContent: 'space-evenly',
  paddingTop: '20px',
  paddingBottom: '20px',
}

const mb = {
  marginBottom: '20px',
}

const row = { maxWidth: '500px' };

const hr = {
  margin: '20px 0',
  border: '1px solid #AB967F',
}

const emailContainer = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '20px',
  paddingBottom: '20px',
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover',
  // backgroundPositionY: '50px',
  // backgroundUrl: 'https://hordozzszabadon.hu/bg_self_introduction.png',
}

const buttonContainer = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '20px',
  paddingBottom: '20px',
}

const videoButton = {
  backgroundColor: '#AB967F',
  color: 'white',
  borderRadius: '25px',
  padding: '15px 20px',
  textDecoration: 'none',
  marginLeft: '5px',
  marginRight: '5px',
}