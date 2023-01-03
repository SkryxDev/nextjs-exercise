import axios from 'axios'
import React from 'react'

export default async function Api() {
    const [data, setData] = React.useState([])
    await axios.get('https://localhost:3001/users').then(res => setData(res.data))
    
    const posthandleSubmit = async event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
    
        try {
          const res = await axios.post('https://localhost:3001/users/new', data);
          console.log(res.data);
        } catch (err) {
          console.error(err);
        }
    }
    const deletehandleSubmit = async event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
    
        try {
          const res = await axios.delete(`https://localhost:3001/users/delete/` + data.username, data);
          console.log(res.data);
        } catch (err) {
          console.error(err);
        }
    }

    return(
    <div className="margin-allll">
      <style jsx>{
      `
        .margin-allll{
          margin-left:15px;
        }
      `
      }</style>
        <h1>Get request</h1>
        {
        data.map((item) => (
          <div key={item._id}>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title"><b>User</b></h5>
                    <p className="card-text"><b>Username: </b>{item.username}</p>
                    <p className="card-text"><b>Job: </b>{item.job}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted"><b>ID: </b>{item._id}</small>
                  </div>
                </div>
              </div>
            </div>
            <br/>
          </div>
        ))}
          <h1>Post request</h1>
        <div className="input-group mb-3">
          <form onSubmit={posthandleSubmit}>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="username"/>
              <br/>
                <input type="text" className="form-control" placeholder="Job" aria-label="Job" aria-describedby="basic-addon1" name="job"/>
              <br/>
              <button type="submit" className="btn btn-outline-success">Aggiungi</button>
          </form>
          </div>
          <h1>Delete request</h1>
          <div className="input-group mb-3">
          <form onSubmit={deletehandleSubmit}>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="username"/>
              <br/>
              <button type="submit" className="btn btn-outline-danger">Elimina</button>
          </form>
          </div>
    </div>
    )
}
