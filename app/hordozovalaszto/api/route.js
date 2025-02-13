export const dynamic = 'force-dynamic'
import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";
import { logger } from '@/app/winston';

export const POST = async (req) => { 
  logger.info('POST /api/hordozovalaszto', { body: req.body });
  
  
  return NextResponse.json({ message: 'Mail sent successfully' });
}