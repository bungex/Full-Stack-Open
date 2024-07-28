const Course = ({course}) => {

    return(
      <div>
        <Header />
        {course.map((sec) =>{
          return(
            <div key={sec.id}>
              <h2>{sec.name}</h2>
              <Content part={sec.parts}/>
              <Total part={sec.parts}/>
            </div>
            
          )
        }
        )}
      </div>
    )
  }
  
  const Total = ({part}) => {
    const sum = part.reduce((next, curr) => ({exercises: next.exercises + curr.exercises}))
    return(
      <div>
        Total of {sum.exercises} exercises 
      </div>
    )
  }
  
  
  //Working Code
  {/* {part.map((c) => (
          <div key={c.id}>
            <h2>{c.name} </h2>
            {c.parts.map(p => <div key={p.id}> {p.name}: {p.exercises} </div>)} 
          </div>
          )
        )} */}
  
  const Content = ({part}) => {
    return(
      <div>
        {part.map((p) => <div key={p.id}> {p.name}: {p.exercises}</div>)}       
      </div>
    )
  }
  
  const Header = () => {
    return(
      <h1>
        Web development curriculum
      </h1>
    )
  } 

  export default Course