// req = HTTP incoming message, res = HTTP server response
import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse) => {
 res.status(200).json({ text: 'Hello' })
}
