import fetcher from './fetcher';
import { Character } from '../types/Character';

export default async function getCharacters(
  phrase: string,
): Promise<Character[]> {
  try {
    const {data}: {data: { results: Character[]}} = await fetcher.get(`?name=${phrase}`);
    return data.results.map(ch => ({ id: ch.id, name: ch.name, image: ch.image, favourite: false, created: ch.created}));
  } catch (err) {
    throw new Error("Exception occuried and cannot fetch characters.");
  }
}