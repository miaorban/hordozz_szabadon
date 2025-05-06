import { Html, Row, Column, Link, Img,
  Hr, Tailwind, Font, Head, Container
 } from "@react-email/components";

export default function ConsultationConfirmation(props) {
  const { date = "2022.01.22.", name = 'Mia', online = false } = props;

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
            <p>Foglaládodról értesítést kaptam és a lefoglalt időpontot igyekszem mielőbb megerősíteni.</p>
            <Row style={row} className="my-6">
              <p className="mb-1">📅 <b>Időpont:</b> { date }</p>
              {
                online ?
                <p>📍 <b>Helyszín: </b>
                <Link href="https://meet.google.com/imu-gzte-xrm"
                 style={linkStyle}>Google Meet</Link></p>
                : <p>📍 <b>Helyszín: </b>Keszthely, Ruszek József u. 54</p>
              }
            </Row>
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
        <Row style={row} className="my-6">
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
