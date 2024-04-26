import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/images',
      {
        model: 'text-dall-e-003',
        prompts: ['a white siamese cat'],
        image_width: 1024,
        image_height: 1024,
      },
      {
        headers: {
          Authorization: 'Bearer sk-proj-Bog57JOeIY8MjseIp6NKT3BlbkFJWruHOjyJExhOguY83vnI',
          'Content-Type': 'application/json',
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}
