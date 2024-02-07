import {useState } from "react";
import {Observer } from "mobx-react";
import BusinessData from "./BusinessData";


const EditBusinessData=(Observer(({func})=> {

  const [business, setBusineess] = useState({
    name: "תכנות בקלות",
    address: "הרב יעקב לנדא 9 בני ברק",
    phone: "052-7162595",
    owner: "חוה ירט",
    logo: "",
    description: "מורה פרטית לשפות התכנות",

  });

  

  const handleSubmit = (event) => {
    event.preventDefault();
    func()
    BusinessData(business);
    console.log(business);
  }

  const handleChange = (event) => {
    const { name, value } = event.target.value;
    setBusineess({ ...business, [name]: value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input type='text' name='name' value={business.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          address:
          <input type='text' name='address' value={business.address} onChange={handleChange} />
        </label>
        <br />
        <label>
          phone:
          <input type='text' name='phone' value={business.phone} onChange={handleChange} />
        </label>
        <br />
        <label>
          owner:
          <input type='text' name='owner' value={business.owner} onChange={handleChange} />
        </label>
        <br />
        <label>
          logo:
          <input type='text' name='logo' value={business.logo} onChange={handleChange} />
        </label>
        <br />
        <label>
          description:
          <input type='text' name='description' value={business.description} onChange={handleChange} />
        </label>
        <br />
        <button type='submit'>שמירה</button>
      </form>
    </>
  )


}))

export default EditBusinessData
