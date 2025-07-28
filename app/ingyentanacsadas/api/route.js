import mysql from 'mysql2/promise';
import { NextResponse } from "next/server";
import { logger } from '@/app/winston';

const pool = mysql.createPool({
  host     : '92.119.122.2',
  port     : 3306,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : 'horodzas_index'
});

export const POST = async (req) => {
  logger.info('POST /api/ingyentanacsadas', { req });

  const { name, email, babyAge } = await req.json();
  logger.info('ingyentanacsadas form data', { name, email, babyAge });

  const query = `INSERT INTO free_consultation (name, email, baby_age) VALUES (?, ?, ?)`;
  const values = [name, email, babyAge];

  try {
    const [rows, fields] = await pool.query(query, values);
    logger.info('Successfully inserted ingyentanacsadas', { rows, fields });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return NextResponse.json({ error: 'Már jelentkezél az ingyenes tanácsadásra.' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Hiba történt a mentés során, kérlek írj elérhetőségeim bármelyikén.' }, { status: 500 });
  }


}