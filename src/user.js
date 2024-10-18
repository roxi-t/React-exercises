export const Lesson = (props) => {
  return (
    <div>
      <h1 className={props.finished ? "success" : "warning"}>
        Lesson is: {props.name}
      </h1>
    </div>
  );
};
