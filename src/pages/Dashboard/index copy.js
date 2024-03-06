import React, {useState} from "react";
import "./styles.css";
import Table from "rowstack";

const columns = [
  {
    id: "name",
    name: "Name",
  },
  {
    id: "email",
    name: "Email",
  },
];



export default function App() {

  const [tableData, setTableData] = useState([
    {
      id: 0,
      name: "Uriel Russo",
      email: "dolor.vitae@icloud.ca",
    },
    {
      id: 1,
      name: "Priscilla Whitehead",
      email: "egestas.aliquam@icloud.ca",
    },
    {
      id: 2,
      name: "Mariam Christensen",
      email: "lectus@google.com",
    },
    {
      id: 3,
      name: "Elizabeth Hoffman",
      email: "tellus.nunc@google.ca",
    },
    {
      id: 4,
      name: "Zelda Hess",
      email: "phasellus.libero.mauris@icloud.ca",
    },
  ]);

  React.useEffect(()=>{
    console.log("tableData",tableData)
  },[tableData])

  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <iframe width="100%" height="850px" src="https://docs.google.com/spreadsheets/d/1jFSXEXDlvwmhZpSsC0XrFAABZfbVR4hWt7u_S4FEXlg/edit?usp=sharing?widget=true&amp;headers=false"></iframe>
      {/* <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6YqLZ_1DtwfyleWIRGSt8a6_aBLkcnB-GPxh2GwZFQMTl6-p5zjJmvmr02BAV1m_jvSW_UCUXb4s0/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe> */}
      {/* <div
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: 800,
          height: 600,
          border: "1px solid #ccc",
        }}
      >

        <Table data={tableData} columns={columns} onChange={setTableData}/>
      </div> */}
    </>
  );
}
