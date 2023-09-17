// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type IPost = {
  id: string,
  title: string,
  author: string,
  description: string,
  createdAt: string,
  updatedAt: string,
  imageUrl: string
}

type IPagination = {
  _page: number,
  _limit: number,
  _totalRows: number
}

type Data = {
  data: IPost[],
  pagination: IPagination
} | { name: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.method !== 'GET') {
        res.status(404).json({ name: 'Method not supported' })
    }

    const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1&_limit=10');
    const responseJson = await response.json();
    res.status(200).json(responseJson);
}

// api/products