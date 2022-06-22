const Dropdown = ({ changeFoodData }) => {
    return (
        <nav>
            <h2>Dynamic Dropdown</h2>
            <select className="menu" onChange={changeFoodData}>
                <option value="เมนูทั้งหมด">Total menu</option>
                <option value="ผัด-ทอด">Fried food</option>
                <option value="แกง-ต้มยำ">Curry</option>
                <option value="เครื่องดื่ม">Drinks</option>
                <option value="สเต็ก">Steak</option>

            </select>
        </nav>
    )
}
export default Dropdown