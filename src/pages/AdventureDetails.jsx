import { useLoaderData, useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import Detail from '../components/Detail';

const AdventureDetails = () => {
  const { id } = useParams();
  console.log(id);
  const data = useLoaderData();

  const adventureDetails = data.find(
    detail => String(detail.id) === String(id)
  );

  return (
    <div>
      <Banner></Banner>

      {adventureDetails ? (
        <Detail key={adventureDetails.id} detail={adventureDetails}></Detail>
      ) : (
        <p>Details not found</p>
      )}
    </div>
  );
};

export default AdventureDetails;
