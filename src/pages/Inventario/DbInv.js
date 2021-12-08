import Navbar from "../../components/Navbar"
import Reportes from "../../components/Inventario/Reportes";
import MasVendido from "../../components/Inventario/MasVendido";

const DbInv = () => {
    return(
    <div>
        <Navbar />
        <Reportes />
        <MasVendido />
    </div>)
}

export default DbInv;