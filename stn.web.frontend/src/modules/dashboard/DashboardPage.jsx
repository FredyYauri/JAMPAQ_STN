import { useEffect } from "react";
import { useCatchFetch } from "../../hooks/useCatchFetch";
import { prueba } from "../../services/Services";

const { SendFetch } = useCatchFetch();
const DashboardPage = () => {
    useEffect(() => {
        console.log('DashboardPage');
        SendFetch(prueba())
            .then((data) => {
                console.log('data', data);
            });
    }, []);
    const refresh = () => {
        console.log('Refresh');
        SendFetch(prueba())
            .then((data) => {
                console.log('data', data);
            });
    }
    return (
        <div> <h1> Dashboard</h1>
        <button onClick={refresh}>Click</button> </div>
    )
}

export default DashboardPage;