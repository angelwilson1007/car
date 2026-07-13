import React from 'react'
import Navigation from './Navigation'


const AddCar = () => {
  return (
    <div>
        <Navigation/>

        <div className="container">
            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">registration number</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">brand</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">model</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">vehicle-type</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">fuel-type</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">transmission</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">seating capacity</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">rent-per-day</label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">city </label>
                          <input type="text" className="form-control" />
                    </div>
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <label htmlFor="" className="form-label">availability status</label>
                          <input type="text" className="form-control" />
                    </div>
                    
                    
                    <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                         <button className="btn btn-primary">submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCar