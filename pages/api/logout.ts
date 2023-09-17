// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cookies from 'cookies';
import httpProxy from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from 'next'

const proxy = httpProxy.createProxyServer();

// Customer config when send data, no parser data json -> send data direct to server 
export const config = {
  api: {
    bodyParser: false
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if(req.method !== 'POST') {
    res.status(404).json({ message: 'Method not supported' })
  }

  const cookies = new Cookies(req, res);
  cookies.set('access_token');

  res.status(200).json({ message: 'Logout successfully' });
}
