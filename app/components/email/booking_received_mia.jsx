import { Html, Row, Column, Link,
  Tailwind, Font, Head, Container
 } from "@react-email/components";

export default function ConsultationConfirmation(props) {
  const { 
    date = "2022.01.22.", 
    time = '09:00', 
    name = 'Mia', 
    online = false, 
    type = 'Mini tanácsadás',
    description = '',
    babyWeight = '',
    babyAge = '',
    email = '' } = props;

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
              <p className="mb-1">📅 <b>Időpont:</b> { date } { time }</p>
              <p className="mb-1">🔶 <b>Típus:</b> { type }</p>
              <p className="mb-1">🔶 <b>Email:</b> { email }</p>
              {
                online ?
                <p>📍 <b>Helyszín: </b>
                <Link href="https://meet.google.com/yqe-ssbb-ezp"
                 style={linkStyle}>Google Meet</Link></p>
                : <p>📍 <b>Helyszín: </b>Keszthely, Ruszek József u. 54</p>
              }

              <p className="mb-1">🔶 <b>Baba kora:</b> { babyAge }</p>
              <p className="mb-1">🔶 <b>Baba súlya:</b> { babyWeight }</p>
              <p className="mb-1">🔶 <b>Leírás:</b> { description }</p>
            </Row>
            </Column>
        </Row>
      </Container>
    </Html>
    </Tailwind>
  );
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

const row = { maxWidth: '500px' };

const emailContainer = {
  paddingTop: '20px',
  paddingBottom: '20px',
}
