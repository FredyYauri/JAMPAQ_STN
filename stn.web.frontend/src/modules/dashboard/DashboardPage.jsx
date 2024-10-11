import { useCatchFetch } from "../../hooks/useCatchFetch";
import { useNavigate } from "react-router-dom";
const DashboardPage = () => {
    const navigate = useNavigate();
    const goProduct = () => {
        navigate('/productos');
    }
    return (
        <div> <h1> Dashboard</h1>
        <button onClick={goProduct}>Fetch</button>
        </div>
    )
}

export default DashboardPage;