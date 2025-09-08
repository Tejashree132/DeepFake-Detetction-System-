import { Response } from '@/types/response';

export const getDetection = async (file: File): Promise<Response> => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const URL = `${process.env.NEXT_PUBLIC_BASE_URL}/detect`;
    const data: Response = await fetch(URL, {
      method: 'POST',
      body: formData,
    }).then((res) => res.json());

    return data;
  } catch (error) {
    return error as Response;
  }
};
