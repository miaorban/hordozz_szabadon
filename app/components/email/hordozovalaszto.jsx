import { Html, Button, Row, Column, Link, Img,
  Hr, Tailwind, Font, Head, Container
 } from "@react-email/components";
import { backIn } from "framer-motion";

export default function Email(props) {
  const { 
    name = 'Mia',
    carrier1 = "carrier1", 
    carrier1_desc = "carrier1_desc", 
    carrier2 = "", 
    carrier2_desc = "", 
    carrier3 = "", 
    carrier3_desc = "", 
    carrier4 = "", 
    carrier4_desc = "", 
  } = props;

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
              <b style={title}>Kedves {name}!</b>
            </div>
            <p className="mb-3">Örülök, hogy részt vettél a hordozóválasztó konzultáción! 🤗</p>
            <p className="mb-3">🎯 Az alábbiakban összegyűjtöttem azokat a hordozókat, amelyek az igényeid alapján 
              jól passzolhatnak hozzátok.</p>
          </Column>
        </Row>
        <Row style={row} className="px-4">
          <div className="mb-3">
              <p className="mb-1">🔸<b>{carrier1}</b> - {carrier1_desc}</p>
              {
                carrier2 && <p>🔸<b>{carrier2}</b> - {carrier2_desc}</p>
              }
              {
                carrier3 && <p>🔸<b>{carrier3}</b> - {carrier3_desc}</p>
              }
              {
                carrier4 && <p>🔸<b>{carrier4}</b> - {carrier4_desc}</p>
              }
            </div>
            <p>
              Ha szeretnéd őket kipróbálni, nálam lehetőség van hordozókölcsönzésre.
              Írj, és megbeszéljük a részleteket! 😊
            </p>
        </Row>
        <Row style={row}>
          <Hr style={hr}/>
        </Row>
        <Row style={row}>
          <Column align="center">
            <Img
                  style={img}
                  alt="Hordozz Szabadon"
                  // src="https://www.hordozzszabadon.hu/hordozovalaszto_email.png"
                  src="http://localhost:3001/hordozovalaszto_email.png"
                  width="auto"
                  height="300"
                />
          </Column>
        </Row>
        <Row style={row} className="mt-6">
          <p className="mb-2" style={title}>🔍 Már van hordozód? Nézzük meg, jól állítottad-e be!</p>
          {/* <p className="mb-2">Ha már van egy hordozód, de bizonytalan vagy a beállításokban
            vagy a baba nem érzi magát kényelmesen benne, segítek!</p>*/}
          <p> 
            A <b><Link href="https://hordozzszabadon.hu/fitcheck" style={linkStyle}>FitCheck</Link> online beállítás ellenőrzés </b>
             során beküldöd a képeidet, én pedig egy válaszvideóban segítek, hogy még szuperebb legyen a beálllítás.
          </p>

          <Row style={row} className="py-4 mt-3">
            <Column align="center">
              <Button className="mr-2 shadow-lg" style={videoButton} 
              href="https://hordozzszabadon.hu/fitcheck"><b>TOVÁBB A FITCHECKRE</b></Button>
            </Column>
          </Row>
        </Row>

        <Row style={row}>
          <Hr style={hr}/>
        </Row>

        <Row style={row} className="mt-3">
          <p style={title} className="mb-2">❓ Kérdésed van vagy elakadtál?</p>
          <p className="mb-3">Ne feledd, hogy a hordozás tanulható! Ha szeretnél több eszközt kipróbálni, elmélyülni a beállításokban, vagy egyéni segítséget kapni, 
            tanácsadásaimmal támogatlak ebben. 💡</p>
          <p className="mb-2">
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

const title = {
  fontSize: '20px',
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
  backgroundPosition: 'bottom',
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