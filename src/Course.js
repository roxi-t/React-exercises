const Course = (props) => {

    return (
      <div style={{ backgroundColor: props.course.isCompleted ? "green" : "white" }}> {/* تغییر رنگ بر اساس وضعیت isCompleted */}
        <h1>{props.course.courseName}</h1> {/* نمایش نام دوره */}
        <button onClick={() => props.deletCourse(props.course.id)}>del</button> {/* دکمه‌ی حذف دوره */}
        <button onClick={() => props.completedCourse(props.course.id)}>
          {props.course.isCompleted ? "Completed" : "Complete"} {/* تغییر متن دکمه بر اساس وضعیت */}
        </button>
      </div>
    );
  };
  
  export default Course;
  