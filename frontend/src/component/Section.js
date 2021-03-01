import React, { useState, useEffect } from "react";
//import Design from './Design';
import Detail from './Detail';
const Section = () => {
  const [student, setStudent] = useState([]);
  const [showSection, setShowSection] = useState(true);
  const [showDetails,setShowDetails]=useState(false);
  const [unique,setUnique]=useState({roll:''})

  let classValue = 0;
  let sectionValue = "A";
  useEffect(() => {
    fetch("https://student-management-api-1u3cd4j7s.now.sh/students")
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        r.sort((a, b) => (a.class > b.class ? 1 : -1));
        console.log(r);

        const handler = (state) => {
          //  action(r)
          return [...state];
        };
        setStudent(handler(r));
        console.log(student);
      });
  }, []);

  const action = (value) => {
    value.sort((a, b) => (a.class > b.class ? 1 : -1));
  };

  function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  }

  return (
    <>
      <div className="">
        <div className="">
          <div className="">
            {student.map((checkClass, indexClass) => {
              if (classValue <= 14) classValue++;
              sectionValue = "A";
              return (
                <>
                  {classValue < 13 ? (
                    <li
                      style={{
                        position: "relative",
                        top: "10px",
                        left: "10px",
                        margin: "10px",
                        backgroundColor: "RGB(231,230,221)",
                        width: "20%",
                        height:"30px"
                      }}
                      onMouseEnter={() => {
                        setShowSection(false);
                      }}
                      onMouseLeave={() => {
                        setShowSection(true);
                      }}
                    >
                      {" "}
                      Class {classValue}
                    </li>
                  ) : null}
                  {student.map((checkSection, indexSection) => {
                    // console.log(sectionValue)
                    return (
                      <>
                        {student.map((checkName, indexName) => {
                          if (
                            checkName.class === classValue &&
                            checkName.section === sectionValue &&
                            classValue <= 100
                          ) {
                            // console.log(sectionValue, classValue);

                            return (
                              <>
                                <div></div>
                                <div
                                  className="elem"
                                  style={{
                                    backgroundcolor: "RGB(231,230,221)",
                                    width: "50%",
                                  }}
                                >
                                  <div style={{}}></div>

                                  {sectionValue < "M" ? (
                                    <div
                                      style={{
                                        backgroundcolor: "RGB(231,230,221)",
                                        width: "70%",
                                      }}
                                      hidden={showSection}
                                      onMouseEnter={() => {
                                        setShowSection(false);
                                      }}
                                      onMouseLeave={() => {
                                        setShowSection(true);
                                      }}
                                    >
                                      Section {sectionValue}
                                    </div>
                                  ) : null}
                                  <div className="" onMouseEnter={()=>{setShowDetails(true) ; setUnique({roll:checkName.rollNumber})}} onMouseLeave={()=>setShowDetails(false)}>{checkName.name} </div>
                                   {unique.roll===checkName.rollNumber   ? <Detail value={student} index={indexClass}/>:null}
                                </div>
                              </>
                            );
                          }
                        })}
                        <p hidden={true}>
                          {" "}
                          {(sectionValue = nextChar(sectionValue))}
                        </p>
                      </>
                    );
                  })}
                 
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
