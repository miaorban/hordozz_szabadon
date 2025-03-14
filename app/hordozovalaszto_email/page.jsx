import { Html, Button, Row, Column, Link, Img,
  Hr, Tailwind, Font, Head, Container
 } from "@react-email/components";

export default function Email(props) {
  const { link = "drive", name = 'Mia' } = props;

  return (
    <Tailwind>
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.cdnfonts.com/s/16009/Poppins-Regular.woff",
            format: "woff",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Container style={container}>
        <Row style={row}>
          <Column align="center">
            <div style={emailContainer}>
              <b>Kedves {name}!</b>
            </div>
            Elkészült a személyre szabott fitcheck videód ✅ Az alábbi gombra kattintva érheted el.
            <Row style={row}>
              <Column align="center" className="py-4">
                <Button href={link} style={videoButton} className="shadow-lg">
                  Videó megtekintése
                </Button>
              </Column>
            </Row>
            <p style={{ fontSize: '12px' }}>Ha bármilyen kérdésed felmerül, nyugodtan írj nekem!</p>
          </Column>
        </Row>
        <Row style={row}>
          <Hr style={hr}/>
        </Row>
        <Row style={row}>
          <Column align="center">
            <Img
                  style={img}
                  alt="Hordozz Szabadon"
                  src="https://i.postimg.cc/SQgCk31W/fitcheck-main.png"
                  width="auto"
                  height="300"
                />
          </Column>
        </Row>
        <Row style={row} className="my-6">
          <p style={mb}>📢 Tudtad? A fitcheck mellett 3 másik hasznos szolgáltatást is kínálok
            <b> online</b> és személyesen is.
          </p>
          <p>
            <Link href="https://hordozzszabadon.hu/tanacsadas#hordozovalaszto" style={linkStyle}>
            👶 Hordozóválasztó – ONLINE (20 perc)
            </Link> – Segítek hordozót választani a végtelennek tűnő opciók közül.
          </p>
          <p>
            <Link href="https://hordozzszabadon.hu/tanacsadas#mini" style={linkStyle}>
            🔹 Mini tanácsadás (30 perc)
            </Link>
              - Ha már van hordozód, de bizonytalan vagy a használatában vagy ha új eszközöket próbálnál ki.
          </p>
          <p>
            <Link href="https://hordozzszabadon.hu/tanacsadas#maxi" style={linkStyle}>
            🔸 Maxi tanácsadás (90 perc)
            </Link>
              - Ha teljesen kezdő vagy és szeretnéd alaposan megtanulni a hordozás alapjait, több eszközt kipróbálni
             vagy részletes segítséget kapni. 
            </p>

          <Row style={row} className="py-4 my-4">
            <Column align="center">
              <Button className="mr-2 shadow-lg" style={videoButton} href="https://app.minup.io/book/hordozz-szabadon"><b>IDŐPONTFOGLALÁS</b></Button>
              <Button className="ml-2 shadow-lg" style={videoButton}  href="www.hordozzszabadon.hu"><b>TOVÁBBI INFÓK</b></Button>
            </Column>
          </Row>
          
          <p style={mb} className="mt-2">🌿 Hordozz szabadon és élvezd a babád közelségét! 🤱</p>
          <p className="mb-0">Üdv,</p>
          <p>Mia</p>
          <Link href="https://hordozzszabadon.hu" style={linkStyle}>www.hordozzszabadon.hu</Link>
        </Row>
      </Container>
    </Html>
    </Tailwind>
  );
}

const img = {
  WebkitFilter: 'drop-shadow(5px 5px 5px #AB967F)',
  filter: 'drop-shadow(5px 5px 5px #AB967F)',
  borderRadius: '50%',
}

const linkStyle = {
  fontWeight: 'bold',
  color: '#AB967F',
}

const container = {
  backgroundImage: 'url("https://hordozzszabadon.hu/maxi_consultation_bg.png")',
  backgroundPositionY: '200px',
  backgroundRepeat: 'no-repeat, no-repeat',
  border: '1px solid #AB967F',
  padding: '40px',
  fontSize: '16px',
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