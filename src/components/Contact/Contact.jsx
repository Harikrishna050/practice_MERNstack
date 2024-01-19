import { React, useEffect, useState } from 'react';
import { MdEmail } from "react-icons/md";
import SuccessContact from '../SuccessContact/SuccessContact';
import "./Contact.scss";
import axios from "axios";
import FormList from '../../pages/FormList';

axios.defaults.baseURL = "http://localhost:8080";

const Contact = () => {
  const [FormData, setFormData] = useState({
    id:"",
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [datalist, setdatalist] = useState([]);
  const [isContacted, setContact] = useState(false);
  const [isEdit, setEdit] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    });
  };

  const handleSubmit = async (e) => {
    if (isEdit) {
      e.preventDefault();
      const data = await axios.put("/update", FormData);
      if (data.data.success) {
        setContact(!isContacted);
        setdatalist(data.data.data)
        alert(data.data.message);
        getFetchData();
      } else {
        alert("something went wrong")
      }
    }
    else {
      e.preventDefault();
      const data = await axios.post("/submit", FormData);
      if (data.data.success) {
        setContact(!isContacted);
        setdatalist(data.data.data)
        alert(data.data.message);
        getFetchData();
      } else {
        alert("something went wrong")
      }
    }
  }

  const getFetchData = async () => {
    try {
      const data = await axios.get("/");
      if (data.data.success) {
        setdatalist(data.data.data)
        // console.log(data.data.data);
      } else {
        alert("something went wrong")
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
      alert("Something went wrong");
    }
  }

  useEffect(() => {
    getFetchData();
  }, []);
  return (
    <>
      {(!isContacted) && (
        <div id='contact' className='contact'>
          <div className="instruction">
            <MdEmail className='icon' />
            <p>Here is where you should write your message to readers to have them get in contact with you.</p>
          </div>
          <div className="rows">
            <div className="eight-rows">
              <form action="/submit" onSubmit={handleSubmit}>
                <div className="row">
                  <label htmlFor="" aria-required>Name</label>
                  <input type="text" name="name" id="" onChange={handleChange} value={FormData.name} required />
                </div>
                <div className="row">
                  <label htmlFor="" aria-required>Email</label>
                  <input type="email" name="email" id="" onChange={handleChange} value={FormData.email} required />
                </div>
                <div className="row">
                  <label htmlFor="" aria-required>Subject</label>
                  <input type="text" name="subject" id="" onChange={handleChange} value={FormData.subject} required />
                </div>
                <div className="row">
                  <label htmlFor="" aria-required>Message</label>
                  <textarea name="message" id="" cols="30" rows="10" onChange={handleChange} value={FormData.message} required></textarea>
                </div>
                <button type="submit">{isEdit?"Update":"Submit"}</button>
              </form>
            </div>
            <aside>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus et veritatis optio, a animi quia enim impedit iure ipsa dolorem, consequuntur atque ut numquam cum repellat! Id magnam alias inventore incidunt sapiente laboriosam facere fuga, a provident, quaerat voluptates libero iste ad temporibus dicta nam officiis voluptas. Totam vero culpa tempora atque, dolorem eveniet dolor odio ratione omnis porro laborum corporis, facere aliquid praesentium adipisci cum! Obcaecati hic labore ut neque necessitatibus! Dignissimos enim eveniet iusto beatae, iure similique quam porro quis provident nemo blanditiis nesciunt, illo autem, qui consequatur quisquam esse. </p>
            </aside>
          </div>
        </div>
      )}
      {(isContacted) && <SuccessContact />}
      {<FormList datalist={datalist} fetchData={getFetchData} setFormData={setFormData} setContact={setContact} setEdit={setEdit} />}
    </>
  )
}

export default Contact;
