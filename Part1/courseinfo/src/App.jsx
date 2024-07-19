//Create new components, Header, Content, Total and use props to pass data and stuff

const Header = (props) => {
  return(
    <h1>
      {props.course}
    </h1>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part}: {props.exercises}
    </p>
  )
}


const Content = (props) => {
  return(
    <>
    <Part part={props.parts[0].name} exercises={props.parts[0].exercises}></Part>
    <Part part={props.parts[1].name} exercises={props.parts[1].exercises}></Part>
    <Part part={props.parts[2].name} exercises={props.parts[2].exercises}></Part>
    </>
  )
}

const Total = (props) => {
  return(
    <p>
      Number of exrcises: {props.total}
    </p>
  )
}


const  App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  return (
    <div>
      <Header course={course}></Header>
      {/* <Content part={part1} exercises={exercises1}></Content>
      <Content part={part2} exercises={exercises2}></Content>
      <Content part={part3} exercises={exercises3}></Content> */}
      <Content parts={parts}></Content>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises }></Total>
    </div>
  )
}

export default App
