import React from "react";
import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";

function CourseForm(props) {
  return (
    <form>
      <TextInput
        id="title"
        label="Title"
        onChange={props.onChange}
        name="title"
        value={props.course.title}
      />

      <SelectInput
        id="author"
        name="authorId"
        onChange={props.onChange}
        value={props.course.authorId || ""}
        className="form-control"
      />

      <TextInput
        id="category"
        name="category"
        label="Category"
        onChange={props.onChange}
        value={props.course.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
