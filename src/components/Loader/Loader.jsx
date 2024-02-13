
import { Spinner } from 'reactstrap';
import './Loader.css'; // Import the CSS file

function Loader() {
  return (
    <div className="spinner-container">
      <Spinner
        color="primary"
        className="spinner-style"
        type="grow"
      />
      <span className="loading-text">Loading...</span>
    </div>
  );
}

export default Loader;
