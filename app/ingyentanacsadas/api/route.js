import mysql from 'mysql2/promise';
import { NextResponse } from "next/server";
import { logger } from '@/app/winston';

export const POST = async (req) => {
  logger.info('POST /api/ingyentanacsadas', { req });

  const { name, email, babyAge, feedback, comparison } = await req.json();
  logger.info('ingyentanacsadas form data', { name, email, babyAge, feedback, comparison });

  let connection;
  
  try {
    // Create connection inside the request handler
    connection = await mysql.createConnection({ 
      host     : '92.119.122.2',
      port     : 3306,
      user     : process.env.MYSQL_USER,
      password : process.env.MYSQL_PASSWORD,
      database : 'horodzas_index'
    });

    const query = `INSERT INTO free_consultation (name, email, baby_age, feedback, comparison) VALUES (?, ?, ?, ?, ?)`;
    const values = [name, email, babyAge, feedback, comparison];

    const [rows, fields] = await connection.execute(query, values);
    logger.info('Successfully inserted ingyentanacsadas', { rows, fields });
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    logger.error('Error inserting ingyentanacsadas', { err });
    if (err.code === 'ER_DUP_ENTRY') {
      return NextResponse.json({ error: 'Már jelentkezél az ingyenes tanácsadásra.' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Hiba történt a mentés során, kérlek írj elérhetőségeim bármelyikén.' }, { status: 500 });
  } finally {
    // Always close the connection
    if (connection) {
      try {
        await connection.end();
      } catch (closeErr) {
        logger.error('Error closing connection', { closeErr });
      }
    }
  }
}