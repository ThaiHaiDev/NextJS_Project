// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
  return new Promise((resolve) => {
    // don't send cookies to API server
    req.headers.cookie = '';
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false
    })

    proxy.once('proxyRes', () => {
      resolve(true);
    })
  })
 
}
