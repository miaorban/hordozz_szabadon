import 'server-only'

import { cookies } from 'next/headers'
import { decrypt, encrypt } from '@/app/utils/session'
import { redirect } from 'next/navigation';
 
export const verifySession = async () => {
  try {
    const cookie = (await cookies()).get('session')?.value
    console.log('cookiecookie ', cookie);
    const session = await decrypt(cookie)
    console.log('sessionsession ', session);
    if (!session.userId) {
      redirect('/admin');
    }
    return { isAuth: true, userId: session.userId }
  } catch (error) {
    redirect('/admin');
    return { isAuth: false, userId: null }
  }
  
}

export async function createSession(userId) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = await encrypt({ userId, expiresAt })
  const cookieStore = await cookies()
 
  cookieStore.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}