import { Html, Button, Row, Column, Link, Img,
  Hr, Tailwind, Font, Head, Container
 } from "@react-email/components";

export default function ConsultationConfirmation(props) {
  const { date = "2022.01.22.", name = 'Mia', type = 'carrier', online = false } = props;

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
              <b className="text-lg">Kedves {name}!</b>
            </div>
            <p>Köszönöm, hogy megtiszteltél bizalmaddal és időpontot foglaltál konzultációra. 😊</p>
            
            {
              online &&
                <Row style={row}>
                <Column align="center" className="py-4">
                  <p>📌 <b>Időpont:</b> { date }</p>
                  <Button href="https://meet.google.com/yqe-ssbb-ezp" style={videoButton} className="shadow-lg uppercase">
                    BELÉPÉS A KONZULTÁCIÓRA
                  </Button>
                </Column>
              </Row>
            }
            {
              !online &&
                <Row style={row} className="my-6">
                  <p className="mb-1">📅 <b>Időpont:</b> { date }</p>
                  <p>📍 <b>Helyszín:</b>Keszthely, Ruszek József u. 54</p>
                </Row>
            }
            <b className="font-bold mb-4 text-lg">Mivel érdemes készülnöd?</b>
            {
              type == 'carrier' &&
                <p>🌿 A konzultáció során segítek kiválasztani a legmegfelelőbb hordozót a számotokra.
                  Ha vannak kérdéseid, nyugodtan írd össze őket, hogy ne maradjon megválaszolatlanul semmi! 😊
                </p>
            }
            {
              type == "mini/maxi" &&
                <p>🌿 A konzultáció során átbeszéljük a kérdéseidet (nyugodtan írd össze őket, hogy ne maradjon megválaszolatlanul semmi)
                  és gyakoroljuk a kötést/beállítjuk a hordozódat. 😊
                </p>
            }
            <p className="mt-4" style={{ fontSize: '12px' }}>Ha bármilyen kérdésed felmerül, nyugodtan írj nekem!</p>
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
                  src="https://www.hordozzszabadon.hu/hordozovalaszto_email.png"
                  width="auto"
                  height="300"
                />
          </Column>
        </Row>
        <Row style={row} className="mt-4">
          <b className="text-lg">Tudtad?</b>
          <p>👉 A konzultáció után is segítek! Ha szeretnéd ellenőrizni, hogy megfelelően használod 
            a hordozót, válaszd a Fitcheck szolgáltatást – online, beküldött fotók alapján ellenőrzöm 
            a beállításokat.</p>
          <p>👉 Bármikor foglalhatsz online vagy személyes konzultációra időpontot. Ha új hordozód van, amit szeretnél beállítani,
            váltanál és a választásban kell segítség vagy elakadási ponthoz értél, várlak szeretettel! 😊
          </p>
        </Row>
        <Row style={row} className="my-12">
            <Column align="center">
              <Button className="mr-1 shadow-lg" style={videoButton} 
              href="https://hordozzszabadon.hu/fitcheck"><b>KONZULTÁCIÓK</b></Button>
            </Column>
            <Column align="center">
              <Button className="ml-1 shadow-lg" style={videoButton} 
              href="https://hordozzszabadon.hu/fitcheck"><b>TOVÁBB A FITCHECKRE</b></Button>
            </Column>
          </Row>
        <Row style={row} className="my-6">
          <b className="text-lg">Nem vagy biztos a választásban?</b>
          <p style={mb}>👉 Nálam lehetőséged van hordozók bérlésére, így kipróbálhatod, 
            mielőtt döntesz! Kérdezz róla a konzultáción vagy írj nekem!
          </p>
          <p style={mb} className="mt-2">🌿 Hordozz szabadon és élvezd a babád közelségét! 🤱</p>
          <p className="mb-0">Várlak szeretettel,</p>
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