import MatchDetailsClient from './MatchDetailsClient';

export async function generateStaticParams() {
  const matchIds = ['1', '2', '3', '4', '5'];
  const params = matchIds.map(id => ({ id }));
  return params;
}

export default function MatchDetailsPage({ params }: { params: { id: string } }) {
  console.log('MatchDetailsPage params:', params); // Add logging
  return (
    <div>
      <MatchDetailsClient matchId={params.id} />
    </div>
  );
}
