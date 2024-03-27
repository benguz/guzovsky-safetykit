import fs from 'fs';
import path from 'path';

// Read the JSON data from a file synchronously once at startup
const jsonData = fs.readFileSync(path.join(process.cwd(), 'data/listings.json'), 'utf8');
const listings = JSON.parse(jsonData);

export async function GET(request) {
  const { searchParams } = new URL(request.url, 'http://localhost');

  const pageSize = searchParams.get('pageSize') ? parseInt(searchParams.get('pageSize')) : 10;
  const offset = searchParams.get('offset') ? parseInt(searchParams.get('offset')) : 0;
  const q = searchParams.get('q') || '';

  // Filter the listings based on the search query
  const filteredListings = listings.filter(listing =>
    listing.title.toLowerCase().includes(q.toLowerCase())
  );

  // Apply pagination to the filtered listings
  const response = filteredListings.slice(offset, offset + pageSize);

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}