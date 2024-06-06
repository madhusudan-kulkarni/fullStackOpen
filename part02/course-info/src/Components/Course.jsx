const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => {
        return <Part key={part.id} part={part} />;
      })}
    </div>
  );
};

const Total = ({ course }) => {
  const total = course.parts.reduce((s, p) => s + p.exercises, 0);
  return <p>Number of exercises {total}</p>;
};

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
          </div>
        );
      })}
    </div>
  );
};

export default Course;
