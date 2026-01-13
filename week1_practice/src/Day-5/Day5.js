import React from "react";
import Map from "./Map";
import employes from "./employes";
import Employee from "./Employee";
import products from "./products";
import ProductInfo from "./ProductInfo";
import RevisionDay5 from "./RevisionDay5";

export default function Day5() {
  return (
    <div>
      <h2>Day-5 of React Learning</h2>
      <Map />
      <h3>
        <b>Employees List:-</b>
      </h3>
      {employes.map((emp) => (
        <Employee key={emp.id} name={emp.name} shift={emp.shift} />
      ))}

      <h3>Product List(Practising Industry Standard of Props+map())</h3>
      {products.map((pinfo)=>(
        <ProductInfo
        key ={pinfo.id}
        pname={pinfo.pname}
        brand={pinfo.brand}
        price={pinfo.price}
        />
      ))}

      <RevisionDay5/>
    </div>
  );
}
