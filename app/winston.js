
import { LoggingWinston } from "@google-cloud/logging-winston";
import winston from "winston";

const loggingWinston = new LoggingWinston({
  projectId: process.env.GCP_PROJECT_ID,
  credentials: {
    client_email: process.env.GCP_SA_CLIENT_EMAIL,
    private_key: `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDDoMykyvCSPZPf
VV5Bu+QMAZsvIer0zmlsAZdpsRJGAOaaT2D5MWPbLCs4drrnFqSImOmFNsb9Oru4
ZWTyg6fqNNy5CkhZmWEiM/9qg8UT+JdOSj1hC7hDH47CY56DlOEOF6o7a+k+RYkc
wfQS7AaPVobdW9hn/qwbS0cRQzmKKEp1AClMA+LGxpPe3OPXQqZFSY+5/x5X9dL0
DDi02/GMzKcAjsyNqVgFOInFXseGWitclua2prGMNCChrSbD5X1Ew2YaqLqvPDwt
fUsVaTidPvrkjJA9qmnyCgekxwTevcUpFDYw9NqqiEsTzk3dCGu4x7dVfJ9X7E6k
8xn6moOXAgMBAAECggEASJGCuHLLsQQEsakiUPIZE1cZMO+9D9juBHHGsB9Obwdw
g7eEeowWxbvpwIVSqdydZkqK/a6nPFKoRiveuZObG2dGpaGp2wrpnF17lxCQb+sc
fZ9Oi4xkawnu1C9OIvN8VNT0ghxypnX2+eL83nQNruhjGQQ0D8fKIknXcBDm7FeF
p5mpXB0+0A+b0JGIB9RMXWhXc7lLma4Y2BPGuLvTXyw0I4RmfWs06d2rx8rQA/KO
hzQq2SElvlp9UxNJQ+5SRDk71cEBrAGrCn/f8f5uf94A/ZsWBu0upqPFxGuiSGtJ
U5QDJOQILNci/Htb02oHnxMR5fNm6rXTb80QrSS72QKBgQDqp//3M9ig9SSKqvIt
l2XOLdcZgsQWMOIN7KnkP1CPi7uc5GWJVZk0db4wtKgh/VE2w+jkRuinIE/QqXpf
mLCuQjkvBqEURT7kGscz0jH8p9SK9GNbIe3AdjWQCRUND5y59JqmPsVF+10q0c94
qb/f9B0eNbqNQ8AjrVXQC3awZQKBgQDVbAZTHpi4LNy+QeW22z43Bkk0tOPpd8X/
nfsNPOrxgoo9LIetJ6OcbOwRQUBiQqJtpMrsyIMYCtJnZK9InUjQX4Qzp/MPGvI+
pA+KU9wsnOzS57m3qWs0a9SBS0ArzoXaKBvbWpoCS2mX0mSCYfG8CaHLkEUvBnGf
oqlyOHUeSwKBgQDmFmco+IBwiw8SnT4sMCiV+2LP0+X7sGDnsGiBsweGSUhkNZvO
Bs3bn5wm2+2EroPkxEJnG5Ri048Pli60795GcA7sKn7lhmR9fDhZesCi8dm5ipql
sGYU8pPgsNcgYG+X8t11J1V+IlQfeW0K7r+ClDW8+of6njUXho3/Gk599QKBgB2q
tH5dZHFFmzG/S0VN2Kohb4+qDXxor9dGiJ1geHA16y1xwTJqri2SXoZPgbmm9Zk0
LRkZDlALQRAqSMtZQcPlYyUjFYBmCIJ4n8hku9hfv/PZTlGfdU2GJ7YJVdRBEw4u
QSEOyRXEkdsO3fXZ05aF6D25wkQ1Kxo7rD46Zt1dAoGAOVkalO5Tk5vDplSffTQg
SW3DYVTO7dtWXQor9vg3sEOPuxj5Emx+4ImzC2OpI0WsNnGj4iauJc7K8UO7OZ/l
1pn0g2Lk1shSYhNjQRRI/0LaJG5pVxXQpHGTQSoAdVYXlptzc2C2OonGZNVxkw9j
kBp65gGxpqIbrSPfoa/U/S0=
-----END PRIVATE KEY-----`,
  }
});

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    loggingWinston,
  ],
});

export { logger };