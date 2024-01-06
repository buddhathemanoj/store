import { useNavigate } from 'react-router-dom';
import { GrLinkNext } from 'react-icons/gr';

const Welcome = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate('/nextpage');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100" style={{ marginTop: '-40px' }}>
      <div className="bg-green-500 rounded-full p-4 mb-8">
        <div className="w-60 h-60 flex items-center justify-center rounded-full overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/man-browsing-social-media_1308-120816.jpg?w=826&t=st=1704521397~exp=1704521997~hmac=b6dca741c41b784bfa4dd63d23a6be74bd99cf8395a99ce7c00ab18948da768a"
            alt="Your Image"
            className="w-full h-full object-cover cursor-pointer"
            onClick={handleNextPage}
          />
        </div>
      </div>

      <h2 className="text-black font-bold text-center mb-2">
        Browse all the Categories
      </h2>

      <p className="text-center text-size-18 text-sm"> {/* Here, I added text-sm class */}
        in aliquip exercitation ut et nisi ut mollit. <br /> Deserunt dolor elit pariatur aute.
      </p>
      <br /> 
      <br />

      <div className="bg-green-500 rounded-full p-1">
        <GrLinkNext className="text-white" size={24} onClick={handleNextPage} />
      </div>
    </div>
  );
};
export default Welcome;