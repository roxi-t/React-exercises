import logo from "./logo.svg";
import { Lesson } from "./user.js";
import "./App.css";
import { useEffect, useState } from 'react';
import Course from "./Course.js";

function App() {
  const [courselist, setcourselist] = useState([]); // لیست دوره‌های موجود
  const [newcourse, setnewcourse] = useState(""); // دوره‌ی جدید

  // const [text, setText] = useState("");
  // useEffect(() => {
  //   console.log("component updated");
  // }, [text]);

  // useEffect(() => {
  //   console.log("did mount");
  //   return () => {
  //     console.log("component did unmount");
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log("did mount");
  // }, []); // خالی بودن آرایه وابستگی، فقط در بارگذاری اولیه اجرا می‌شود.

  const handelChange = (event) => {
    setnewcourse(event.target.value); // وقتی ورودی تغییر می‌کند، مقدار جدید به newcourse اختصاص داده می‌شود
  };


  const course = { 
    id: courselist.length === 0 ? 1 : courselist[courselist.length - 1].id + 1, // محاسبه‌ی id بر اساس طول لیست
    courseName: newcourse   
    ,
    isCompleted : false
  };

  const addCourse = () => {
    setcourselist([...courselist, course]); 
    setnewcourse(""); 
    console.log(courselist); 
  };

  const deletCourse = (courseId) => {
    const newCourseList = courselist.filter((course) => {
      return courseId !== course.id; 
    });
    setcourselist(newCourseList);
  };


  const completedCourse = (courseIde) => {
    const newCourseList = courselist.map((course) => {
      if (course.id === courseIde) return { ...course, isCompleted : !course.isCompleted }; // تنظیم isCompleted به true
      else return course;
    });
    setcourselist(newCourseList);  
  };

  return (
    <div className="App">

      <div className="add_courses">
        <input 
          type="text" 
          value={newcourse} 
          onChange={handelChange} 
          placeholder="Enter new course"
        />
        <button onClick={addCourse}>Add Course</button> 
      </div>

      <div className="list">
        {courselist.map((course) => {
          return (
            <Course 
              key={course.id} 
              course={course} 
              deletCourse={deletCourse} 
              completedCourse={completedCourse} 
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
